/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'zerif-butik',
  name: 'ZƏRİF',
  schemaType: 'ClothingStore',
  phone: '+994 55 966 77 44',
  whatsapp: '994559667744',
  instagram: 'zerif.butik',
  address: { az: 'Sumqayıt, Heydər Əliyev pr. 18, “Zərif” butiki', ru: 'Сумгайыт, пр. Гейдара Алиева 18, бутик «Зариф»' },
  map: { lat: 40.5845, lng: 49.6690, zoom: 17 },
  hours: ['11:00-20:00', '10:00-21:00', '10:00-21:00', '10:00-21:00', '10:00-21:00', '10:00-21:00', '10:00-21:00'],
  cart: true,
  delivery: { fee: 3, freeFrom: 100 },

  t: {
    nav_new: { az: 'Yeniliklər', ru: 'Новинки' },
    nav_shop: { az: 'Kataloq', ru: 'Каталог' },
    nav_about: { az: 'Butik', ru: 'Бутик' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    announce: { az: '100 ₼-dan yuxarı sifarişlərə Sumqayıt və Bakıya pulsuz çatdırılma · Evdə ölçüb qaytarmaq mümkündür', ru: 'Бесплатная доставка по Сумгайыту и Баку от 100 ₼ · Примерка дома и возврат' },
    hero_kicker: { az: 'Payız — Qış 2026', ru: 'Осень — Зима 2026' },
    hero_title: { az: 'Sadəlikdə<br>zəriflik', ru: 'Элегантность<br>в простоте' },
    hero_cta: { az: 'Kolleksiyaya bax', ru: 'Смотреть коллекцию' },
    cat_women: { az: 'Qadın', ru: 'Женское' },
    cat_men: { az: 'Kişi', ru: 'Мужское' },
    cat_acc: { az: 'Aksesuar', ru: 'Аксессуары' },
    shop_title: { az: 'Kataloq', ru: 'Каталог' },
    all: { az: 'Hamısı', ru: 'Все' },
    sort: { az: 'Sıralama', ru: 'Сортировка' },
    sort_new: { az: 'Yenilər', ru: 'Новые' },
    sort_low: { az: 'Ucuzdan bahaya', ru: 'Сначала дешёвые' },
    sort_high: { az: 'Bahadan ucuza', ru: 'Сначала дорогие' },
    size: { az: 'Ölçü', ru: 'Размер' },
    color: { az: 'Rəng', ru: 'Цвет' },
    add: { az: 'Səbətə əlavə et', ru: 'Добавить в корзину' },
    pick_size: { az: 'Ölçü seçin', ru: 'Выберите размер' },
    ask: { az: 'Sual ver', ru: 'Задать вопрос' },
    ask_msg: { az: 'Salam! Bu məhsul barədə sual: ', ru: 'Здравствуйте! Вопрос по товару: ' },
    new: { az: 'Yeni', ru: 'New' },
    sizes_guide: { az: 'Ölçü cədvəli', ru: 'Таблица размеров' },
    about_title: { az: 'Butik haqqında', ru: 'О бутике' },
    about_text: { az: '2018-ci ildən Sumqayıtda Türkiyə və İtaliya istehsalı keyfiyyətli geyimlər təqdim edirik. Hər həftə yeni kolleksiya, fərdi stilist məsləhəti və hədiyyə qablaşdırması — pulsuz.', ru: 'С 2018 года мы предлагаем в Сумгайыте качественную одежду из Турции и Италии. Новые поступления каждую неделю, консультация стилиста и подарочная упаковка — бесплатно.' },
    perk1: { az: 'Evdə ölçmə', ru: 'Примерка дома' },
    perk2: { az: '14 gün qaytarma', ru: 'Возврат 14 дней' },
    perk3: { az: 'Hədiyyə qablaşdırma', ru: 'Подарочная упаковка' },
    insta: { az: 'Instagram-da bizi izləyin', ru: 'Следите за нами в Instagram' },
    contact_title: { az: 'Butikə gəlin', ru: 'Приходите в бутик' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    note: { az: 'Qeyd: rəng, ölçü sualı və s.', ru: 'Комментарий: цвет, вопрос о размере и т.д.' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  categories: [
    { id: 'women', key: 'cat_women' }, { id: 'men', key: 'cat_men' }, { id: 'acc', key: 'cat_acc' }
  ],

  items: [
    { id: 'p1', cat: 'women', img: 'img/p-dress.jpg', price: 89, isNew: true, sizes: ['XS', 'S', 'M', 'L'], colors: ['#1d1d1d', '#7a1f2b'], name: { az: 'Midi don', ru: 'Платье миди' } },
    { id: 'p2', cat: 'women', img: 'img/p-coat.jpg', price: 189, isNew: true, sizes: ['S', 'M', 'L', 'XL'], colors: ['#c8b49a', '#3a3a3a'], name: { az: 'Yun palto', ru: 'Шерстяное пальто' } },
    { id: 'p3', cat: 'women', img: 'img/p-blazer.jpg', price: 119, sizes: ['XS', 'S', 'M', 'L'], colors: ['#e9e4dc', '#1d1d1d'], name: { az: 'Klassik pencək', ru: 'Классический жакет' } },
    { id: 'p4', cat: 'women', img: 'img/p-jeans.jpg', price: 65, sizes: ['26', '27', '28', '29', '30'], colors: ['#3b5a80'], name: { az: 'Mom jeans', ru: 'Джинсы мом' } },
    { id: 'p5', cat: 'women', img: 'img/p-shirt.jpg', price: 49, sizes: ['XS', 'S', 'M', 'L'], colors: ['#ffffff', '#cfd8e3'], name: { az: 'Pambıq köynək', ru: 'Хлопковая рубашка' } },
    { id: 'p6', cat: 'women', img: 'img/p-knit.jpg', price: 59, isNew: true, sizes: ['S', 'M', 'L'], colors: ['#d9c7b0', '#6b4f3a'], name: { az: 'Toxunma sviter', ru: 'Вязаный свитер' } },
    { id: 'p7', cat: 'women', img: 'img/p-skirt.jpg', price: 55, sizes: ['XS', 'S', 'M'], colors: ['#1d1d1d', '#8a7a66'], name: { az: 'Plisse ətək', ru: 'Плиссированная юбка' } },
    { id: 'p8', cat: 'men', img: 'img/p-suit.jpg', price: 249, sizes: ['48', '50', '52', '54'], colors: ['#20263a', '#3a3a3a'], name: { az: 'Kişi kostyumu', ru: 'Мужской костюм' } },
    { id: 'p9', cat: 'acc', img: 'img/p-bag.jpg', price: 79, sizes: ['One size'], colors: ['#6b4f3a', '#1d1d1d'], name: { az: 'Dəri çanta', ru: 'Кожаная сумка' } },
    { id: 'p10', cat: 'acc', img: 'img/p-sneakers.jpg', price: 95, sizes: ['36', '37', '38', '39', '40', '41'], colors: ['#ffffff'], name: { az: 'Ağ krossovka', ru: 'Белые кроссовки' } },
    { id: 'p11', cat: 'acc', img: 'img/p-heels.jpg', price: 85, sizes: ['36', '37', '38', '39'], colors: ['#1d1d1d', '#c8b49a'], name: { az: 'Dabanlı tufli', ru: 'Туфли на каблуке' } },
    { id: 'p12', cat: 'acc', img: 'img/p-scarf.jpg', price: 35, isNew: true, sizes: ['One size'], colors: ['#c9a66b', '#7a1f2b'], name: { az: 'İpək şərf', ru: 'Шёлковый платок' } }
  ]
};
