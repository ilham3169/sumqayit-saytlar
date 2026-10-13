/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'tunar-dizayn-sumqayit',
  name: 'Tunar Dizayn',
  schemaType: 'FurnitureStore',
  phone: '+994 50 000 00 00',
  whatsapp: '994500000000',
  instagram: '',
  address: { az: 'Sumqayıt şəhəri', ru: 'г. Сумгайыт' },
  map: { lat: 40.584827, lng: 49.67897, zoom: 17 },
  hours: [null, '09:00-19:00', '09:00-19:00', '09:00-19:00', '09:00-19:00', '09:00-19:00', '10:00-17:00'],

  t: {
    nav_works: { az: 'İşlərimiz', ru: 'Наши работы' },
    nav_calc: { az: 'Qiymət', ru: 'Цена' },
    nav_process: { az: 'Necə işləyirik', ru: 'Как работаем' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    measure: { az: 'Pulsuz ölçü', ru: 'Бесплатный замер' },
    hero_kicker: { az: 'Fərdi sifarişlə mebel · Öz istehsalımız', ru: 'Мебель на заказ · Собственное производство' },
    hero_title: { az: 'Evinizə tam uyğun<br>mətbəx və şkaflar', ru: 'Кухни и шкафы,<br>идеально под ваш дом' },
    hero_text: { az: 'Mətbəx, qarderob, yataq və uşaq otağı mebeli — ölçüyə görə, 3D dizaynla, 14 gündə. Vasitəçi yoxdur, qiymət birbaşa emalatxanadan.', ru: 'Кухни, гардеробные, спальни и детские — по размерам, с 3D-дизайном, за 14 дней. Без посредников, цены напрямую от мастерской.' },
    hero_cta2: { az: 'Qiyməti hesabla', ru: 'Рассчитать цену' },
    b1: { az: 'gündə hazır', ru: 'дней на изготовление' },
    b2: { az: 'il zəmanət', ru: 'лет гарантии' },
    b3: { az: 'layihə', ru: 'проектов' },
    works_kicker: { az: 'Portfolio', ru: 'Портфолио' },
    works_title: { az: 'Son layihələrimiz', ru: 'Наши последние проекты' },
    all: { az: 'Hamısı', ru: 'Все' },
    calc_kicker: { az: 'Onlayn kalkulyator', ru: 'Онлайн-калькулятор' },
    calc_title: { az: 'Mətbəxin qiymətini hesablayın', ru: 'Рассчитайте стоимость кухни' },
    c_shape: { az: 'Forma', ru: 'Форма' },
    c_len: { az: 'Uzunluq (metr)', ru: 'Длина (метры)' },
    c_facade: { az: 'Fasad', ru: 'Фасад' },
    c_top: { az: 'Tezgah', ru: 'Столешница' },
    c_extra: { az: 'Əlavələr', ru: 'Дополнительно' },
    c_total: { az: 'Təxmini qiymət', ru: 'Примерная стоимость' },
    c_note: { az: 'Dəqiq qiymət pulsuz ölçüdən və 3D dizayndan sonra.', ru: 'Точная цена — после бесплатного замера и 3D-дизайна.' },
    c_send: { az: 'Bu konfiqurasiyanı göndər', ru: 'Отправить конфигурацию' },
    c_msg: { az: 'Salam! Mətbəx mebeli istəyirəm:', ru: 'Здравствуйте! Хочу кухню:' },
    process_kicker: { az: 'Proses', ru: 'Процесс' },
    process_title: { az: 'Sifarişdən quraşdırmaya', ru: 'От заказа до установки' },
    p1: { az: 'Pulsuz ölçü', ru: 'Бесплатный замер' }, p1d: { az: 'Usta evinizə gəlir, ölçür və məsləhət verir.', ru: 'Мастер приедет, сделает замер и проконсультирует.' },
    p2: { az: '3D dizayn', ru: '3D-дизайн' }, p2d: { az: 'Mebelinizi əvvəlcədən 3D-də görürsünüz.', ru: 'Вы заранее видите мебель в 3D.' },
    p3: { az: 'İstehsal', ru: 'Производство' }, p3d: { az: 'Öz sexizdə 10–14 gün ərzində.', ru: 'В нашем цеху за 10–14 дней.' },
    p4: { az: 'Quraşdırma', ru: 'Установка' }, p4d: { az: 'Pulsuz çatdırılma və montaj, 5 il zəmanət.', ru: 'Бесплатная доставка и сборка, гарантия 5 лет.' },
    form_title: { az: 'Pulsuz ölçüyə yazılın', ru: 'Запишитесь на бесплатный замер' },
    form_text: { az: 'Ustamız Sumqayıt və Abşeron üzrə sizə uyğun vaxtda gəlir.', ru: 'Мастер приедет в удобное время по Сумгайыту и Абшерону.' },
    f_what: { az: 'Nə lazımdır?', ru: 'Что нужно?' },
    f_addr: { az: 'Ünvan', ru: 'Адрес' },
    f_name: { az: 'Adınız', ru: 'Ваше имя' },
    f_phone: { az: 'Telefon', ru: 'Телефон' },
    f_send: { az: 'Ölçüyə yazıl', ru: 'Записаться на замер' },
    form_msg: { az: 'Salam! Pulsuz ölçü istəyirəm:', ru: 'Здравствуйте! Хочу бесплатный замер:' },
    contact_title: { az: 'Showroom və emalatxana', ru: 'Шоурум и мастерская' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  cats: [
    { id: 'kitchen', name: { az: 'Mətbəx', ru: 'Кухни' } },
    { id: 'wardrobe', name: { az: 'Şkaf və qarderob', ru: 'Шкафы' } },
    { id: 'room', name: { az: 'Yataq və uşaq', ru: 'Спальни и детские' } },
    { id: 'other', name: { az: 'Ofis və digər', ru: 'Офис и другое' } }
  ],
  works: [
    { cat: 'kitchen', img: 'img/w-kitchen.jpg', name: { az: 'Ağ mat mətbəx, 18-ci mkr', ru: 'Белая матовая кухня, 18 мкр' }, price: 3200 },
    { cat: 'kitchen', img: 'img/w-dark.jpg', name: { az: 'Qoz ağacı mətbəx', ru: 'Кухня под орех' }, price: 4800 },
    { cat: 'wardrobe', img: 'img/w-wardrobe.jpg', name: { az: 'Qarderob otağı', ru: 'Гардеробная' }, price: 2100 },
    { cat: 'room', img: 'img/w-bedroom.jpg', name: { az: 'Yataq otağı dəsti', ru: 'Спальный гарнитур' }, price: 2600 },
    { cat: 'room', img: 'img/w-kids.jpg', name: { az: 'Uşaq otağı', ru: 'Детская комната' }, price: 1700 },
    { cat: 'other', img: 'img/w-tv.jpg', name: { az: 'TV divarı', ru: 'ТВ-стенка' }, price: 900 },
    { cat: 'other', img: 'img/w-office.jpg', name: { az: 'Ofis mebeli', ru: 'Офисная мебель' }, price: 3500 },
    { cat: 'other', img: 'img/w-bath.jpg', name: { az: 'Hamam mebeli', ru: 'Мебель для ванной' }, price: 650 }
  ],

  // Kalkulyator: qiymət 1 metr üçün (₼)
  calc: {
    shapes: [{ n: { az: 'Düz', ru: 'Прямая' }, k: 1 }, { n: { az: 'L-forma', ru: 'Угловая' }, k: 1.1 }, { n: { az: 'U-forma', ru: 'П-образная' }, k: 1.18 }],
    facades: [{ n: { az: 'LDSP', ru: 'ЛДСП' }, p: 380 }, { n: { az: 'MDF boyalı', ru: 'МДФ крашеный' }, p: 560 }, { n: { az: 'Akril parlaq', ru: 'Акрил глянец' }, p: 680 }, { n: { az: 'Təbii ağac', ru: 'Массив' }, p: 950 }],
    tops: [{ n: { az: 'Laminat', ru: 'Ламинат' }, p: 40 }, { n: { az: 'Akril daş', ru: 'Акриловый камень' }, p: 160 }, { n: { az: 'Kvars', ru: 'Кварц' }, p: 240 }],
    extras: [{ n: { az: 'LED işıq', ru: 'LED-подсветка' }, p: 120 }, { n: { az: 'Blum mexanizmlər', ru: 'Механизмы Blum' }, p: 350 }, { n: { az: 'Quraşdırılmış texnika üçün yer', ru: 'Ниши под встроенную технику' }, p: 180 }, { n: { az: 'Ada (island)', ru: 'Остров' }, p: 900 }]
  }
};

/* --- nümunə sayt ayarları (demo-yarat.js) --- */
SITE.demo = { url: 'https://sumqayit-sayt.vercel.app' };
if (SITE.reviews) SITE.reviews = [];
