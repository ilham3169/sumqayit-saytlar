# Sumqayıt Saytları — satış üçün 15 hazır demo sayt

Yerli bizneslərə 100–150 ₼-a sayt satmaq üçün hazır dəst.

## Nə var?

| Qovluq | Nədir |
|---|---|
| `index.html` | **Vitrin** — müştəriyə göstərdiyiniz portfolio səhifəsi (15 demo, paketlər, suallar) |
| `01-kafe-restoran` … `15-fast-food` | 15 canlı demo sayt (AZ/RU, WhatsApp sifariş/rezerv, xəritə, iş saatı, mobil) |
| `_satis/musteriler.html` | **588 potensial müştəri** — yaxınlığınızdakı saytı olmayan bizneslər, statusla izləmə |
| `_satis/musteri-siyahisi.csv` | Eyni siyahı Excel üçün |
| `_satis/SATIS-PLANI.md` | Satış planı: paketlər, nə demək lazımdır (AZ/RU), etirazlar, iş prosesi |
| `_satis/qr.html` | Kafelər üçün masa QR kodu yaradıcı |
| `_aletler/` | Kömək skriptləri (aşağıda) |
| `_musteriler/` | 10 real yaxın biznes üçün hazır nümunə saytlar (Vercel-də canlı) |
| `_shared/core.js` | Bütün saytların ortaq mühərriki (dəyişməyə ehtiyac yoxdur) |

## 15 demo

| # | Sahə | Xüsusi funksiya |
|---|---|---|
| 01 | Kafe / restoran | Menyu + səbət + çatdırılma, masa rezervi |
| 02 | Bərbərxana | Usta və saat seçimi ilə növbə |
| 03 | Gözəllik salonu | Kateqoriyalı qiymətlər, onlayn yazılış, promokod |
| 04 | Gül mağazası | Ölçü seçimi (15/25/51 gül), çatdırılma, açıqca |
| 05 | Tort / şirniyyat | Tort konstruktoru (canlı qiymət + şəkil) |
| 06 | Avto servis | Yuma paketləri (sedan/SUV), xidmət seçimi ilə növbə |
| 07 | Stomatologiya | Qiymət siyahısında axtarış, həkimlər, taksit |
| 08 | Tədris mərkəzi | Kurs filtri, nəticələr, həftəlik cədvəl |
| 09 | Fitnes | 1/3/12 ay abunəlik, BMI kalkulyatoru, dərs cədvəli |
| 10 | Telefon təmiri | Təmir qiyməti kalkulyatoru + aksesuar mağazası |
| 11 | Geyim butiki | Ölçü/rəng seçimi, filtr, sıralama |
| 12 | Daşınmaz əmlak | Elan filtri, ipoteka kalkulyatoru |
| 13 | Mebel sexi | Portfolio, mətbəx qiymət kalkulyatoru |
| 14 | Uşaq mərkəzi | Proqramlar, gündəlik rejim, ad günü paketi |
| 15 | Fast food | Tətbiq kimi menyu, kombo, səbət |

## Necə açmaq olar?

Ən sadə yol: `index.html` faylına iki dəfə klikləyin — brauzerdə açılır.
(Xəritə və şriftlər üçün internet lazımdır.)

## Kömək skriptləri (Node.js quraşdırılıb)

Bu qovluqda terminal açın və:

```bash
# 1) Bütün demolarda nömrəni öz nömrənizlə əvəz edin (sifarişlər sizə gəlsin)
node _aletler/nomre-deyis.js 994501234567 "Sizin brend adınız"

# 2) Yeni müştəri üçün demodan surət yaradın → _musteriler/<ad>
node _aletler/yeni-musteri.js 02-barbershop "Elvin Barber" 994551112233

# 3) Real bizneslər üçün nümunə saytlar (_aletler/demolar.json → _musteriler/)
node _aletler/demo-yarat.js

# 4) Vitrini və bütün nümunə saytları Vercel-ə yükləyin (linklər → _satis/linkler.md)
node _aletler/vercel-yukle.js

# 5) Netlify üçün təmiz qovluq (_yukle) hazırlayın
node _aletler/netlify-hazirla.js
#    sonra _yukle qovluğunu https://app.netlify.com/drop səhifəsinə sürükləyin
```

## Müştəri saytını necə dəyişmək olar?

Hər saytda **yalnız `data.js`** faylını dəyişirsiniz: ad, telefon, WhatsApp, ünvan, xəritə koordinatı,
iş saatları, menyu/məhsullar/qiymətlər və bütün mətnlər (az + ru). Şəkillər `img/` qovluğundadır.

## Qeydlər

- Demolardakı biznes adları, ünvanlar, rəylər, həkim/usta adları **uydurmadır**.
- Şəkillər: Unsplash (kommersiya üçün pulsuz) — müəlliflər hər `img/CREDITS.txt`-də.
- Müştəri siyahısı: © OpenStreetMap contributors (13.10.2026).

## Canlı

- Vitrin: https://sumqayit-sayt.vercel.app
- Nümunə saytlar: `https://<ad>-sumqayit.vercel.app` (siyahı: `_satis/linkler.md`, yalnız lokal)
