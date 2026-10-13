// Vitrini və _musteriler/ içindəki bütün nümunə saytları Vercel-ə yükləyir (production).
// Linkləri _satis/linkler.md faylına yazır.
// Tələb: "vercel login" edilmiş olmalıdır.
//
// İstifadə:  node _aletler/vercel-yukle.js            (hamısı)
//            node _aletler/vercel-yukle.js vitrin     (yalnız vitrin)
//            node _aletler/vercel-yukle.js ocaq-basi-sumqayit
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.join(__dirname, '..');
const only = process.argv[2];

// 1) vitrin qovluğunu hazırla: _deploy/sumqayit-sayt (.vercel bağlantısı saxlanılır)
function buildShowcase() {
  const out = path.join(root, '_deploy', 'sumqayit-sayt');
  fs.mkdirSync(out, { recursive: true });
  fs.readdirSync(out).filter(f => f !== '.vercel').forEach(f => fs.rmSync(path.join(out, f), { recursive: true, force: true }));
  ['index.html', '_vitrin'].concat(fs.readdirSync(root).filter(d => /^\d\d-/.test(d)))
    .forEach(i => fs.cpSync(path.join(root, i), path.join(out, i), { recursive: true }));
  fs.writeFileSync(path.join(out, 'vercel.json'), JSON.stringify({ cleanUrls: true }, null, 2));
  return out;
}

function deploy(dir) {
  const res = execSync('vercel deploy --prod --yes', { cwd: dir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  // production alias: https://<proyekt>.vercel.app
  const name = path.basename(dir);
  let url = 'https://' + name + '.vercel.app';
  try {
    const insp = execSync('vercel inspect ' + res.trim().split('\n').pop(), { cwd: dir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    const m = insp.match(/https:\/\/[a-z0-9-]+\.vercel\.app/g);
    if (m) url = m.find(u => !/-[a-z0-9]{9}-/.test(u)) || url;
  } catch (e) { /* inspect optional */ }
  return url;
}

const targets = [];
if (!only || only === 'vitrin') targets.push(['Vitrin (portfolio)', buildShowcase()]);
const mdir = path.join(root, '_musteriler');
if (fs.existsSync(mdir)) fs.readdirSync(mdir).filter(d => !only || d === only).forEach(d => {
  const data = fs.readFileSync(path.join(mdir, d, 'data.js'), 'utf8');
  targets.push([(data.match(/name: '([^']*)'/) || [])[1] || d, path.join(mdir, d)]);
});

const lines = [];
targets.forEach(([label, dir]) => {
  process.stdout.write('↑ ' + label + ' ... ');
  try { const url = deploy(dir); lines.push('| ' + label + ' | ' + url + ' |'); console.log(url); }
  catch (e) { console.log('XƏTA: ' + (e.stderr || e.message).toString().split('\n').slice(-3).join(' ')); }
});

if (!only) {
  fs.writeFileSync(path.join(root, '_satis', 'linkler.md'),
    '# Canlı linklər (' + new Date().toISOString().slice(0, 10) + ')\n\n| Sayt | Link |\n|---|---|\n' + lines.join('\n') + '\n');
  console.log('\n✓ Linklər: _satis/linkler.md');
}
