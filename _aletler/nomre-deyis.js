// Bütün demo saytlarda və vitrində telefon/WhatsApp nömrəsini sizin nömrənizlə əvəz edir.
// Belə ki, müştəri demoda "Sifariş et" basanda mesaj SİZƏ gəlir (yaxşı satış fəndidir).
//
// İstifadə:  node _aletler/nomre-deyis.js 994501234567 ["Vitrin adı"]
const fs = require('fs');
const path = require('path');

const digits = (process.argv[2] || '').replace(/\D/g, '');
if (!/^994\d{9}$/.test(digits)) {
  console.log('Nömrəni 994XXXXXXXXX formatında yazın. Məs: node _aletler/nomre-deyis.js 994501234567');
  process.exit(1);
}
const pretty = '+994 ' + digits.slice(3, 5) + ' ' + digits.slice(5, 8) + ' ' + digits.slice(8, 10) + ' ' + digits.slice(10);
const brand = process.argv[3];
const root = path.join(__dirname, '..');

function patch(file, alsoName) {
  let s = fs.readFileSync(file, 'utf8');
  s = s.replace(/phone: '[^']*'/, `phone: '${pretty}'`).replace(/whatsapp: '[^']*'/, `whatsapp: '${digits}'`);
  if (alsoName && brand) s = s.replace(/name: '[^']*'/, `name: '${brand.replace(/'/g, "\\'")}'`);
  fs.writeFileSync(file, s);
  console.log('✓', path.relative(root, file));
}

fs.readdirSync(root).filter(d => /^\d\d-/.test(d)).forEach(d => {
  const f = path.join(root, d, 'data.js');
  if (fs.existsSync(f)) patch(f, false);
});
patch(path.join(root, 'index.html'), true);

// real biznes nümunələri (_musteriler) üçün də
const cfgFile = path.join(__dirname, 'demolar.json');
if (fs.existsSync(cfgFile)) {
  const cfg = JSON.parse(fs.readFileSync(cfgFile, 'utf8'));
  cfg.ownerPhone = pretty;
  cfg.ownerWhatsapp = digits;
  fs.writeFileSync(cfgFile, JSON.stringify(cfg, null, 2));
  require('child_process').execSync('node "' + path.join(__dirname, 'demo-yarat.js') + '"', { stdio: 'inherit' });
}
console.log('\nHazırdır! Nömrə:', pretty);
console.log('İnternetdə yeniləmək üçün:  node _aletler/vercel-yukle.js');
