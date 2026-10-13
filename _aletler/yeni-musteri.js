// Demo saytdan real müştəri üçün ayrıca qovluq yaradır (_musteriler/<ad>).
// Sonra yalnız həmin qovluqdakı data.js faylını və img/ şəkillərini dəyişirsiniz.
//
// İstifadə:  node _aletler/yeni-musteri.js 01-kafe-restoran "Leyla Kafe" 994551112233
const fs = require('fs');
const path = require('path');

const [demo, name, phone] = process.argv.slice(2);
const root = path.join(__dirname, '..');
if (!demo || !name || !fs.existsSync(path.join(root, demo, 'data.js'))) {
  console.log('İstifadə: node _aletler/yeni-musteri.js <demo-qovluq> "<Biznesin adı>" [994XXXXXXXXX]');
  console.log('Demolar:', fs.readdirSync(root).filter(d => /^\d\d-/.test(d)).join(', '));
  process.exit(1);
}
const slug = name.toLowerCase()
  .replace(/ə/g, 'e').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ç/g, 'c').replace(/ğ/g, 'g')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'musteri';
const dest = path.join(root, '_musteriler', slug);
if (fs.existsSync(dest)) { console.log('Bu qovluq artıq var:', dest); process.exit(1); }
fs.cpSync(path.join(root, demo), dest, { recursive: true });

const dataFile = path.join(dest, 'data.js');
let s = fs.readFileSync(dataFile, 'utf8');
s = s.replace(/id: '[^']*'/, `id: '${slug}'`).replace(/name: '[^']*'/, `name: '${name.replace(/'/g, "\\'")}'`);
if (phone) {
  const d = phone.replace(/\D/g, '');
  const pretty = '+994 ' + d.slice(3, 5) + ' ' + d.slice(5, 8) + ' ' + d.slice(8, 10) + ' ' + d.slice(10);
  s = s.replace(/phone: '[^']*'/, `phone: '${pretty}'`).replace(/whatsapp: '[^']*'/, `whatsapp: '${d}'`);
}
fs.writeFileSync(dataFile, s);

// başlıqda demo adını yeni adla əvəz et
const htmlFile = path.join(dest, 'index.html');
const html = fs.readFileSync(htmlFile, 'utf8');
const oldName = (fs.readFileSync(path.join(root, demo, 'data.js'), 'utf8').match(/name: '([^']*)'/) || [])[1];
if (oldName) fs.writeFileSync(htmlFile, html.split(oldName).join(name));

console.log('✓ Yaradıldı:', path.relative(root, dest));
console.log('İndi bunları dəyişin:');
console.log('  1) ' + path.relative(root, dataFile) + ' — ünvan, xəritə koordinatı, iş saatları, menyu/qiymətlər, mətnlər');
console.log('  2) ' + path.relative(root, path.join(dest, 'img')) + ' — müştərinin öz şəkilləri (eyni adlarla)');
console.log('  3) Netlify Drop-a qovluğu sürükləyin: https://app.netlify.com/drop');
