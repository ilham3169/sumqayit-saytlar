/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   Tortlar kq ilə satılır: price = 1 kq qiyməti.
   ============================================================ */
window.SITE = {
  id: 'damla-sirniyyat-sumqayit',
  name: 'Damla Şirniyyat',
  schemaType: 'Bakery',
  phone: '+994 50 000 00 00',
  whatsapp: '994500000000',
  instagram: '',
  address: { az: 'Sumqayıt şəhəri', ru: 'г. Сумгайыт' },
  map: { lat: 40.584881, lng: 49.679797, zoom: 17 },
  hours: ['09:00-21:00', '09:00-21:00', '09:00-21:00', '09:00-21:00', '09:00-21:00', '09:00-21:00', '09:00-21:00'],
  cart: true,
  delivery: { fee: 3, freeFrom: 50 },
  weights: [1, 1.5, 2, 3, 4],

  t: {
    nav_cakes: { az: 'Tortlar', ru: 'Торты' },
    nav_custom: { az: 'Fərdi tort', ru: 'Торт на заказ' },
    nav_sweets: { az: 'Şirniyyat', ru: 'Сладости' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    hero_hand: { az: 'ev üsulu, sevgi ilə', ru: 'по-домашнему, с любовью' },
    hero_title: { az: 'Hər bayram<br>bir tortla başlayır', ru: 'Каждый праздник<br>начинается с торта' },
    hero_text: { az: 'Ad günü, toy, nişan və uşaq tortları sifarişlə. Təbii qaymaq, təzə meyvə, heç bir marqarin yoxdur.', ru: 'Торты на день рождения, свадьбу, помолвку и детские — на заказ. Натуральные сливки, свежие фрукты, никакого маргарина.' },
    hero_cta: { az: 'Tort seç', ru: 'Выбрать торт' },
    hero_cta2: { az: 'Öz tortunu yarat', ru: 'Создать свой торт' },
    s1: { az: 'tort hazırlanıb', ru: 'тортов приготовлено' },
    s2: { az: 'saat əvvəl sifariş', ru: 'часа — минимальный срок' },
    s3: { az: 'təbii inqrediyent', ru: 'натуральные ингредиенты' },
    cakes_hand: { az: 'ən çox sevilənlər', ru: 'самые любимые' },
    cakes_title: { az: 'Tortlarımız', ru: 'Наши торты' },
    per_kg: { az: '/kq', ru: '/кг' },
    pcs: { az: '/dəst', ru: '/набор' },
    weight: { az: 'Çəki', ru: 'Вес' },
    kg: { az: 'kq', ru: 'кг' },
    serves: { az: '≈ {n} nəfərlik', ru: '≈ на {n} чел.' },
    add: { az: 'Səbətə at', ru: 'В корзину' },
    order: { az: 'Sifariş', ru: 'Заказать' },
    custom_hand: { az: 'xəyalınızdakı tort', ru: 'торт вашей мечты' },
    custom_title: { az: 'Fərdi tort konstruktoru', ru: 'Конструктор торта' },
    custom_text: { az: 'Biskvit, krem və içliyi seçin, üzərinə yazı əlavə edin — qiyməti dərhal görün.', ru: 'Выберите бисквит, крем и начинку, добавьте надпись — сразу увидите цену.' },
    c_biscuit: { az: 'Biskvit', ru: 'Бисквит' },
    c_cream: { az: 'Krem', ru: 'Крем' },
    c_filling: { az: 'İçlik', ru: 'Начинка' },
    c_weight: { az: 'Çəki', ru: 'Вес' },
    c_decor: { az: 'Dekor', ru: 'Декор' },
    c_text: { az: 'Tortun üzərində yazı', ru: 'Надпись на торте' },
    c_date: { az: 'Hazır olma tarixi', ru: 'Дата готовности' },
    c_name: { az: 'Adınız', ru: 'Ваше имя' },
    c_phone: { az: 'Telefon', ru: 'Телефон' },
    c_price: { az: 'Təxmini qiymət', ru: 'Примерная цена' },
    c_send: { az: 'WhatsApp-a göndər', ru: 'Отправить в WhatsApp' },
    c_msg: { az: 'Salam! Fərdi tort sifariş etmək istəyirəm:', ru: 'Здравствуйте! Хочу заказать торт:' },
    c_note: { az: 'Şəkil nümunəniz varsa, WhatsApp-da göndərin.', ru: 'Если есть фото-пример — пришлите в WhatsApp.' },
    sweets_hand: { az: 'çay süfrəsi üçün', ru: 'к чаю' },
    sweets_title: { az: 'Şirniyyat və desertlər', ru: 'Сладости и десерты' },
    contact_title: { az: 'Bizə gəlin', ru: 'Приходите к нам' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    note: { az: 'Tarix, saat və tort üzərində yazı', ru: 'Дата, время и надпись на торте' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  // kind: 'kg' — çəki ilə, 'set' — dəst
  items: [
    { id: 'c1', kind: 'kg', img: 'img/c-birthday.jpg', price: 28, hit: true, name: { az: 'Ad günü tortu', ru: 'Торт на день рождения' }, desc: { az: 'Vanil biskvit, qaymaq, çiyələk', ru: 'Ванильный бисквит, сливки, клубника' } },
    { id: 'c2', kind: 'kg', img: 'img/c-chocolate.jpg', price: 30, name: { az: 'Şokoladlı tort', ru: 'Шоколадный торт' }, desc: { az: 'Belçika şokoladı, qanaş', ru: 'Бельгийский шоколад, ганаш' } },
    { id: 'c3', kind: 'kg', img: 'img/c-wedding.jpg', price: 35, name: { az: 'Toy / nişan tortu', ru: 'Свадебный торт' }, desc: { az: 'Çoxmərtəbəli, fərdi dizayn', ru: 'Многоярусный, индивидуальный дизайн' } },
    { id: 'c4', kind: 'kg', img: 'img/c-kids.jpg', price: 32, hit: true, name: { az: 'Uşaq tortu', ru: 'Детский торт' }, desc: { az: 'Sevimli personaj, rəngli dekor', ru: 'Любимый персонаж, яркий декор' } },
    { id: 'c5', kind: 'kg', img: 'img/c-berry.jpg', price: 30, name: { az: 'Meyvəli tort', ru: 'Ягодный торт' }, desc: { az: 'Moruq, qaragilə, krem-pendir', ru: 'Малина, черника, крем-чиз' } },
    { id: 'c6', kind: 'kg', img: 'img/c-napoleon.jpg', price: 24, name: { az: 'Napoleon', ru: 'Наполеон' }, desc: { az: 'Klassik, nənə resepti', ru: 'Классический, бабушкин рецепт' } },
    { id: 'c7', kind: 'kg', img: 'img/c-honey.jpg', price: 24, name: { az: 'Ballı tort (Medovik)', ru: 'Медовик' }, desc: { az: 'Təbii bal, xama kremi', ru: 'Натуральный мёд, сметанный крем' } },
    { id: 'c8', kind: 'kg', img: 'img/c-cheesecake.jpg', price: 34, name: { az: 'Çizkeyk', ru: 'Чизкейк' }, desc: { az: 'Nyu-York, çiyələk sousu', ru: 'Нью-Йорк, клубничный соус' } },
    { id: 's1', kind: 'set', img: 'img/c-cupcakes.jpg', price: 18, name: { az: 'Kapkeyk (6 əd.)', ru: 'Капкейки (6 шт.)' }, desc: { az: 'Müxtəlif dadlar', ru: 'Разные вкусы' } },
    { id: 's2', kind: 'set', img: 'img/c-macarons.jpg', price: 15, name: { az: 'Makaron (12 əd.)', ru: 'Макарон (12 шт.)' }, desc: { az: 'Hədiyyə qutusunda', ru: 'В подарочной коробке' } },
    { id: 's3', kind: 'set', img: 'img/c-tart.jpg', price: 22, name: { az: 'Meyvəli tart', ru: 'Фруктовый тарт' }, desc: { az: '24 sm, 8 dilim', ru: '24 см, 8 кусочков' } },
    { id: 's4', kind: 'set', img: 'img/c-cookies.jpg', price: 12, name: { az: 'Ev peçenyesi (1 kq)', ru: 'Домашнее печенье (1 кг)' }, desc: { az: 'Şəkərbura, qoğal, kurabye', ru: 'Шекербура, гогал, курабье' } }
  ],

  // Konstruktor: + qiymət (1 kq üçün)
  builder: {
    base: 22,
    biscuit: [
      { n: { az: 'Vanil', ru: 'Ванильный' }, p: 0 }, { n: { az: 'Şokolad', ru: 'Шоколадный' }, p: 2 },
      { n: { az: 'Red Velvet', ru: 'Red Velvet' }, p: 4 }, { n: { az: 'Fındıqlı', ru: 'Ореховый' }, p: 3 }
    ],
    cream: [
      { n: { az: 'Qaymaq', ru: 'Сливочный' }, p: 0 }, { n: { az: 'Krem-pendir', ru: 'Крем-чиз' }, p: 4 },
      { n: { az: 'Şokolad qanaş', ru: 'Шоколадный ганаш' }, p: 3 }
    ],
    filling: [
      { n: { az: 'İçliksiz', ru: 'Без начинки' }, p: 0 }, { n: { az: 'Çiyələk', ru: 'Клубника' }, p: 3 },
      { n: { az: 'Banan-karamel', ru: 'Банан-карамель' }, p: 3 }, { n: { az: 'Moruq', ru: 'Малина' }, p: 4 }, { n: { az: 'Oreo', ru: 'Орео' }, p: 3 }
    ],
    decor: [
      { n: { az: 'Sadə', ru: 'Простой' }, p: 0, fixed: true }, { n: { az: 'Təzə meyvə', ru: 'Свежие фрукты' }, p: 8, fixed: true },
      { n: { az: 'Şəkər xəmiri fiqur', ru: 'Фигурки из мастики' }, p: 20, fixed: true }, { n: { az: 'Foto-tort (yeməli şəkil)', ru: 'Фото-торт' }, p: 10, fixed: true }
    ]
  }
};

/* --- nümunə sayt ayarları (demo-yarat.js) --- */
SITE.demo = { url: 'https://sumqayit-sayt.vercel.app' };
if (SITE.reviews) SITE.reviews = [];
