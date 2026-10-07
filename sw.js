/* Service worker simples: rede primeiro, cache como reserva (funciona offline
   com o que já foi aberto). Nunca guarda as chamadas da API. */
const CACHE = 'enem-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || url.pathname.startsWith('/api/')) return;
  e.respondWith(
    fetch(req).then(res => {
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
      return res;
    }).catch(() => caches.match(req))
  );
});
/* notificação enviada pelo servidor (Web Push): título, texto e para onde abrir */
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = { titulo: 'Acelera Enem', corpo: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.titulo || 'Acelera Enem', {
    body: d.corpo || '',
    icon: '/shared/icone.svg',
    badge: '/shared/icone.svg',
    tag: d.tag || undefined,
    data: { url: d.url || '/materias#inicio' }
  }));
});
/* toque na notificação abre o app (na tela indicada) */
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/materias#hoje';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(lista => {
    for (const c of lista) { if (c.url.includes('/materias') && 'focus' in c) { c.navigate(url); return c.focus(); } }
    return self.clients.openWindow(url);
  }));
});
