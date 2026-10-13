/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   Təmir qiymətləri: repair.prices[brend][problem] = [qiymət, dəqiqə]
   ============================================================ */
window.SITE = {
  id: 'smartfix',
  name: 'SmartFix',
  schemaType: 'ElectronicsStore',
  phone: '+994 50 000 00 00',
  whatsapp: '994500000000',
  instagram: 'smartfix.sumqayit',
  address: { az: 'Sumqayıt, Nizami küçəsi 30, ticarət mərkəzi, 1-ci mərtəbə', ru: 'Сумгайыт, ул. Низами 30, торговый центр, 1 этаж' },
  map: { lat: 40.5838, lng: 49.6725, zoom: 17 },
  hours: ['11:00-19:00', '10:00-20:00', '10:00-20:00', '10:00-20:00', '10:00-20:00', '10:00-20:00', '10:00-20:00'],
  cart: true,
  delivery: { fee: 2, freeFrom: 40 },

  t: {
    badge: { az: 'ay<br>zəmanət', ru: 'мес.<br>гарантии' },
    nav_repair: { az: 'Təmir', ru: 'Ремонт' },
    nav_calc: { az: 'Qiymət hesabla', ru: 'Рассчитать цену' },
    nav_shop: { az: 'Aksesuarlar', ru: 'Аксессуары' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    hero_chip: { az: '⚡ Ekran dəyişmə — 30 dəqiqəyə', ru: '⚡ Замена экрана — за 30 минут' },
    hero_title: { az: 'Telefonunuz<br><span>yenidən yeni kimi</span>', ru: 'Ваш телефон<br><span>снова как новый</span>' },
    hero_text: { az: 'iPhone, Samsung, Xiaomi və digər brendlərin təmiri. Orijinal hissələr, 6 ay zəmanət, gözünüzün qarşısında təmir.', ru: 'Ремонт iPhone, Samsung, Xiaomi и других брендов. Оригинальные запчасти, гарантия 6 месяцев, ремонт при вас.' },
    hero_cta: { az: 'Qiyməti hesabla', ru: 'Рассчитать цену' },
    hero_cta2: { az: 'Aksesuarlar', ru: 'Аксессуары' },
    u1: { az: 'Pulsuz diaqnostika', ru: 'Бесплатная диагностика' },
    u2: { az: '6 ay zəmanət', ru: 'Гарантия 6 месяцев' },
    u3: { az: 'Orijinal hissələr', ru: 'Оригинальные запчасти' },
    u4: { az: 'Kuryer ilə götürmə', ru: 'Курьер заберёт' },
    repair_kicker: { az: 'Nəyi təmir edirik', ru: 'Что ремонтируем' },
    repair_title: { az: 'Ən çox rast gəlinən problemlər', ru: 'Самые частые поломки' },
    calc_kicker: { az: 'Onlayn kalkulyator', ru: 'Онлайн-калькулятор' },
    calc_title: { az: 'Təmir qiymətini 10 saniyəyə öyrənin', ru: 'Узнайте цену ремонта за 10 секунд' },
    s_brand: { az: '1. Brend', ru: '1. Бренд' },
    s_model: { az: '2. Model', ru: '2. Модель' },
    s_problem: { az: '3. Problem', ru: '3. Проблема' },
    est_price: { az: 'Təxmini qiymət', ru: 'Примерная цена' },
    est_time: { az: 'Təmir müddəti', ru: 'Время ремонта' },
    min: { az: 'dəq', ru: 'мин' },
    calc_note: { az: 'Dəqiq qiymət pulsuz diaqnostikadan sonra deyilir.', ru: 'Точная цена — после бесплатной диагностики.' },
    calc_send: { az: 'WhatsApp ilə yazıl', ru: 'Записаться в WhatsApp' },
    calc_msg: { az: 'Salam! Təmir üçün yazılmaq istəyirəm: ', ru: 'Здравствуйте! Хочу записаться на ремонт: ' },
    shop_kicker: { az: 'Mağaza', ru: 'Магазин' },
    shop_title: { az: 'Aksesuarlar', ru: 'Аксессуары' },
    add: { az: 'Səbətə', ru: 'В корзину' },
    old: { az: 'əvvəl', ru: 'было' },
    contact_title: { az: 'Servis mərkəzimiz', ru: 'Наш сервисный центр' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  problems: [
    { id: 'screen', ico: '📱', name: { az: 'Ekran sınıb', ru: 'Разбит экран' } },
    { id: 'battery', ico: '🔋', name: { az: 'Batareya tez bitir', ru: 'Быстро садится батарея' } },
    { id: 'charge', ico: '🔌', name: { az: 'Şarj olmur', ru: 'Не заряжается' } },
    { id: 'camera', ico: '📷', name: { az: 'Kamera işləmir', ru: 'Не работает камера' } },
    { id: 'water', ico: '💧', name: { az: 'Suya düşüb', ru: 'Попал в воду' } },
    { id: 'soft', ico: '⚙️', name: { az: 'Proqram / açılmır', ru: 'ПО / не включается' } },
    { id: 'back', ico: '🔲', name: { az: 'Arxa şüşə', ru: 'Заднее стекло' } },
    { id: 'speaker', ico: '🔊', name: { az: 'Səs / dinamik', ru: 'Звук / динамик' } }
  ],

  repair: {
    brands: {
      Apple: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16'],
      Samsung: ['Galaxy A15', 'Galaxy A35', 'Galaxy A55', 'Galaxy S23', 'Galaxy S24'],
      Xiaomi: ['Redmi Note 12', 'Redmi Note 13', 'Redmi 13', 'Poco X6', 'Xiaomi 14'],
      Honor: ['Honor X8', 'Honor X9b', 'Honor 200']
    },
    // brend üzrə baza qiymət [qiymət ₼, dəqiqə]; modelin sırası qiyməti +8% artırır
    prices: {
      Apple: { screen: [120, 40], battery: [60, 30], charge: [45, 40], camera: [80, 60], water: [50, 120], soft: [25, 30], back: [90, 90], speaker: [40, 40] },
      Samsung: { screen: [90, 40], battery: [45, 30], charge: [35, 40], camera: [60, 60], water: [45, 120], soft: [20, 30], back: [40, 40], speaker: [35, 40] },
      Xiaomi: { screen: [60, 40], battery: [35, 30], charge: [25, 30], camera: [45, 60], water: [40, 120], soft: [15, 30], back: [30, 40], speaker: [25, 40] },
      Honor: { screen: [65, 40], battery: [35, 30], charge: [25, 30], camera: [45, 60], water: [40, 120], soft: [15, 30], back: [30, 40], speaker: [25, 40] }
    }
  },

  items: [
    { id: 'a1', img: 'img/a-case.jpg', price: 12, old: 18, name: { az: 'Silikon örtük (MagSafe)', ru: 'Силиконовый чехол (MagSafe)' } },
    { id: 'a2', img: 'img/a-glass.jpg', price: 8, name: { az: 'Qoruyucu şüşə 9H', ru: 'Защитное стекло 9H' } },
    { id: 'a3', img: 'img/a-charger.jpg', price: 25, name: { az: 'Sürətli şarj 25W', ru: 'Быстрая зарядка 25W' } },
    { id: 'a4', img: 'img/a-cable.jpg', price: 9, name: { az: 'USB-C kabel 1m', ru: 'Кабель USB-C 1м' } },
    { id: 'a5', img: 'img/a-earbuds.jpg', price: 45, old: 60, name: { az: 'Simsiz qulaqlıq TWS', ru: 'Беспроводные наушники TWS' } },
    { id: 'a6', img: 'img/a-powerbank.jpg', price: 35, name: { az: 'Powerbank 20 000 mAh', ru: 'Пауэрбанк 20 000 мАч' } },
    { id: 'a7', img: 'img/a-watch.jpg', price: 69, name: { az: 'Smart saat', ru: 'Смарт-часы' } },
    { id: 'a8', img: 'img/a-holder.jpg', price: 15, name: { az: 'Avtomobil tutacağı', ru: 'Автодержатель' } },
    { id: 'a9', img: 'img/a-headphones.jpg', price: 55, name: { az: 'Bluetooth qulaqlıq', ru: 'Bluetooth-наушники' } },
    { id: 'a10', img: 'img/a-speaker.jpg', price: 40, old: 50, name: { az: 'Portativ dinamik', ru: 'Портативная колонка' } }
  ]
};
