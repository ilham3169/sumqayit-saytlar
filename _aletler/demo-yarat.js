// _aletler/demolar.json-dakı real bizneslər üçün nümunə saytları _musteriler/<slug> qovluğunda yaradır.
// Hər saytda "Nümunə sayt — rəsmi sayt deyil" zolağı olur, Google-da indeksləşmir, uydurma rəylər silinir.
//
// İstifadə:  node _aletler/demo-yarat.js            (hamısı)
//            node _aletler/demo-yarat.js ocaq-basi-sumqayit   (birini)
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const cfg = JSON.parse(fs.readFileSync(path.join(__dirname, 'demolar.json'), 'utf8'));
const only = process.argv[2];
const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

cfg.sites.filter(s => !only || s.slug === only).forEach(site => {
  const src = path.join(root, site.demo);
  const dest = path.join(root, '_musteriler', site.slug);
  fs.rmSync(dest, { recursive: true, force: true });
  fs.cpSync(src, dest, { recursive: true });
  fs.copyFileSync(path.join(root, '_shared', 'core.js'), path.join(dest, 'core.js'));

  // data.js
  const dataFile = path.join(dest, 'data.js');
  let data = fs.readFileSync(dataFile, 'utf8');
  const oldName = (data.match(/name: '([^']*)'/) || [])[1];
  data = data
    .replace(/id: '[^']*'/, 'id: ' + q(site.slug))
    .replace(/name: '[^']*'/, 'name: ' + q(site.name))
    .replace(/phone: '[^']*'/, 'phone: ' + q(site.phone || cfg.ownerPhone))
    .replace(/whatsapp: '[^']*'/, 'whatsapp: ' + q(site.whatsapp || cfg.ownerWhatsapp))
    .replace(/instagram: '[^']*'/, 'instagram: ' + q(site.instagram || ''))
    .replace(/address: \{[^}]*\}/, 'address: { az: ' + q(site.address.az) + ', ru: ' + q(site.address.ru) + ' }')
    .replace(/map: \{[^}]*\}/, 'map: { lat: ' + site.lat + ', lng: ' + site.lng + ', zoom: 17 }');
  if (oldName) data = data.split(oldName).join(site.name);
  data += '\n/* --- nümunə sayt ayarları (demo-yarat.js) --- */\n';
  data += 'SITE.demo = { url: ' + q(cfg.showcaseUrl) + ' };\n';
  data += 'if (SITE.reviews) SITE.reviews = [];\n';
  if (site.js) data += site.js + '\n';
  if (site.hide && site.hide.length) {
    data += 'document.addEventListener(\'DOMContentLoaded\', function () { document.querySelectorAll(' + q(site.hide.join(',')) + ').forEach(function (e) { e.remove(); }); });\n';
  }
  fs.writeFileSync(dataFile, data);

  // index.html: köhnə adı yenisi ilə, əlavə HTML əvəzləmələri
  const htmlFile = path.join(dest, 'index.html');
  let html = fs.readFileSync(htmlFile, 'utf8');
  if (oldName) html = html.split(oldName).join(site.name);
  (site.html || []).forEach(([a, b]) => { html = html.split(a).join(b); });
  html = html.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="robots" content="noindex, nofollow">');
  fs.writeFileSync(htmlFile, html);

  // Vercel: statik sayt, təmiz URL-lər
  fs.writeFileSync(path.join(dest, 'vercel.json'), JSON.stringify({ cleanUrls: true, headers: [{ source: '/(.*)', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] }] }, null, 2));
  console.log('✓', site.slug);
});
