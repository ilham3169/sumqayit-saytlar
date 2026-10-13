/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'h-beauty-studio-sumqayit',
  name: 'H Beauty Studio',
  schemaType: 'BeautySalon',
  phone: '+994 50 000 00 00',
  whatsapp: '994500000000',
  instagram: '',
  address: { az: 'Sumqayıt, 9-cu mikrorayon', ru: 'Сумгайыт, 9-й микрорайон' },
  map: { lat: 40.574727, lng: 49.684044, zoom: 17 },
  hours: [null, '10:00-20:00', '10:00-20:00', '10:00-20:00', '10:00-20:00', '10:00-20:00', '10:00-19:00'],

  t: {
    nav_services: { az: 'Xidmətlər', ru: 'Услуги' },
    nav_masters: { az: 'Ustalar', ru: 'Мастера' },
    nav_gallery: { az: 'İşlər', ru: 'Работы' },
    nav_faq: { az: 'Suallar', ru: 'Вопросы' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    book: { az: 'Yazıl', ru: 'Записаться' },
    hero_kicker: { az: 'Gözəllik studiyası · Sumqayıt', ru: 'Студия красоты · Сумгайыт' },
    hero_title: { az: 'Sizin gözəlliyiniz —<br><i>bizim sənətimiz</i>', ru: 'Ваша красота —<br><i>наше искусство</i>' },
    hero_text: { az: 'Manikür, pedikür, qaş və kirpik, makiyaj, saç. Steril alətlər, premium materiallar və isti atmosfer.', ru: 'Маникюр, педикюр, брови и ресницы, макияж, волосы. Стерильные инструменты, премиальные материалы и тёплая атмосфера.' },
    hero_cta: { az: 'Onlayn yazıl', ru: 'Записаться онлайн' },
    hero_cta2: { az: 'Qiymətlər', ru: 'Цены' },
    promo: { az: '✿ İlk ziyarətə <b>15% endirim</b> — yazılarkən “İLK15” qeyd edin', ru: '✿ <b>Скидка 15%</b> на первый визит — укажите «İLK15» при записи' },
    trust1: { az: 'Steril alətlər', ru: 'Стерильные инструменты' },
    trust2: { az: 'Premium brendlər', ru: 'Премиум-бренды' },
    trust3: { az: 'Zəmanət 7 gün', ru: 'Гарантия 7 дней' },
    trust4: { az: 'Rahat parkinq', ru: 'Удобная парковка' },
    svc_kicker: { az: 'Xidmətlər və qiymətlər', ru: 'Услуги и цены' },
    svc_title: { az: 'Sizə nə lazımdır?', ru: 'Что вам нужно?' },
    from: { az: '-dan', ru: 'от ' },
    min: { az: 'dəq', ru: 'мин' },
    masters_kicker: { az: 'Komanda', ru: 'Команда' },
    masters_title: { az: 'Ustalarımız', ru: 'Наши мастера' },
    gallery_kicker: { az: 'Portfolio', ru: 'Портфолио' },
    gallery_title: { az: 'Son işlərimiz', ru: 'Наши работы' },
    book_kicker: { az: 'Onlayn yazılış', ru: 'Онлайн-запись' },
    book_title: { az: 'Sizə uyğun vaxtı seçin', ru: 'Выберите удобное время' },
    book_text: { az: 'Sorğunuz WhatsApp-a göndəriləcək. Administratorumuz 10 dəqiqə ərzində təsdiq edəcək.', ru: 'Заявка уйдёт в WhatsApp. Администратор подтвердит в течение 10 минут.' },
    f_cat: { az: 'Kateqoriya', ru: 'Категория' },
    f_service: { az: 'Xidmət', ru: 'Услуга' },
    f_master: { az: 'Usta', ru: 'Мастер' },
    any: { az: 'Fərqi yoxdur', ru: 'Любой' },
    f_date: { az: 'Tarix', ru: 'Дата' },
    f_time: { az: 'Saat', ru: 'Время' },
    f_name: { az: 'Adınız', ru: 'Ваше имя' },
    f_phone: { az: 'Telefon', ru: 'Телефон' },
    f_promo: { az: 'Promokod', ru: 'Промокод' },
    f_send: { az: 'WhatsApp ilə göndər', ru: 'Отправить в WhatsApp' },
    book_msg: { az: 'Salam! Yazılmaq istəyirəm:', ru: 'Здравствуйте! Хочу записаться:' },
    faq_kicker: { az: 'Suallar', ru: 'Вопросы' },
    faq_title: { az: 'Tez-tez verilən suallar', ru: 'Частые вопросы' },
    contact_title: { az: 'Sizi gözləyirik', ru: 'Ждём вас' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  categories: [
    { id: 'mani', img: 'img/s-manicure.jpg', name: { az: 'Manikür', ru: 'Маникюр' }, items: [
      { name: { az: 'Klassik manikür', ru: 'Классический маникюр' }, price: 10, min: 40 },
      { name: { az: 'Manikür + gel-lak', ru: 'Маникюр + гель-лак' }, price: 20, min: 75 },
      { name: { az: 'Gel uzatma', ru: 'Наращивание гелем' }, price: 35, min: 120 },
      { name: { az: 'French / ombre', ru: 'Френч / омбре' }, price: 25, min: 90 },
      { name: { az: 'Dizayn (1 dırnaq)', ru: 'Дизайн (1 ноготь)' }, price: 2, min: 5 }
    ] },
    { id: 'pedi', img: 'img/s-pedicure.jpg', name: { az: 'Pedikür', ru: 'Педикюр' }, items: [
      { name: { az: 'Klassik pedikür', ru: 'Классический педикюр' }, price: 15, min: 50 },
      { name: { az: 'Pedikür + gel-lak', ru: 'Педикюр + гель-лак' }, price: 25, min: 80 },
      { name: { az: 'SPA pedikür', ru: 'SPA-педикюр' }, price: 30, min: 90 }
    ] },
    { id: 'brow', img: 'img/s-brows.jpg', name: { az: 'Qaş', ru: 'Брови' }, items: [
      { name: { az: 'Qaş korreksiyası', ru: 'Коррекция бровей' }, price: 5, min: 20 },
      { name: { az: 'Boyama + korreksiya', ru: 'Окрашивание + коррекция' }, price: 10, min: 30 },
      { name: { az: 'Qaş laminasiyası', ru: 'Ламинирование бровей' }, price: 25, min: 60 },
      { name: { az: 'Henna', ru: 'Хна' }, price: 15, min: 40 }
    ] },
    { id: 'lash', img: 'img/s-lashes.jpg', name: { az: 'Kirpik', ru: 'Ресницы' }, items: [
      { name: { az: 'Klassik uzatma', ru: 'Классическое наращивание' }, price: 35, min: 120 },
      { name: { az: '2D–3D həcm', ru: 'Объём 2D–3D' }, price: 45, min: 150 },
      { name: { az: 'Kirpik laminasiyası', ru: 'Ламинирование ресниц' }, price: 30, min: 60 }
    ] },
    { id: 'makeup', img: 'img/s-makeup.jpg', name: { az: 'Makiyaj', ru: 'Макияж' }, items: [
      { name: { az: 'Gündəlik makiyaj', ru: 'Дневной макияж' }, price: 30, min: 45 },
      { name: { az: 'Axşam makiyajı', ru: 'Вечерний макияж' }, price: 45, min: 60 },
      { name: { az: 'Gəlin makiyajı + sınaq', ru: 'Свадебный макияж + репетиция' }, price: 120, min: 120 }
    ] },
    { id: 'hair', img: 'img/s-hair.jpg', name: { az: 'Saç', ru: 'Волосы' }, items: [
      { name: { az: 'Saç kəsimi', ru: 'Стрижка' }, price: 15, min: 45 },
      { name: { az: 'Föhn / üslub', ru: 'Укладка' }, price: 15, min: 40 },
      { name: { az: 'Boyama', ru: 'Окрашивание' }, price: 50, min: 150, from: true },
      { name: { az: 'Keratin bərpa', ru: 'Кератиновое восстановление' }, price: 80, min: 180, from: true }
    ] }
  ],

  masters: [
    { name: 'Aygün', img: 'img/master1.jpg', role: { az: 'Kosmetoloq, qaş ustası', ru: 'Косметолог, бровист' }, years: 9 },
    { name: 'Nərmin', img: 'img/master2.jpg', role: { az: 'Manikür-pedikür ustası', ru: 'Мастер маникюра и педикюра' }, years: 6 },
    { name: 'Səbinə', img: 'img/master3.jpg', role: { az: 'Vizajist, stilist', ru: 'Визажист, стилист' }, years: 7 }
  ],

  gallery: ['img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg', 'img/g4.jpg', 'img/g5.jpg', 'img/g6.jpg'],

  faq: [
    { q: { az: 'Alətlər necə sterilizasiya olunur?', ru: 'Как стерилизуются инструменты?' },
      a: { az: 'Bütün metal alətlər üç mərhələdən keçir: dezinfeksiya, ultrasəs təmizləmə və quru isti şkafda (180°C) sterilizasiya. Fayllar birdəfəlikdir.', ru: 'Все металлические инструменты проходят три этапа: дезинфекция, ультразвуковая очистка и стерилизация в сухожаровом шкафу (180°C). Пилки одноразовые.' } },
    { q: { az: 'Gel-lak nə qədər davam edir?', ru: 'Сколько держится гель-лак?' },
      a: { az: 'Orta hesabla 3–4 həftə. İlk 7 gün ərzində qopma olarsa, pulsuz düzəldirik.', ru: 'В среднем 3–4 недели. Если в первые 7 дней появится скол — исправим бесплатно.' } },
    { q: { az: 'Yazılışı necə ləğv edim?', ru: 'Как отменить запись?' },
      a: { az: 'WhatsApp-a ən azı 3 saat əvvəl yazmağınız kifayətdir.', ru: 'Достаточно написать в WhatsApp минимум за 3 часа.' } },
    { q: { az: 'Kartla ödəniş mümkündür?', ru: 'Можно оплатить картой?' },
      a: { az: 'Bəli, nağd, kart və M10/Kapital Bank ilə ödəniş qəbul edirik.', ru: 'Да, принимаем наличные, карты, а также M10 и Kapital Bank.' } }
  ]
};

/* --- nümunə sayt ayarları (demo-yarat.js) --- */
SITE.demo = { url: 'https://sumqayit-sayt.vercel.app' };
if (SITE.reviews) SITE.reviews = [];
