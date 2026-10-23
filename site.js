/* Unique Boutique: shared data, header/footer and card markup */
const SEED = [
  { id: 'i-purse', kind: 'item', title: 'Beaded drawstring purse, long fringe', note: 'Patterned bead work in rust, sky blue and gold.', price: '', status: 'available', img: 'img/purse.jpg', fit: 'cover', added: '2026-10-21T17:50:00Z' },
  { id: 'i-oz', kind: 'item', title: 'Rinkitink in Oz and The Lost King of Oz', note: 'Two L. Frank Baum titles, illustrated by John R. Neill.', price: '', status: 'available', img: 'img/oz.jpg', fit: 'cover', added: '2026-10-21T17:40:00Z' },
  { id: 'i-candle', kind: 'item', title: 'Green glass candlestick', note: 'It glows bright green under a UV light.', price: '', status: 'available', img: 'img/candle.jpg', img2: 'img/candle-uv.jpg', fit: 'cover', added: '2026-10-21T17:30:00Z' },
  { id: 'i-bolo', kind: 'item', title: 'Bolo tie with gold crustacean medallion', note: 'Gold on black under glass, braided black cord.', price: '', status: 'available', img: 'img/bolo.jpg', fit: 'cover', added: '2026-10-21T17:20:00Z' },
  { id: 'i-manicure', kind: 'item', title: 'Vintage manicure set in a red case', note: 'Marbled pink handles, scissors, file and a mirror in the lid.', price: '', status: 'available', img: 'img/manicure.jpg', fit: 'contain', added: '2026-10-21T17:10:00Z' },
  { id: 'i-basket', kind: 'item', title: 'Lidded basket with bead and coin tassel', note: 'Fine weave, with a long silk tassel.', price: '', status: 'available', img: 'img/basket.jpg', fit: 'cover', added: '2026-10-21T17:00:00Z' },
  { id: 'i-postcard', kind: 'item', title: 'Postcard: U.S. Cavalry on fallen Monarch', note: 'Mariposa Grove, California. Published in San Francisco.', price: '', status: 'available', img: 'img/postcard.jpg', fit: 'contain', added: '2026-10-21T16:50:00Z' },
  { id: 'i-valentine', kind: 'item', title: 'Honeycomb paper Valentine', note: 'Folding tissue honeycomb with a cherub and a sentiment heart.', price: '', status: 'sold', img: 'img/valentine.jpg', fit: 'cover', added: '2026-10-21T16:40:00Z' },
  { id: 'i-opener', kind: 'item', title: 'San Francisco souvenir letter opener', note: 'Sword shaped, with a braided cord and tassel.', price: '', status: 'sold', img: 'img/opener.jpg', fit: 'cover', added: '2026-10-21T16:30:00Z' },
  { id: 's-cans', kind: 'scene', title: 'Jack-o-lantern cans on the porch steps', img: 'img/cans.jpg', added: '2026-10-23T13:05:00Z' },
  { id: 's-chatnoir', kind: 'scene', title: 'Chat Noir poster, red shelves and a doorman dog', img: 'img/chatnoir.jpg', added: '2026-10-23T13:04:00Z' },
  { id: 's-jewelry', kind: 'scene', title: 'The jewelry case', img: 'img/jewelry.jpg', added: '2026-10-23T13:03:00Z' },
  { id: 's-sparkle', kind: 'scene', title: 'Black leather, crystal and wings', img: 'img/sparkle.jpg', added: '2026-10-23T13:02:00Z' },
  { id: 's-blueglass', kind: 'scene', title: 'Cobalt and gold glass', img: 'img/blueglass.jpg', added: '2026-10-23T13:01:00Z' },
  { id: 's-shirts', kind: 'scene', title: 'Aloha shirts, hung to the rafters', img: 'img/shirts.jpg', added: '2026-10-22T06:00:00Z' },
  { id: 's-crock', kind: 'scene', title: 'Crock, pump and a stack of color', img: 'img/crock.jpg', added: '2026-10-22T09:00:00Z' },
  { id: 's-records', kind: 'scene', title: 'The record bins, freshly flipped', img: 'img/records.jpg', added: '2026-10-22T08:00:00Z' },
  { id: 's-castiron', kind: 'scene', title: 'Cast iron, moved to the front', img: 'img/castiron.jpg', added: '2026-10-22T07:00:00Z' }
];

