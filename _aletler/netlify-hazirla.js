// İnternetə yükləmək üçün təmiz qovluq hazırlayır: _yukle/
// İçində yalnız vitrin (index.html) və 15 demo olur — müştəri siyahısı (_satis) və alətlər DAXİL OLMUR.
// Sonra _yukle qovluğunu https://app.netlify.com/drop səhifəsinə sürükləyin.
//
// İstifadə:  node _aletler/netlify-hazirla.js
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, '_yukle');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);

const items = ['index.html', '_vitrin'].concat(fs.readdirSync(root).filter(d => /^\d\d-/.test(d)));
items.forEach(i => fs.cpSync(path.join(root, i), path.join(out, i), { recursive: true }));

let size = 0;
(function walk(d) { fs.readdirSync(d).forEach(f => { const p = path.join(d, f); const st = fs.statSync(p); st.isDirectory() ? walk(p) : (size += st.size); }); })(out);
console.log('✓ Hazırdır:', out);
console.log('  ' + items.length + ' element, ' + (size / 1048576).toFixed(1) + ' MB');
console.log('  İndi bu qovluğu https://app.netlify.com/drop səhifəsinə sürükləyin.');
