/* ==========================================================================
   core.js — bütün demo saytlar üçün ortaq mühərrik (dəyişməyə ehtiyac yoxdur)
   Funksiyalar: AZ/RU dil, WhatsApp səbət və rezerv formu, iş saatı,
   xəritə, SEO (JSON-LD), animasiyalar, mobil menyu.
   Saytın bütün məzmunu data.js faylındadır.
   ========================================================================== */
(function () {
  'use strict';
  var S = window.SITE || {};
  S.t = S.t || {};
  var LS_KEY = 'site_' + (S.id || 'demo');
  var handlers = {};

  function store(k, v) {
    try {
      if (v === undefined) return JSON.parse(localStorage.getItem(LS_KEY + '_' + k));
      localStorage.setItem(LS_KEY + '_' + k, JSON.stringify(v));
    } catch (e) { return null; }
  }

  var BASE_T = {
    days: { az: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
            ru: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'] },
    openNow: { az: 'İndi açıqdır', ru: 'Сейчас открыто' },
    closedNow: { az: 'Hazırda bağlıdır', ru: 'Сейчас закрыто' },
    until: { az: '{t}-dək', ru: 'до {t}' },
    opensAt: { az: '{d} {t}-da açılır', ru: 'Откроется {d} в {t}' },
    today: { az: 'bu gün', ru: 'сегодня' },
    tomorrow: { az: 'sabah', ru: 'завтра' },
    closed: { az: 'Bağlıdır', ru: 'Выходной' },
    allDay: { az: '24 saat', ru: 'Круглосуточно' },
    cart: { az: 'Səbət', ru: 'Корзина' },
    cartEmpty: { az: 'Səbət boşdur', ru: 'Корзина пуста' },
    total: { az: 'Cəmi', ru: 'Итого' },
    added: { az: 'Səbətə əlavə olundu', ru: 'Добавлено в корзину' },
    order: { az: 'WhatsApp ilə sifariş et', ru: 'Заказать через WhatsApp' },
    yourName: { az: 'Adınız', ru: 'Ваше имя' },
    yourPhone: { az: 'Telefon', ru: 'Телефон' },
    address: { az: 'Ünvan', ru: 'Адрес' },
    note: { az: 'Qeyd (istəyə görə)', ru: 'Комментарий (необязательно)' },
    delivery: { az: 'Çatdırılma', ru: 'Доставка' },
    pickup: { az: 'Özüm götürəcəyəm', ru: 'Самовывоз' },
    hello: { az: 'Salam! Saytdan sifariş:', ru: 'Здравствуйте! Заказ с сайта:' },
    helloForm: { az: 'Salam! Saytdan müraciət:', ru: 'Здравствуйте! Заявка с сайта:' },
    sent: { az: 'WhatsApp açılır…', ru: 'Открываем WhatsApp…' },
    clear: { az: 'Təmizlə', ru: 'Очистить' },
    close: { az: 'Bağla', ru: 'Закрыть' },
    call: { az: 'Zəng et', ru: 'Позвонить' },
    minOrder: { az: 'Minimum sifariş: {n}', ru: 'Минимальный заказ: {n}' },
    freeDelivery: { az: '{n}-dan yuxarı çatdırılma pulsuz', ru: 'Бесплатная доставка от {n}' }
  };

  var lang = store('lang') || S.defaultLang || 'az';
  if (!(S.langs || ['az', 'ru']).includes(lang)) lang = 'az';

  var Core = {
    S: S,
    get lang() { return lang; },
    tr: function (v) {
      if (v == null) return '';
      if (typeof v === 'object' && !Array.isArray(v)) return v[lang] != null ? v[lang] : (v.az != null ? v.az : '');
      return v;
    },
    t: function (key, vars) {
      var v = S.t[key] != null ? S.t[key] : BASE_T[key];
      var s = v == null ? key : Core.tr(v);
      if (vars) Object.keys(vars).forEach(function (k) { s = String(s).split('{' + k + '}').join(vars[k]); });
      return s;
    },
    esc: function (s) {
      return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
      });
    },
    money: function (n) {
      var v = Math.round(Number(n) * 100) / 100;
      var s = (v % 1 === 0) ? String(v) : v.toFixed(2);
      return s + ' ' + (S.currency || '₼');
    },
    on: function (evt, fn) { (handlers[evt] = handlers[evt] || []).push(fn); },
    emit: function (evt, data) { (handlers[evt] || []).forEach(function (fn) { fn(data); }); },
    wa: function (text) {
      return 'https://wa.me/' + String(S.whatsapp || '').replace(/\D/g, '') + (text ? '?text=' + encodeURIComponent(text) : '');
    },
    openWa: function (text) {
      Core.toast(Core.t('sent'));
      window.open(Core.wa(text), '_blank', 'noopener');
    },
    setLang: function (l) {
      lang = l;
      store('lang', l);
      document.documentElement.lang = l;
      Core.emit('lang', l);
      applyI18n(document);
      renderHours();
      if (Core.cart) Core.cart.render();
      Core.observe();
    },
    $: function (sel, root) { return (root || document).querySelector(sel); },
    $$: function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); },
    applyI18n: function (root) { applyI18n(root || document); }
  };
  window.Core = Core;

  /* ---------- i18n + data bindings ---------- */
  function applyI18n(root) {
    Core.$$('[data-t]', root).forEach(function (el) { el.textContent = Core.t(el.getAttribute('data-t')); });
    Core.$$('[data-th]', root).forEach(function (el) { el.innerHTML = Core.t(el.getAttribute('data-th')); });
    Core.$$('[data-tp]', root).forEach(function (el) { el.placeholder = Core.t(el.getAttribute('data-tp')); });
    Core.$$('[data-s]', root).forEach(function (el) {
      var path = el.getAttribute('data-s').split('.'), v = S;
      path.forEach(function (p) { v = v == null ? v : v[p]; });
      el.textContent = Core.tr(v);
    });
    Core.$$('[data-lang]', root).forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    Core.$$('[data-href]', root).forEach(function (a) {
      var k = a.getAttribute('data-href');
      if (k === 'tel') a.href = 'tel:' + String(S.phone || '').replace(/[^\d+]/g, '');
      else if (k === 'wa') a.href = Core.wa(a.hasAttribute('data-wa-text') ? Core.t(a.getAttribute('data-wa-text')) : '');
      else if (k === 'insta') a.href = 'https://instagram.com/' + (S.instagram || '').replace('@', '');
      else if (k === 'map' && S.map) a.href = 'https://www.google.com/maps/dir/?api=1&destination=' + S.map.lat + ',' + S.map.lng;
      if (k !== 'tel') { a.target = '_blank'; a.rel = 'noopener'; }
    });
  }

  /* ---------- opening hours ---------- */
  function parseRange(r) {
    if (!r) return null;
    var m = String(r).split('-');
    function mins(x) { var p = x.trim().split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
    var a = mins(m[0]), b = mins(m[1]);
    if (b <= a) b += 24 * 60;
    return [a, b];
  }
  function openState() {
    if (!S.hours) return null;
    var now = new Date(), d = now.getDay(), m = now.getHours() * 60 + now.getMinutes();
    var y = parseRange(S.hours[(d + 6) % 7]);
    if (y && y[1] > 1440 && m < y[1] - 1440) return { open: true, until: S.hours[(d + 6) % 7].split('-')[1] };
    var r = parseRange(S.hours[d]);
    if (r && m >= r[0] && m < r[1]) {
      if (r[1] - r[0] >= 1440) return { open: true, allDay: true };
      return { open: true, until: S.hours[d].split('-')[1] };
    }
    for (var i = 0; i < 8; i++) {
      var dd = (d + i) % 7, rr = parseRange(S.hours[dd]);
      if (!rr) continue;
      if (i === 0 && m >= rr[0]) continue;
      var dayWord = i === 0 ? Core.t('today') : i === 1 ? Core.t('tomorrow') : Core.tr(BASE_T.days)[dd];
      return { open: false, at: S.hours[dd].split('-')[0], day: dayWord };
    }
    return { open: false };
  }
  function renderHours() {
    Core.$$('[data-open]').forEach(function (el) {
      var st = openState();
      if (!st) { el.hidden = true; return; }
      el.classList.toggle('is-open', st.open);
      el.classList.toggle('is-closed', !st.open);
      var txt = st.open
        ? Core.t('openNow') + (st.allDay ? ' · ' + Core.t('allDay') : st.until ? ' · ' + Core.t('until', { t: st.until }) : '')
        : Core.t('closedNow') + (st.at ? ' · ' + Core.t('opensAt', { d: st.day, t: st.at }) : '');
      el.innerHTML = '<i class="dot"></i>' + Core.esc(txt);
    });
    Core.$$('[data-hours]').forEach(function (el) {
      if (!S.hours) return;
      var days = Core.tr(BASE_T.days), today = new Date().getDay(), html = '';
      [1, 2, 3, 4, 5, 6, 0].forEach(function (d) {
        var h = S.hours[d], r = parseRange(h);
        var val = !h ? Core.t('closed') : (r[1] - r[0] >= 1440 ? Core.t('allDay') : h.replace('-', ' – '));
        html += '<li class="' + (d === today ? 'today' : '') + '"><span>' + days[d] + '</span><b>' + val + '</b></li>';
      });
      el.innerHTML = html;
    });
  }

  /* ---------- toast & modal ---------- */
  var toastEl, toastTimer;
  Core.toast = function (msg) {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'c-toast'; document.body.appendChild(toastEl); }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  };
  Core.modal = function (html, cls) {
    var wrap = document.createElement('div');
    wrap.className = 'c-modal ' + (cls || '');
    wrap.innerHTML = '<div class="c-modal-box" role="dialog" aria-modal="true"><button class="c-x" aria-label="' + Core.esc(Core.t('close')) + '">×</button>' + html + '</div>';
    function close() { wrap.classList.remove('show'); document.body.classList.remove('c-lock'); setTimeout(function () { wrap.remove(); }, 250); document.removeEventListener('keydown', esc); }
    function esc(e) { if (e.key === 'Escape') close(); }
    wrap.addEventListener('click', function (e) { if (e.target === wrap || e.target.closest('.c-x') || e.target.closest('[data-close]')) close(); });
    document.addEventListener('keydown', esc);
    document.body.appendChild(wrap);
    document.body.classList.add('c-lock');
    requestAnimationFrame(function () { wrap.classList.add('show'); });
    applyI18n(wrap);
    return { el: wrap, close: close };
  };

  /* ---------- cart (WhatsApp order) ---------- */
  function initCart() {
    if (!S.cart) return;
    var items = store('cart') || [];
    var drawer = document.createElement('aside');
    drawer.className = 'c-drawer';
    drawer.innerHTML = '<div class="c-drawer-box"><div class="c-drawer-head"><h3 data-t="cart"></h3><button class="c-x" aria-label="close">×</button></div><div class="c-lines"></div><div class="c-drawer-foot"></div></div>';
    document.body.appendChild(drawer);
    var fab = document.createElement('button');
    fab.className = 'c-cart-fab';
    fab.setAttribute('aria-label', 'cart');
    fab.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg><span class="c-badge">0</span>';
    document.body.appendChild(fab);
    var form = store('form') || {};

    function find(id) { return (S.items || []).find(function (x) { return x.id === id; }); }
    function save() { store('cart', items); }
    function total() { return items.reduce(function (s, l) { return s + l.price * l.qty; }, 0); }
    function count() { return items.reduce(function (s, l) { return s + l.qty; }, 0); }

    var cart = {
      add: function (id, opt, price, qty) {
        var it = find(id); if (!it) return;
        var key = id + '|' + (opt ? Core.tr(opt) : '');
        var line = items.find(function (l) { return l.key === key; });
        if (line) line.qty += qty || 1;
        else items.push({ key: key, id: id, opt: opt || null, price: price != null ? price : it.price, qty: qty || 1 });
        save(); cart.render(); Core.toast(Core.t('added'));
        fab.classList.remove('bump'); void fab.offsetWidth; fab.classList.add('bump');
      },
      setQty: function (key, q) {
        var line = items.find(function (l) { return l.key === key; });
        if (!line) return;
        line.qty = q;
        if (line.qty <= 0) items = items.filter(function (l) { return l !== line; });
        save(); cart.render();
      },
      clear: function () { items = []; save(); cart.render(); },
      open: function () { drawer.classList.add('show'); document.body.classList.add('c-lock'); },
      close: function () { drawer.classList.remove('show'); document.body.classList.remove('c-lock'); },
      count: count,
      total: total,
      render: function () {
        var n = count();
        fab.querySelector('.c-badge').textContent = n;
        fab.classList.toggle('has', n > 0);
        Core.$$('[data-cart-count]').forEach(function (el) { el.textContent = n; });
        var lines = drawer.querySelector('.c-lines'), foot = drawer.querySelector('.c-drawer-foot');
        if (!items.length) {
          lines.innerHTML = '<p class="c-empty">' + Core.t('cartEmpty') + '</p>';
          foot.innerHTML = '';
          applyI18n(drawer);
          return;
        }
        lines.innerHTML = items.map(function (l) {
          var it = find(l.id) || {};
          return '<div class="c-line">' + (it.img ? '<img src="' + it.img + '" alt="">' : '') +
            '<div class="c-line-info"><b>' + Core.esc(Core.tr(it.name)) + '</b>' + (l.opt ? '<small>' + Core.esc(Core.tr(l.opt)) + '</small>' : '') +
            '<span>' + Core.money(l.price) + '</span></div><div class="c-qty"><button data-k="' + Core.esc(l.key) + '" data-d="-1">−</button><b>' + l.qty +
            '</b><button data-k="' + Core.esc(l.key) + '" data-d="1">+</button></div></div>';
        }).join('');
        var del = S.delivery;
        var t = total(), fee = 0;
        if (del && del.fee && !(del.freeFrom && t >= del.freeFrom)) fee = del.fee;
        foot.innerHTML =
          (del && del.freeFrom ? '<p class="c-note">' + Core.t('freeDelivery', { n: Core.money(del.freeFrom) }) + '</p>' : '') +
          '<div class="c-total"><span data-t="total"></span><b>' + Core.money(t) + '</b></div>' +
          '<form class="c-form">' +
          '<input name="name" required data-tp="yourName" value="' + Core.esc(form.name || '') + '">' +
          '<input name="phone" type="tel" required data-tp="yourPhone" value="' + Core.esc(form.phone || '') + '">' +
          (del ? '<div class="c-seg"><label><input type="radio" name="dt" value="delivery" checked><span data-t="delivery"></span></label><label><input type="radio" name="dt" value="pickup"><span data-t="pickup"></span></label></div>' +
            '<input name="address" data-tp="address" value="' + Core.esc(form.address || '') + '">' : '') +
          '<textarea name="note" rows="2" data-tp="note"></textarea>' +
          '<button class="c-order" type="submit"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .3-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c0 .2.1.4 0 .5l-.3.5-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.2.6.4.1.1.1.7-.1 1.4z"/></svg><span data-t="order"></span></button>' +
          '<button class="c-clear" type="button" data-t="clear"></button></form>';
        applyI18n(drawer);
        var f = foot.querySelector('form');
        var addr = f.querySelector('[name=address]');
        Core.$$('[name=dt]', f).forEach(function (r) {
          r.addEventListener('change', function () { if (addr) { addr.style.display = f.dt.value === 'pickup' ? 'none' : ''; addr.required = f.dt.value !== 'pickup'; } });
        });
        if (addr) addr.required = true;
        f.addEventListener('submit', function (e) {
          e.preventDefault();
          form = { name: f.name.value, phone: f.phone.value, address: addr ? addr.value : '' };
          store('form', form);
          var msg = Core.t('hello') + '\n\n';
          items.forEach(function (l, i) {
            var it = find(l.id) || {};
            msg += (i + 1) + ') ' + Core.tr(it.name) + (l.opt ? ' (' + Core.tr(l.opt) + ')' : '') + ' × ' + l.qty + ' = ' + Core.money(l.price * l.qty) + '\n';
          });
          msg += '\n' + Core.t('total') + ': ' + Core.money(t) + (fee && f.dt && f.dt.value !== 'pickup' ? ' + ' + Core.t('delivery').toLowerCase() + ' ' + Core.money(fee) : '') + '\n';
          msg += Core.t('yourName') + ': ' + f.name.value + '\n' + Core.t('yourPhone') + ': ' + f.phone.value + '\n';
          if (f.dt) msg += (f.dt.value === 'pickup' ? Core.t('pickup') : Core.t('delivery') + ': ' + f.address.value) + '\n';
          if (f.note.value.trim()) msg += Core.t('note').replace(/\s*\(.*\)/, '') + ': ' + f.note.value.trim() + '\n';
          Core.openWa(msg);
        });
        f.querySelector('.c-clear').addEventListener('click', cart.clear);
      }
    };
    drawer.addEventListener('click', function (e) {
      if (e.target === drawer || e.target.closest('.c-x')) cart.close();
      var b = e.target.closest('[data-d]');
      if (b) {
        var line = items.find(function (l) { return l.key === b.getAttribute('data-k'); });
        if (line) cart.setQty(line.key, line.qty + (+b.getAttribute('data-d')));
      }
    });
    fab.addEventListener('click', cart.open);
    document.addEventListener('click', function (e) {
      var a = e.target.closest('[data-add]');
      if (a) { e.preventDefault(); cart.add(a.getAttribute('data-add')); }
      if (e.target.closest('[data-open-cart]')) { e.preventDefault(); cart.open(); }
    });
    Core.cart = cart;
    cart.render();
  }

  /* ---------- WhatsApp forms (booking / request) ---------- */
  function initForms() {
    document.addEventListener('submit', function (e) {
      var f = e.target.closest('form[data-wa-form]');
      if (!f) return;
      e.preventDefault();
      var title = f.getAttribute('data-wa-form');
      var msg = (title ? Core.t(title) : Core.t('helloForm')) + '\n\n';
      Core.$$('input, select, textarea', f).forEach(function (el) {
        if (!el.name || el.type === 'submit' || el.type === 'hidden') return;
        if ((el.type === 'radio' || el.type === 'checkbox') && !el.checked) return;
        var v = el.tagName === 'SELECT' ? el.options[el.selectedIndex].text
          : (el.type === 'radio' || el.type === 'checkbox') && el.closest('label') ? el.closest('label').textContent.trim().replace(/\s*\+\d+$/, '')
          : el.value;
        if (!String(v).trim()) return;
        var lbl = el.getAttribute('data-label');
        var labelText = lbl ? Core.t(lbl) : (el.closest('label') && el.closest('label').querySelector('span') ? el.closest('label').querySelector('span').textContent : el.name);
        msg += labelText.replace(/\s*\*$/, '') + ': ' + v + '\n';
      });
      Core.openWa(msg);
    });
  }

  /* ---------- floating buttons ---------- */
  function initFab() {
    if (S.floating === false) return;
    var d = document.createElement('div');
    d.className = 'c-fabs';
    d.innerHTML =
      '<a class="c-fab c-fab-wa" data-href="wa" data-wa-text="waHello" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.3-.5 0-1 .3-3.3-.7-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c0 .2.1.4 0 .5l-.3.5-.4.5c-.2.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.2.6.4.1.1.1.7-.1 1.4z"/></svg></a>' +
      '<a class="c-fab c-fab-tel" data-href="tel" aria-label="call"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg></a>';
    document.body.appendChild(d);
    if (!S.t.waHello) S.t.waHello = { az: 'Salam! Saytınızdan yazıram.', ru: 'Здравствуйте! Пишу с вашего сайта.' };
  }

  /* ---------- map ---------- */
  function initMap() {
    Core.$$('[data-map]').forEach(function (el) {
      if (!S.map) return;
      var f = document.createElement('iframe');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.title = 'map';
      f.src = 'https://maps.google.com/maps?q=' + S.map.lat + ',' + S.map.lng + '&z=' + (S.map.zoom || 16) + '&output=embed';
      el.appendChild(f);
    });
  }

  /* ---------- SEO: LocalBusiness JSON-LD ---------- */
  function initSeo() {
    var ld = {
      '@context': 'https://schema.org', '@type': S.schemaType || 'LocalBusiness',
      name: Core.tr(S.name), telephone: S.phone, url: location.href.split('#')[0],
      address: { '@type': 'PostalAddress', streetAddress: S.address ? S.address.az : '', addressLocality: 'Sumqayıt', addressCountry: 'AZ' }
    };
    if (S.map) ld.geo = { '@type': 'GeoCoordinates', latitude: S.map.lat, longitude: S.map.lng };
    if (S.instagram) ld.sameAs = ['https://instagram.com/' + S.instagram.replace('@', '')];
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  /* ---------- UI: nav, header, reveal ---------- */
  function initUi() {
    Core.$$('[data-lang]').forEach(function (b) { b.addEventListener('click', function () { Core.setLang(b.getAttribute('data-lang')); }); });
    Core.$$('[data-nav-toggle]').forEach(function (b) { b.addEventListener('click', function () { document.body.classList.toggle('nav-open'); }); });
    Core.$$('nav a[href^="#"]').forEach(function (a) { a.addEventListener('click', function () { document.body.classList.remove('nav-open'); }); });
    function onScroll() { document.body.classList.toggle('scrolled', window.scrollY > 30); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    Core.$$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
    Core.observe();
  }
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' }) : null;
  Core.observe = function (root) {
    Core.$$('.reveal:not(.in)', root).forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  };

  /* ---------- base styles for injected UI (themable via CSS variables) ---------- */
  var css = document.createElement('style');
  css.textContent = [
    ':root{--c-accent:#111;--c-on-accent:#fff;--c-surface:#fff;--c-text:#1b1b1b;--c-muted:#777;--c-line:rgba(0,0,0,.1);--c-radius:14px}',
    '.reveal{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1)}.reveal.in{opacity:1;transform:none}',
    '.reveal.d1{transition-delay:.08s}.reveal.d2{transition-delay:.16s}.reveal.d3{transition-delay:.24s}.reveal.d4{transition-delay:.32s}',
    '@media (prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}}',
    '[data-open]{display:inline-flex;align-items:center;gap:8px}[data-open] .dot{width:8px;height:8px;border-radius:50%;background:#e5484d;box-shadow:0 0 0 4px rgba(229,72,77,.18)}[data-open].is-open .dot{background:#2fb344;box-shadow:0 0 0 4px rgba(47,179,68,.2);animation:cpulse 2s infinite}',
    '@keyframes cpulse{50%{box-shadow:0 0 0 7px rgba(47,179,68,0)}}',
    '[data-hours]{list-style:none;margin:0;padding:0}[data-hours] li{display:flex;justify-content:space-between;gap:16px;padding:8px 0;border-bottom:1px dashed var(--c-line)}[data-hours] li.today{font-weight:700;color:var(--c-accent)}[data-hours] b{font-weight:600}',
    '[data-map]{overflow:hidden}[data-map] iframe{width:100%;height:100%;min-height:320px;border:0;display:block}',
    '.c-lock{overflow:hidden}',
    '@media(max-width:600px){.hdr .logo{min-width:0;flex-shrink:1}.hdr .logo [data-s]{font-size:17px!important;line-height:1.1!important;letter-spacing:0!important;white-space:normal!important}.hdr .langs{display:flex;flex-shrink:0}}',
    'form > *, form label{min-width:0} form select, form input, form textarea{max-width:100%;min-width:0}',
    '.c-toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,30px);background:#111;color:#fff;padding:12px 20px;border-radius:40px;font-size:14px;z-index:9999;opacity:0;pointer-events:none;transition:.3s;box-shadow:0 10px 30px rgba(0,0,0,.25)}.c-toast.show{opacity:1;transform:translate(-50%,0)}',
    '.c-fabs{position:fixed;right:18px;bottom:18px;display:flex;flex-direction:column;gap:12px;z-index:900}',
    '.c-fab{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.25);transition:transform .2s}.c-fab:hover{transform:scale(1.08)}.c-fab-wa{background:#25d366}.c-fab-tel{background:var(--c-accent);color:var(--c-on-accent);width:48px;height:48px;margin-left:4px}',
    '.c-cart-fab{position:fixed;left:18px;bottom:18px;z-index:900;width:60px;height:60px;border-radius:50%;border:0;background:var(--c-accent);color:var(--c-on-accent);display:grid;place-items:center;cursor:pointer;box-shadow:0 10px 28px rgba(0,0,0,.28);transform:scale(0);transition:transform .3s cubic-bezier(.3,1.6,.5,1)}.c-cart-fab.has{transform:scale(1)}.c-cart-fab.bump{animation:cbump .5s}',
    '@keyframes cbump{40%{transform:scale(1.2)}}',
    '.c-badge{position:absolute;top:-4px;right:-4px;min-width:24px;height:24px;border-radius:12px;background:#e5484d;color:#fff;font:700 12px/24px system-ui;padding:0 6px}',
    '.c-drawer{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:1000;opacity:0;pointer-events:none;transition:.3s}.c-drawer.show{opacity:1;pointer-events:auto}',
    '.c-drawer-box{position:absolute;right:0;top:0;bottom:0;width:min(440px,100%);background:var(--c-surface);color:var(--c-text);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .35s cubic-bezier(.2,.8,.2,1)}.c-drawer.show .c-drawer-box{transform:none}',
    '.c-drawer-head{display:flex;justify-content:space-between;align-items:center;padding:20px 22px;border-bottom:1px solid var(--c-line)}.c-drawer-head h3{margin:0;font-size:22px}',
    '.c-x{border:0;background:none;color:inherit;font-size:30px;line-height:1;cursor:pointer;opacity:.6;padding:4px 8px}.c-x:hover{opacity:1}',
    '.c-lines{flex:1;overflow:auto;padding:10px 22px}.c-empty{color:var(--c-muted);text-align:center;padding:40px 0}',
    '.c-line{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--c-line)}.c-line img{width:56px;height:56px;border-radius:10px;object-fit:cover}.c-line-info{flex:1;display:flex;flex-direction:column;gap:2px;font-size:14px}.c-line-info small{color:var(--c-muted)}.c-line-info span{color:var(--c-accent);font-weight:700}',
    '.c-qty{display:flex;align-items:center;gap:8px}.c-qty button{width:30px;height:30px;border-radius:50%;border:1px solid var(--c-line);background:none;color:inherit;font-size:18px;cursor:pointer}',
    '.c-drawer-foot{padding:16px 22px 22px;border-top:1px solid var(--c-line)}.c-note{font-size:13px;color:var(--c-muted);margin:0 0 8px}',
    '.c-total{display:flex;justify-content:space-between;font-size:18px;margin-bottom:12px}',
    '.c-form{display:flex;flex-direction:column;gap:8px}.c-form input,.c-form textarea{font:inherit;font-size:15px;padding:12px 14px;border-radius:10px;border:1px solid var(--c-line);background:transparent;color:inherit;width:100%;box-sizing:border-box}',
    '.c-seg{display:flex;gap:8px}.c-seg label{flex:1}.c-seg input{display:none}.c-seg span{display:block;text-align:center;padding:10px;border:1px solid var(--c-line);border-radius:10px;cursor:pointer;font-size:14px}.c-seg input:checked+span{background:var(--c-accent);color:var(--c-on-accent);border-color:var(--c-accent)}',
    '.c-order{display:flex;align-items:center;justify-content:center;gap:10px;border:0;border-radius:12px;padding:15px;background:#25d366;color:#fff;font:inherit;font-weight:700;font-size:16px;cursor:pointer}.c-order:hover{filter:brightness(.95)}',
    '.c-clear{border:0;background:none;color:var(--c-muted);font:inherit;font-size:13px;cursor:pointer;padding:6px}',
    '.c-modal{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:1001;display:grid;place-items:center;padding:16px;opacity:0;transition:.25s}.c-modal.show{opacity:1}',
    '.c-modal-box{position:relative;background:var(--c-surface);color:var(--c-text);border-radius:var(--c-radius);max-width:820px;width:100%;max-height:92vh;overflow:auto;transform:translateY(20px) scale(.98);transition:.3s}.c-modal.show .c-modal-box{transform:none}',
    '.c-modal-box>.c-x{position:absolute;right:8px;top:6px;z-index:2;background:rgba(255,255,255,.85);color:#111;border-radius:50%;width:40px;height:40px;padding:0;opacity:1}'
  ].join('\n');
  document.head.insertBefore(css, document.head.firstChild);

  /* ---------- demo mode: concept site made for a real business before it is sold ---------- */
  function initDemo() {
    Core.$$('[data-href="insta"]').forEach(function (a) { if (!S.instagram) a.style.display = 'none'; });
    if (!S.demo) return;
    var m = document.createElement('meta');
    m.name = 'robots'; m.content = 'noindex, nofollow';
    document.head.appendChild(m);
    BASE_T.demoBar = { az: '<b>Nümunə sayt</b> — “{n}” üçün konsept, rəsmi sayt deyil.<i> Mətnlər, qiymətlər və şəkillər nümunədir.</i>', ru: '<b>Демо-сайт</b> — концепт для «{n}», не официальный сайт.<i> Тексты, цены и фото — примерные.</i>' };
    BASE_T.demoBy = { az: 'Belə sayt istəyirəm →', ru: 'Хочу такой сайт →' };
    var bar = document.createElement('div');
    bar.className = 'c-demo';
    document.body.insertBefore(bar, document.body.firstChild);
    function paint() {
      bar.innerHTML = '<span>' + Core.t('demoBar', { n: Core.esc(Core.tr(S.name)) }) + '</span>' + (S.demo.url ? '<a href="' + S.demo.url + '" target="_blank" rel="noopener">' + Core.t('demoBy') + '</a>' : '') + '<button aria-label="close">×</button>';
      bar.querySelector('button').onclick = function () { bar.remove(); setH(); };
      setH();
    }
    function setH() { document.documentElement.style.setProperty('--demo-h', (bar.isConnected ? bar.offsetHeight : 0) + 'px'); }
    window.addEventListener('resize', setH);
    paint();
    Core.on('lang', function () { if (bar.isConnected) paint(); });
    var c = document.createElement('style');
    c.textContent = 'body{padding-top:var(--demo-h,0px)}.hdr{top:var(--demo-h,0px)!important}.catbar{top:calc(64px + var(--demo-h,0px))!important}.c-demo{position:fixed;top:0;left:0;right:0;z-index:2000;background:#111;color:#fff;font:13px/1.4 system-ui,sans-serif;padding:8px 44px 8px 16px;display:flex;gap:12px;justify-content:center;align-items:center;flex-wrap:wrap;text-align:center}.c-demo b{color:#ffd23f}.c-demo a{color:#7dd3fc;font-weight:700;white-space:nowrap}.c-demo i{font-style:normal;opacity:.8}@media(max-width:640px){.c-demo{font-size:11.5px;padding:6px 34px 6px 10px;gap:2px 8px}.c-demo i{display:none}}.c-demo button{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:0;color:#fff;font-size:22px;cursor:pointer;opacity:.7}';
    document.head.appendChild(c);
  }

  /* ---------- boot ---------- */
  function boot() {
    document.documentElement.lang = lang;
    initDemo();
    initFab();
    initCart();
    initForms();
    initMap();
    initSeo();
    Core.emit('lang', lang);
    applyI18n(document);
    renderHours();
    initUi();
    setInterval(renderHours, 60000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
