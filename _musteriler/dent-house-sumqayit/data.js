/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'dent-house-sumqayit',
  name: 'Dent House',
  schemaType: 'Dentist',
  phone: '+994 50 000 00 00',
  whatsapp: '994500000000',
  instagram: '',
  address: { az: 'Sumqayıt şəhəri', ru: 'г. Сумгайыт' },
  map: { lat: 40.583621, lng: 49.671439, zoom: 17 },
  hours: [null, '09:00-19:00', '09:00-19:00', '09:00-19:00', '09:00-19:00', '09:00-19:00', '10:00-16:00'],

  t: {
    nav_services: { az: 'Xidmətlər', ru: 'Услуги' },
    nav_prices: { az: 'Qiymətlər', ru: 'Цены' },
    nav_doctors: { az: 'Həkimlər', ru: 'Врачи' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    appoint: { az: 'Qəbula yazıl', ru: 'Записаться на приём' },
    hero_badge: { az: 'Pulsuz ilkin müayinə', ru: 'Бесплатный первичный осмотр' },
    hero_title: { az: 'Sağlam dişlər,<br><span>inamlı təbəssüm</span>', ru: 'Здоровые зубы,<br><span>уверенная улыбка</span>' },
    hero_text: { az: 'Müasir avadanlıq, ağrısız müalicə və təcrübəli həkimlər. İmplant, breket, ağartma və uşaq stomatologiyası — Sumqayıtda.', ru: 'Современное оборудование, безболезненное лечение и опытные врачи. Имплантация, брекеты, отбеливание и детская стоматология — в Сумгайыте.' },
    hero_cta2: { az: 'Qiymətlərə bax', ru: 'Смотреть цены' },
    r1: { az: 'il təcrübə', ru: 'лет опыта' },
    r2: { az: 'xoşbəxt pasiyent', ru: 'довольных пациентов' },
    r3: { az: 'Google reytinq', ru: 'рейтинг Google' },
    svc_kicker: { az: 'Xidmətlər', ru: 'Услуги' },
    svc_title: { az: 'Hər yaşda diş sağlamlığı', ru: 'Здоровье зубов в любом возрасте' },
    more: { az: 'Ətraflı', ru: 'Подробнее' },
    from: { az: '-dan', ru: 'от ' },
    taksit_t: { az: '0% faizlə 12 aya qədər taksit', ru: 'Рассрочка до 12 месяцев без процентов' },
    taksit_d: { az: 'İmplant və breketləri hissə-hissə ödəyin. Bütün taksit kartları qəbul olunur.', ru: 'Оплачивайте имплантацию и брекеты частями. Принимаем карты рассрочки.' },
    prices_kicker: { az: 'Şəffaf qiymətlər', ru: 'Прозрачные цены' },
    prices_title: { az: 'Qiymət siyahısı', ru: 'Прайс-лист' },
    search: { az: 'Xidmət axtar…', ru: 'Найти услугу…' },
    doc_kicker: { az: 'Komanda', ru: 'Команда' },
    doc_title: { az: 'Həkimlərimiz', ru: 'Наши врачи' },
    exp: { az: 'il təcrübə', ru: 'лет опыта' },
    book_with: { az: 'Qəbula yazıl', ru: 'Записаться' },
    steps_kicker: { az: 'Necə işləyirik', ru: 'Как мы работаем' },
    st1: { az: 'Müraciət', ru: 'Заявка' }, st1d: { az: 'Sayt və ya WhatsApp ilə', ru: 'Через сайт или WhatsApp' },
    st2: { az: 'Pulsuz müayinə', ru: 'Бесплатный осмотр' }, st2d: { az: 'Panoram rentgen və plan', ru: 'Панорамный снимок и план' },
    st3: { az: 'Ağrısız müalicə', ru: 'Безболезненное лечение' }, st3d: { az: 'Müasir anesteziya ilə', ru: 'С современной анестезией' },
    st4: { az: 'Zəmanət', ru: 'Гарантия' }, st4d: { az: '5 ilədək rəsmi zəmanət', ru: 'Официальная гарантия до 5 лет' },
    rev_kicker: { az: 'Rəylər', ru: 'Отзывы' },
    book_kicker: { az: 'Qəbul', ru: 'Приём' },
    book_title: { az: 'Qəbula yazılın', ru: 'Записаться на приём' },
    book_text: { az: 'Sorğunuzu göndərin, administrator 15 dəqiqə ərzində zəng edib vaxtı təsdiqləyəcək.', ru: 'Отправьте заявку — администратор перезвонит в течение 15 минут и подтвердит время.' },
    f_name: { az: 'Ad, soyad', ru: 'Имя, фамилия' },
    f_phone: { az: 'Telefon', ru: 'Телефон' },
    f_service: { az: 'Xidmət', ru: 'Услуга' },
    f_doctor: { az: 'Həkim', ru: 'Врач' },
    any: { az: 'Fərqi yoxdur', ru: 'Любой' },
    f_date: { az: 'Arzu olunan tarix', ru: 'Желаемая дата' },
    f_pain: { az: 'Hazırda ağrı var?', ru: 'Есть боль сейчас?' },
    yes: { az: 'Bəli, təcili', ru: 'Да, срочно' },
    no: { az: 'Xeyr', ru: 'Нет' },
    f_send: { az: 'Göndər', ru: 'Отправить' },
    book_msg: { az: 'Salam! Qəbula yazılmaq istəyirəm:', ru: 'Здравствуйте! Хочу записаться на приём:' },
    contact_title: { az: 'Klinikamız', ru: 'Наша клиника' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    rights: { az: 'Bütün hüquqlar qorunur. Lisenziya №000000', ru: 'Все права защищены. Лицензия №000000' }
  },

  services: [
    { img: 'img/s-clean.jpg', price: 30, name: { az: 'Peşəkar təmizləmə', ru: 'Профессиональная чистка' }, desc: { az: 'Ultrasəs, Air-Flow, polirovka', ru: 'Ультразвук, Air-Flow, полировка' } },
    { img: 'img/s-implant.jpg', price: 650, name: { az: 'İmplantasiya', ru: 'Имплантация' }, desc: { az: 'Koreya, İsrail və İsveçrə implantları', ru: 'Импланты Кореи, Израиля и Швейцарии' } },
    { img: 'img/s-braces.jpg', price: 900, name: { az: 'Breket sistemləri', ru: 'Брекет-системы' }, desc: { az: 'Metal, keramika, şəffaf kapalar', ru: 'Металл, керамика, элайнеры' } },
    { img: 'img/s-white.jpg', price: 150, name: { az: 'Dişlərin ağardılması', ru: 'Отбеливание зубов' }, desc: { az: '1 seansda 8 tona qədər', ru: 'До 8 тонов за 1 сеанс' } },
    { img: 'img/s-kids.jpg', price: 20, name: { az: 'Uşaq stomatologiyası', ru: 'Детская стоматология' }, desc: { az: 'Qorxusuz, oyun formatında', ru: 'Без страха, в игровой форме' } },
    { img: 'img/s-xray.jpg', price: 15, name: { az: 'Rentgen və 3D tomoqrafiya', ru: 'Рентген и 3D-томография' }, desc: { az: 'Rəqəmsal, aşağı radiasiya', ru: 'Цифровой, низкая доза' } }
  ],

  prices: [
    { g: { az: 'Diaqnostika', ru: 'Диагностика' }, items: [
      [{ az: 'İlkin müayinə və məsləhət', ru: 'Первичный осмотр и консультация' }, 0],
      [{ az: 'Panoram rentgen', ru: 'Панорамный снимок' }, 15],
      [{ az: '3D tomoqrafiya (KT)', ru: '3D-томография (КТ)' }, 50]] },
    { g: { az: 'Terapiya', ru: 'Терапия' }, items: [
      [{ az: 'Karies müalicəsi (plomb)', ru: 'Лечение кариеса (пломба)' }, 40],
      [{ az: 'Kanal müalicəsi (1 kanal)', ru: 'Лечение канала (1 канал)' }, 60],
      [{ az: 'Diş çəkimi (sadə)', ru: 'Удаление зуба (простое)' }, 25],
      [{ az: 'Ağıl dişinin çəkimi', ru: 'Удаление зуба мудрости' }, 80]] },
    { g: { az: 'Estetika', ru: 'Эстетика' }, items: [
      [{ az: 'Peşəkar təmizləmə', ru: 'Профессиональная чистка' }, 30],
      [{ az: 'Ağartma (ofis)', ru: 'Отбеливание (кабинетное)' }, 150],
      [{ az: 'Vinir (E-max, 1 diş)', ru: 'Винир (E-max, 1 зуб)' }, 350]] },
    { g: { az: 'Ortopediya və implant', ru: 'Ортопедия и импланты' }, items: [
      [{ az: 'Metal-keramika tac', ru: 'Металлокерамическая коронка' }, 120],
      [{ az: 'Sirkon tac', ru: 'Циркониевая коронка' }, 280],
      [{ az: 'İmplant (Koreya) + tac', ru: 'Имплант (Корея) + коронка' }, 650],
      [{ az: 'Breket (metal, tam)', ru: 'Брекеты (металл, полностью)' }, 900]] }
  ],

  doctors: [
    { name: 'Dr. Elçin Məmmədov', img: 'img/doc1.jpg', role: { az: 'Baş həkim, implantoloq', ru: 'Главный врач, имплантолог' }, years: 18 },
    { name: 'Dr. Günay Əliyeva', img: 'img/doc2.jpg', role: { az: 'Ortodont', ru: 'Ортодонт' }, years: 11 },
    { name: 'Dr. Rəşad Hüseynov', img: 'img/doc3.jpg', role: { az: 'Terapevt, endodont', ru: 'Терапевт, эндодонт' }, years: 9 }
  ],

  reviews: [
    { name: 'Səbinə H.', text: { az: 'İmplant qoydurdum, heç ağrı hiss etmədim. Dr. Elçinə çox təşəkkür edirəm!', ru: 'Поставила имплант — совсем не было больно. Огромное спасибо доктору Эльчину!' } },
    { name: 'Kamran Q.', text: { az: 'Oğlum diş həkimindən qorxurdu, burada isə gülə-gülə çıxdı. Uşaq həkimi əladır.', ru: 'Сын боялся стоматолога, а отсюда вышел с улыбкой. Детский врач — супер.' } },
    { name: 'Ирина С.', text: { az: 'Qiymətlər əvvəlcədən deyildi, sonda heç bir əlavə ödəniş olmadı. Tövsiyə edirəm.', ru: 'Цены назвали заранее, никаких доплат в конце. Рекомендую.' } }
  ]
};

/* --- nümunə sayt ayarları (demo-yarat.js) --- */
SITE.demo = { url: 'https://sumqayit-sayt.vercel.app' };
if (SITE.reviews) SITE.reviews = [];
SITE.doctors.forEach(function (d, i) { d.name = ['Baş həkim', 'Ortodont', 'Terapevt'][i]; }); SITE.t.rights = { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' };
document.addEventListener('DOMContentLoaded', function () { document.querySelectorAll('.rating > div:last-child').forEach(function (e) { e.remove(); }); });
