/* =========================================================
   CONTA (Supabase): criar conta, entrar e salvar o progresso
   Uma conta serve para os dois apps (/redacao e /materias).

   Liga sozinho quando SUPABASE_URL e SUPABASE_KEY estão em
   shared/config.js. Vazio = os apps funcionam como antes,
   salvando só no aparelho e liberando por código.
   ========================================================= */
(function(){
  const C = window.ENEM_CONFIG || {};
  const ATIVO = !!(C.SUPABASE_URL && C.SUPABASE_KEY);

  /* chaves do localStorage que vão para a conta */
  const SINCRONIZAR = [
    'red_favs','red_correcoes','red_montar','red_ultimo_tema',
    'mat_perfil','mat_lidos','mat_tempo','mat_resp','mat_dias_leitura',
    'mat_lidos_em','mat_atrib','mat_revisoes','mat_resp_dia','mat_checkin','mat_notif_lidas','mat_madrugou','mat_coruja','mat_simulado_pref',
    'enem_quiz1','enem_quiz2'
  ];
  const PENDENTE = 'enem_codigo_pendente';

  let sb = null, usuario = null, timer = null, salvando = false, sujo = false;

  function carregarSDK(){
    if(window.supabase) return Promise.resolve();
    return new Promise((ok, erro)=>{
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      s.onload = ok; s.onerror = ()=>erro(new Error('Não foi possível carregar o login. Verifique a internet.'));
      document.head.appendChild(s);
    });
  }

  function lerLocal(){
    const d = {};
    SINCRONIZAR.forEach(k=>{ try{ const v = localStorage.getItem(k); if(v!=null) d[k] = JSON.parse(v); }catch(e){} });
    return d;
  }
  function gravarLocal(d){
    SINCRONIZAR.forEach(k=>{ try{ if(k in d) localStorage.setItem(k, JSON.stringify(d[k])); }catch(e){} });
  }
  function limparLocal(){
    SINCRONIZAR.concat(['enem_acessos','mat_timer']).forEach(k=>{ try{ localStorage.removeItem(k); }catch(e){} });
  }

  /* traz o progresso e os acessos da conta para o aparelho */
  async function baixar(){
    /* compras feitas com o mesmo e-mail antes da conta (webhook) viram acesso agora */
    try{ await sb.rpc('sincronizar_acessos'); }catch(e){}
    const [dados, acessos] = await Promise.all([
      sb.from('dados_usuario').select('dados').eq('user_id', usuario.id).maybeSingle(),
      sb.from('acessos').select('produto')
    ]);
    if(dados.error) throw dados.error;
    if(dados.data && dados.data.dados && Object.keys(dados.data.dados).length){
      gravarLocal(dados.data.dados);
    } else {
      /* conta nova: o que já estava no aparelho vira o ponto de partida */
      await subir();
    }
    const mapa = {};
    (acessos.data||[]).forEach(a=>{ mapa[a.produto] = 'conta'; });
    try{ localStorage.setItem('enem_acessos', JSON.stringify(mapa)); }catch(e){}
  }

  async function subir(){
    if(!usuario) return;
    if(salvando){ sujo = true; return; }
    salvando = true;
    try{
      const { error } = await sb.from('dados_usuario').upsert({ user_id: usuario.id, dados: lerLocal(), atualizado_em: new Date().toISOString() });
      if(error) console.error('Erro ao salvar na conta:', error.message);
    } finally {
      salvando = false;
      if(sujo){ sujo = false; subir(); }
    }
  }

  async function resgatarPendente(){
    let c = null; try{ c = localStorage.getItem(PENDENTE); }catch(e){}
    if(!c) return [];
    try{ localStorage.removeItem(PENDENTE); }catch(e){}
    const lib = [];
    for(const cod of c.split(',')){ const p = await resgatar(cod); if(p) lib.push(p); }
    return lib;
  }

  async function resgatar(codigo){
    const { data, error } = await sb.rpc('resgatar_codigo', { codigo: String(codigo||'').trim().toUpperCase() });
    if(error){ console.error(error.message); return null; }
    if(data){
      let m = {}; try{ m = JSON.parse(localStorage.getItem('enem_acessos')||'{}'); }catch(e){}
      m[data] = 'conta'; try{ localStorage.setItem('enem_acessos', JSON.stringify(m)); }catch(e){}
    }
    return data || null;
  }

  function traduzErro(e){
    const m = String((e && e.message) || e || '');
    if(/Invalid login credentials/i.test(m)) return 'E-mail ou senha incorretos.';
    if(/already registered|already been registered|User already/i.test(m)) return 'Este e-mail já tem conta. Toque em "Entrar".';
    if(/Password should be at least/i.test(m)) return 'A senha precisa ter pelo menos 6 caracteres.';
    if(/Email not confirmed/i.test(m)) return 'Confirme o seu e-mail pelo link que enviamos e depois entre.';
    if(/invalid.*email|Unable to validate email/i.test(m)) return 'Esse e-mail não parece válido.';
    if(/rate limit|too many/i.test(m)) return 'Muitas tentativas. Espere um minuto e tente de novo.';
    return m || 'Algo deu errado. Tente de novo.';
  }

  window.Conta = {
    ativo: ATIVO,
    recuperando: false,
    usuario: ()=>usuario,
    nome: ()=> (usuario && usuario.user_metadata && usuario.user_metadata.nome) || '',

    /* chama no início do app: devolve os produtos liberados agora (se houver) */
    async iniciar(){
      if(!ATIVO) return [];
      /* código que chegou pelo link da compra: guarda até a pessoa entrar */
      const u = new URL(location.href);
      const k = u.searchParams.get('k');
      if(k){
        try{ localStorage.setItem(PENDENTE, k); }catch(e){}
        u.searchParams.delete('k');
        history.replaceState(null, '', u.pathname + (u.search||'') + u.hash);
      }
      /* volta do e-mail de "esqueci a senha": o Supabase manda os tokens no #hash */
      Conta.recuperando = /type=recovery/.test(location.hash);
      await carregarSDK();
      sb = window.supabase.createClient(C.SUPABASE_URL, C.SUPABASE_KEY, { auth:{ persistSession:true, autoRefreshToken:true, detectSessionInUrl:true } });
      const { data } = await sb.auth.getSession();
      if(/access_token=|type=recovery|error_description=/.test(location.hash)) history.replaceState(null, '', location.pathname);
      usuario = data.session ? data.session.user : null;
      if(!usuario) return [];
      await baixar();
      return resgatarPendente();
    },

    async criar(nome, email, senha){
      const { data, error } = await sb.auth.signUp({ email:email.trim(), password:senha, options:{ data:{ nome:nome.trim() } } });
      if(error) throw new Error(traduzErro(error));
      if(!data.session) throw new Error('Conta criada! Confirme o seu e-mail pelo link que enviamos e depois entre.');
      usuario = data.user;
      await baixar();
      return resgatarPendente();
    },

    async entrar(email, senha){
      const { data, error } = await sb.auth.signInWithPassword({ email:email.trim(), password:senha });
      if(error) throw new Error(traduzErro(error));
      usuario = data.user;
      await baixar();
      return resgatarPendente();
    },

    async sair(){
      await subir();
      await sb.auth.signOut();
      usuario = null;
      limparLocal();
    },

    async recuperarSenha(email){
      const { error } = await sb.auth.resetPasswordForEmail(email.trim(), { redirectTo: location.origin + location.pathname });
      if(error) throw new Error(traduzErro(error));
    },
    async trocarSenha(senha){
      const { error } = await sb.auth.updateUser({ password: senha });
      if(error) throw new Error(traduzErro(error));
    },

    /* link temporário (5 min) de um PDF do bucket privado 'materiais'; só quem tem o plano consegue */
    async urlMaterial(arquivo){
      const { data, error } = await sb.storage.from('materiais').createSignedUrl(arquivo, 300);
      if(error) throw error;
      return data && data.signedUrl;
    },
    resgatar,

    /* atualiza os acessos da conta (ex.: depois de comprar um bump) sem recarregar a página */
    async atualizarAcessos(){
      if(!sb || !usuario) return;
      try{ await sb.rpc('sincronizar_acessos'); }catch(e){}
      const { data } = await sb.from('acessos').select('produto');
      const mapa = {}; (data||[]).forEach(a=>{ mapa[a.produto] = 'conta'; });
      try{ localStorage.setItem('enem_acessos', JSON.stringify(mapa)); }catch(e){}
      return Object.keys(mapa);
    },

    /* grava as preferências de aviso e a inscrição de push da pessoa */
    async salvarPrefs(prefs){
      if(!sb || !usuario) return;
      const { error } = await sb.from('notif_prefs').upsert(Object.assign({ user_id: usuario.id, atualizado_em: new Date().toISOString() }, prefs));
      if(error) console.error('Erro ao salvar avisos:', error.message);
    },
    async salvarPush(sub){
      if(!sb || !usuario || !sub) return false;
      const j = sub.toJSON();
      const { error } = await sb.from('push_inscricoes').upsert({ endpoint: j.endpoint, user_id: usuario.id, p256dh: j.keys.p256dh, auth: j.keys.auth });
      if(error){ console.error('Erro ao salvar push:', error.message); return false; }
      return true;
    },

    /* chamado a cada mudança no progresso: salva na conta 1,5 s depois */
    agendar(){
      if(!usuario) return;
      clearTimeout(timer);
      timer = setTimeout(subir, 1500);
    },

    /* token para o servidor saber quem está pedindo a correção */
    async token(){
      if(!sb) return '';
      const { data } = await sb.auth.getSession();
      return data.session ? data.session.access_token : '';
    },

    /* tela de criar conta / entrar (usa as classes de shared/app.css) */
    telaLogin(el, titulo, aoEntrar){
      let modo = 'criar';
      const val = { cNome:'', cEmail:'' };   // mantém o que a pessoa digitou quando a tela redesenha
      function S(s){ return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
      function pinta(msg, erro){
        ['cNome','cEmail'].forEach(id=>{ const i = el.querySelector('#'+id); if(i) val[id] = i.value; });
        el.innerHTML = `<div class="top"><h1>${S(titulo)}</h1></div>
        <div class="pg fade">
          <div class="card hero"><h2>${modo==='criar'?'Crie a sua conta':modo==='entrar'?'Entre na sua conta':'Recuperar senha'}</h2>
            <p>${modo==='recuperar'?'Enviaremos um link para você criar uma senha nova.':'Assim o seu progresso fica salvo e você acessa de qualquer aparelho.'}</p></div>
          <div class="card">
            ${modo==='criar'?'<label class="f" for="cNome">Seu primeiro nome</label><input class="inp" id="cNome" autocomplete="given-name" maxlength="30">':''}
            <label class="f" for="cEmail">E-mail (o mesmo da compra)</label>
            <input class="inp" id="cEmail" type="email" autocomplete="email" inputmode="email">
            ${modo!=='recuperar'?`<label class="f" for="cSenha">Senha</label><input class="inp" id="cSenha" type="password" autocomplete="${modo==='criar'?'new-password':'current-password'}" placeholder="${modo==='criar'?'Mínimo de 6 caracteres':''}">`:''}
            ${msg?`<p style="margin-top:12px;font-size:14px;font-weight:700;color:${erro?'var(--vermelho)':'var(--verde)'};">${S(msg)}</p>`:''}
            <div class="sp"></div>
            <button class="btn" id="cOk">${modo==='criar'?'Criar conta':modo==='entrar'?'Entrar':'Enviar link'}</button>
            <p style="text-align:center;margin-top:14px;font-size:14px;">
              ${modo==='criar'?'Já tem conta? <a href="#" id="cTroca" style="color:var(--verde);font-weight:800;">Entrar</a>'
                :modo==='entrar'?'Não tem conta? <a href="#" id="cTroca" style="color:var(--verde);font-weight:800;">Criar conta</a><br><a href="#" id="cEsqueci" style="color:var(--cinza2);display:inline-block;margin-top:10px;">Esqueci a senha</a>'
                :'<a href="#" id="cTroca" style="color:var(--verde);font-weight:800;">Voltar para entrar</a>'}
            </p>
          </div>
        </div>`;
        ['cNome','cEmail'].forEach(id=>{ const i = el.querySelector('#'+id); if(i) i.value = val[id]; });
        const ok = el.querySelector('#cOk');
        el.querySelector('#cTroca').onclick = e=>{ e.preventDefault(); modo = modo==='criar' ? 'entrar' : (modo==='entrar' ? 'criar' : 'entrar'); pinta(); };
        const esq = el.querySelector('#cEsqueci'); if(esq) esq.onclick = e=>{ e.preventDefault(); modo='recuperar'; pinta(); };
        async function enviar(){
          const email = el.querySelector('#cEmail').value, senhaEl = el.querySelector('#cSenha');
          ok.disabled = true; ok.textContent = 'Aguarde...';
          try{
            if(modo==='recuperar'){ await Conta.recuperarSenha(email); modo='entrar'; pinta('Se o e-mail tiver conta, o link chega em instantes. Confira também o spam.'); return; }
            const lib = modo==='criar'
              ? await Conta.criar(el.querySelector('#cNome').value, email, senhaEl.value)
              : await Conta.entrar(email, senhaEl.value);
            aoEntrar(lib);
          }catch(e){ pinta(e.message, true); }
        }
        ok.onclick = enviar;
        el.querySelectorAll('input').forEach(i=>i.addEventListener('keydown',e=>{ if(e.key==='Enter') enviar(); }));
      }
      pinta();
    },

    /* tela para criar a senha nova (link do e-mail de recuperação) */
    telaNovaSenha(el, titulo, depois){
      el.innerHTML = `<div class="top"><h1>${titulo}</h1></div><div class="pg fade"><div class="card">
        <h2>Crie uma senha nova</h2>
        <label class="f" for="nSenha">Nova senha</label><input class="inp" id="nSenha" type="password" autocomplete="new-password" placeholder="Mínimo de 6 caracteres">
        <p id="nMsg" style="margin-top:10px;font-size:14px;font-weight:700;color:var(--vermelho);"></p>
        <button class="btn" id="nOk">Salvar senha</button></div></div>`;
      el.querySelector('#nOk').onclick = async ()=>{
        try{ await Conta.trocarSenha(el.querySelector('#nSenha').value); depois(); }
        catch(e){ el.querySelector('#nMsg').textContent = e.message; }
      };
    }
  };
})();