if (typeof window !== 'undefined') (function () {
  const SITE = { name: 'Unique Boutique', addr1: '111 Mayfair St', addr2: 'Willow Creek, CA', phone: '(707) 599-5811', tel: '7075995811', hours: '[open days and times]' };
  const KEY = (w, c, sw) => '<svg width="' + w + '" height="' + Math.round(w * 0.4) + '" viewBox="0 0 120 40" fill="none" stroke="' + c + '" stroke-width="' + sw + '" stroke-linecap="round" aria-hidden="true"><circle cx="17" cy="20" r="12"/><circle cx="17" cy="20" r="3.5" fill="' + c + '" stroke="none"/><path d="M30 20H112M96 20v11M107 20v8"/></svg>';
  const LOCK = '<svg width="16" height="18" viewBox="0 0 24 28" fill="none" stroke="#e8c27a" stroke-width="3" stroke-linecap="round" aria-hidden="true"><rect x="4" y="12" width="16" height="13" rx="2" fill="#e8c27a" stroke="none"/><path d="M7.5 12V8a4.5 4.5 0 0 1 9 0v4"/></svg>';

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const src = (d) => (d.imgId ? '/_blob/' + encodeURIComponent(d.imgId) : d.img || '');
  const src2 = (d) => (d.imgId2 ? '/_blob/' + encodeURIComponent(d.imgId2) : d.img2 || '');
  const priceText = (d) => (d.price ? d.price : 'Ask in store');
  const fmt = (iso) => { try { return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); } catch (e) { return ''; } };

  const state = { docs: SEED.map((x) => Object.assign({}, x)), live: false, db: null, ready: false };
  const subs = new Set();
  const sorted = () => state.docs.slice().sort((a, b) => String(b.added || '').localeCompare(String(a.added || '')));
  const emit = () => { const l = sorted(); subs.forEach((f) => { try { f(l); } catch (e) { console.error(e); } }); };
  let started = false, readyRes;
  const ready = new Promise((r) => { readyRes = r; });
  async function connect() {
    if (started) return; started = true;
    let db = null;
    try { db = window.claude && window.claude.use ? await window.claude.use('db') : null; } catch (e) { db = null; }
    state.db = db; state.ready = true; readyRes(db);
    if (!db) return;
    try {
      db.collection('items').onSnapshot((snap) => {
        const d = snap.docs.map((s) => Object.assign({ id: s.id }, s.data()));
        if (d.length || state.live) { state.docs = d; state.live = true; emit(); }
      }, () => {});
    } catch (e) { /* keep the sample items */ }
  }
  function subscribe(fn) { subs.add(fn); fn(sorted()); connect(); return () => subs.delete(fn); }

  function chrome(active) {
    const link = (id, href, label) => '<a href="' + href + '"' + (active === id ? ' aria-current="page"' : '') + '>' + label + '</a>';
    const h = document.getElementById('hdr');
    if (h) h.innerHTML = '<header class="hdr"><div class="wrap"><a class="brand" href="index.html" aria-label="' + SITE.name + '">' + KEY(54, '#e8c27a', 5) + '<span>' + SITE.name + '</span></a><nav class="nav" aria-label="Main">' +
      link('home', 'index.html', 'Home') + link('magazine', 'magazine.html', 'The Magazine') + link('shop', 'shop.html', 'The Shop') + link('about', 'about.html', 'About') + link('visit', 'index.html#visit', 'Visit') + (window.claude ? link('owner', 'owner.html', 'Owner') : '') + '</nav></div></header>';
    const f = document.getElementById('ftr');
    if (f) f.innerHTML = '<footer class="ftr"><div class="wrap"><div class="brandline">' + KEY(44, '#e8c27a', 6) + '<span>' + SITE.name + ' &middot; Willow Creek, California</span></div><div id="updated"></div></div></footer>';
    subscribe((l) => { const u = document.getElementById('updated'); if (u && l[0]) u.textContent = 'Last updated ' + fmt(l[0].added); });
  }

  function card(d, opts) {
    opts = opts || {};
    const sold = d.status === 'sold';
    const two = !!(d.img2 || d.imgId2);
    const id = esc(d.id);
    return '<article class="card' + (sold ? ' sold' : '') + '">' +
      '<button class="ph" type="button"' + (opts.preview ? ' tabindex="-1"' : ' data-open="' + id + '"') + ' aria-label="' + esc('View ' + d.title) + '">' +
      '<img class="' + (d.fit === 'contain' ? 'contain' : '') + '" src="' + esc(opts.srcOverride || src(d)) + '" alt="' + esc(d.title) + '">' +
      (sold ? '<span class="badge sold">' + LOCK + 'Sold</span>' : '') + (two ? '<span class="badge two">2 photos</span>' : '') + '</button>' +
      '<h2>' + esc(d.title) + '</h2><div class="row"><span class="price' + (d.price ? '' : ' ask') + '">' + esc(priceText(d)) + '</span><span class="muted" style="font-size:14px">Added ' + esc(fmt(d.added)) + '</span></div>' +
      (d.note ? '<p class="note">' + esc(d.note) + '</p>' : '') +
      (opts.preview ? '' : '<div class="acts"><button class="ghost" type="button" data-open="' + id + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V3M7 8l5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>Details and share</button></div>') +
      '</article>';
  }

  function caption(d) {
    const link = location.href.split('#')[0].replace(/[^/]*$/, '') + 'shop.html';
    return d.title + ' — ' + (d.kind === 'item' ? priceText(d) : 'seen in the shop this week') + '\n' + (d.note ? d.note + '\n' : '') +
      'Come see it at ' + SITE.name + ', ' + SITE.addr1 + ', ' + SITE.addr2 + '. ' + SITE.phone + '\n' + link;
  }

  let toastTimer;
  function toast(msg, action) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.innerHTML = '<span></span>'; t.firstChild.textContent = msg;
    if (action) { const b = document.createElement('button'); b.type = 'button'; b.textContent = action.label; b.onclick = () => { t.hidden = true; action.run(); }; t.appendChild(b); }
    t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, action ? 9000 : 3500);
  }

  async function copy(text, area) {
    try { await navigator.clipboard.writeText(text); toast('Copied. Paste it into your Facebook post.'); return true; }
    catch (e) { if (area) { area.focus(); area.select(); } toast('Select the text and copy it.'); return false; }
  }

  /* Letter-by-letter lettering, loosely after the hand-set sign: [rotate deg, lift em, scale, italic, weight] */
  const SPEC = {
    UNIQUE: [[-3, 0, 1.16, 0, 900], [-17, .14, 1, 1, 600], [6, -.1, .95, 0, 700], [14, .06, 1.22, 0, 500], [-5, -.08, 1, 0, 700], [19, .12, 1.05, 1, 600]],
    BOUTIQUE: [[8, 0, 1.06, 0, 800], [-14, .2, .78, 0, 900], [4, -.04, 1.1, 0, 500], [-9, -.12, .95, 0, 700], [-21, .06, 1, 1, 600], [11, .04, 1.22, 0, 500], [-7, -.06, 1, 0, 800], [-12, .1, 1.1, 1, 600]]
  };
  const DEF = [[-6, 0, 1.08, 0, 800], [9, .08, .95, 1, 600], [-3, -.07, 1.02, 0, 700], [12, .06, 1.1, 0, 500], [-10, .04, .98, 1, 700], [5, -.06, 1.05, 0, 800], [-8, .08, 1, 1, 600]];
  const VKEY = '<svg viewBox="0 0 40 120" aria-hidden="true" style="height:1.12em;width:.373em;display:block"><circle cx="20" cy="17" r="12" fill="none" stroke="currentColor" stroke-width="9"/><rect x="15.5" y="29" width="9" height="86" rx="3" fill="currentColor"/><rect x="22" y="90" width="14" height="7" rx="2" fill="currentColor"/><rect x="22" y="103" width="10" height="7" rx="2" fill="currentColor"/></svg>';
  const PADLOCK = '<svg viewBox="0 0 100 112" aria-hidden="true" style="height:.86em;width:.78em;display:block"><path d="M28 52V36a22 22 0 0 1 44 0v16" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"/><rect x="12" y="48" width="76" height="58" rx="11" fill="currentColor"/><circle cx="50" cy="72" r="8" fill="#2a1a12"/><rect x="46" y="76" width="8" height="18" rx="3" fill="#2a1a12"/></svg>';
  function quirk() {
    document.querySelectorAll('[data-q]').forEach((el) => {
      const t = el.getAttribute('data-q'), sp = SPEC[t] || DEF; let n = 0; el.textContent = '';
      for (const ch of t) {
        const s = document.createElement('span');
        if (ch === ' ') { s.className = 'q sp'; el.appendChild(s); continue; }
        const v = sp[n++ % sp.length];
        s.className = 'q'; s.textContent = ch;
        if (el.hasAttribute('data-icons') && ch === 'I') { s.className = 'q ic'; s.innerHTML = VKEY; }
        else if (el.hasAttribute('data-icons') && ch === 'O') { s.className = 'q ic'; s.innerHTML = PADLOCK; }
        s.style.transform = 'translateY(' + (-v[1]) + 'em) rotate(' + v[0] + 'deg) scale(' + v[2] + ')';
        s.style.fontStyle = v[3] ? 'italic' : 'normal';
        s.style.fontWeight = v[4];
        s.style.fontVariationSettings = "'SOFT' 100, 'WONK' 1";
        el.appendChild(s);
      }
    });
  }
  quirk();

  window.UB = { SITE, KEY, LOCK, esc, src, src2, priceText, fmt, subscribe, chrome, card, caption, toast, copy, ready, state, getDb: () => state.db };
})();

if (typeof module !== 'undefined') module.exports = { SEED };
