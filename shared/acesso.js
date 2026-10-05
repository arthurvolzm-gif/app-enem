/* =========================================================
   ACESSO POR CÓDIGO
   Cada produto tem um código. A pessoa recebe o link de acesso
   no e-mail da compra (ex.: /redacao?k=CODIGO). O app guarda o
   código no aparelho e libera o módulo correspondente.

   Aqui ficam só os HASHES (SHA-256) dos códigos, nunca o código
   em si: o repositório é público. Para trocar um código, gere o
   hash novo e substitua a linha (veja docs/acessos.md).

   Limite conhecido: o conteúdo dos módulos está no próprio site.
   Isso impede o acesso casual, não um curioso técnico. A correção
   por foto (que tem custo) é conferida também no servidor.
   ========================================================= */
(function(){
  const PRODUTOS = {
    arsenal:    'ef65b30c4e9bc1b3cfddb1ac23e7e36cb828ea0fa8727fb7f007eba31063a76e',
    correcao:   '3082b362e7ae5c0a3653272485f4602e43920a4afc2943519dc3c8c3f4839d61',
    plano:      '632360ae5c2f148ba47883bc23442f17bb964078dcb9d1d110086e4f562a1f03',
    exercicios: '41d8bd91b09126d0a0930bbea14a2322f4c3409ab90b76f71a859fd857af21e2'
  };
  const CHAVE = 'enem_acessos';

  async function sha256(txt){
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(txt));
    return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('');
  }
  function ler(){ try{ return JSON.parse(localStorage.getItem(CHAVE)||'{}'); }catch(e){ return {}; } }
  function gravar(o){ try{ localStorage.setItem(CHAVE, JSON.stringify(o)); }catch(e){} }

  /* tenta liberar um código; devolve o nome do produto ou null */
  async function resgatar(codigo){
    if(window.Conta && Conta.ativo) return Conta.usuario() ? Conta.resgatar(codigo) : null;   // com login, o código vai para a conta
    const c = String(codigo||'').trim().toUpperCase();
    if(!c) return null;
    const h = await sha256(c);
    const prod = Object.keys(PRODUTOS).find(p=>PRODUTOS[p]===h);
    if(!prod) return null;
    const a = ler(); a[prod] = c; gravar(a);
    return prod;
  }

  /* lê ?k=CODIGO (pode vir mais de um separado por vírgula) e limpa a URL */
  async function lerDaUrl(){
    if(window.Conta && Conta.ativo) return [];        // com login, Conta.iniciar() já tratou o ?k=
    const u = new URL(location.href);
    const k = u.searchParams.get('k');
    if(!k) return [];
    const liberados = [];
    for(const c of k.split(',')){ const p = await resgatar(c); if(p) liberados.push(p); }
    u.searchParams.delete('k');
    history.replaceState(null, '', u.pathname + (u.search||'') + u.hash);
    return liberados;
  }

  window.Acesso = {
    /* com login ligado, quem está logado entra direto nos produtos de LIBERADO_COM_CONTA
       (sem tela de código). Os bumps (correção, exercícios) continuam pedindo código. */
    tem: p => {
      const lib = (window.ENEM_CONFIG && ENEM_CONFIG.LIBERADO_COM_CONTA) || [];
      if(window.Conta && Conta.ativo && Conta.usuario() && lib.includes(p)) return true;
      return !!ler()[p];
    },
    codigo: p => ler()[p] || '',
    resgatar, lerDaUrl,
    sair: ()=>{ try{ localStorage.removeItem(CHAVE); }catch(e){} }
  };
})();
