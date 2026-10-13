/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'gentleman-berber-sumqayit',
  name: 'Gentleman Bərbər',
  schemaType: 'BarberShop',
  phone: '+994 50 000 00 00',
  whatsapp: '994500000000',
  instagram: '',
  address: { az: 'Sumqayıt şəhəri', ru: 'г. Сумгайыт' },
  map: { lat: 40.583568, lng: 49.67138, zoom: 17 },
  hours: ['11:00-20:00', '10:00-21:00', '10:00-21:00', '10:00-21:00', '10:00-21:00', '10:00-21:00', '10:00-21:00'],
  slotStep: 30, // rezerv saatları arası (dəqiqə)

  t: {
    nav_services: { az: 'Xidmətlər', ru: 'Услуги' },
    nav_team: { az: 'Ustalar', ru: 'Мастера' },
    nav_works: { az: 'İşlərimiz', ru: 'Работы' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    book_now: { az: 'Növbə tut', ru: 'Записаться' },
    hero_l1: { az: 'Kişi', ru: 'Мужской' },
    hero_l2: { az: 'üslubu', ru: 'стиль' },
    hero_l3: { az: 'burada başlayır', ru: 'начинается здесь' },
    hero_text: { az: 'Klassik və müasir saç kəsimləri, saqqal dizaynı, isti dəsmalla ülgüc. Növbəsiz — onlayn yazılın.', ru: 'Классические и современные стрижки, оформление бороды, бритьё опасной бритвой с горячим полотенцем. Без очереди — запишитесь онлайн.' },
    hero_badge: { az: 'Sumqayıtda №1 barber', ru: 'Барбершоп №1 в Сумгайыте' },
    m1: { az: 'il təcrübə', ru: 'лет опыта' },
    m2: { az: 'müştəri', ru: 'клиентов' },
    m3: { az: 'Google reytinq', ru: 'рейтинг Google' },
    svc_kicker: { az: 'Qiymət siyahısı', ru: 'Прайс-лист' },
    svc_title: { az: 'Xidmətlər', ru: 'Услуги' },
    min: { az: 'dəq', ru: 'мин' },
    pick: { az: 'Seç', ru: 'Выбрать' },
    team_kicker: { az: 'Komanda', ru: 'Команда' },
    team_title: { az: 'Ustalarımız', ru: 'Наши мастера' },
    exp: { az: 'il təcrübə', ru: 'лет опыта' },
    with_master: { az: 'Bu ustaya yazıl', ru: 'Записаться к мастеру' },
    works_kicker: { az: 'Portfolio', ru: 'Портфолио' },
    works_title: { az: 'Son işlərimiz', ru: 'Наши работы' },
    insta_more: { az: 'Daha çox Instagram-da', ru: 'Больше в Instagram' },
    book_kicker: { az: 'Onlayn yazılış', ru: 'Онлайн-запись' },
    book_title: { az: 'Növbəni 30 saniyəyə tut', ru: 'Запишитесь за 30 секунд' },
    book_text: { az: 'Xidməti, ustanı və saatı seçin. Sorğu WhatsApp-a gedəcək, usta təsdiq edəcək.', ru: 'Выберите услугу, мастера и время. Заявка уйдёт в WhatsApp, мастер подтвердит.' },
    f_service: { az: 'Xidmət', ru: 'Услуга' },
    f_master: { az: 'Usta', ru: 'Мастер' },
    any_master: { az: 'Fərqi yoxdur', ru: 'Любой мастер' },
    f_date: { az: 'Tarix', ru: 'Дата' },
    f_time: { az: 'Saat', ru: 'Время' },
    f_name: { az: 'Adınız', ru: 'Ваше имя' },
    f_phone: { az: 'Telefon', ru: 'Телефон' },
    f_send: { az: 'WhatsApp ilə təsdiqlə', ru: 'Подтвердить в WhatsApp' },
    book_msg: { az: 'Salam! Növbə tutmaq istəyirəm:', ru: 'Здравствуйте! Хочу записаться:' },
    contact_title: { az: 'Bizi tapın', ru: 'Как нас найти' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  services: [
    { id: 'cut', price: 10, min: 40, name: { az: 'Saç kəsimi', ru: 'Стрижка' }, desc: { az: 'Yuma, kəsim, üslub', ru: 'Мытьё, стрижка, укладка' } },
    { id: 'fade', price: 12, min: 45, name: { az: 'Fade / Skin fade', ru: 'Фейд / Скин-фейд' }, desc: { az: 'Keçidli müasir kəsim', ru: 'Современная стрижка с переходом' } },
    { id: 'beard', price: 6, min: 20, name: { az: 'Saqqal dizaynı', ru: 'Оформление бороды' }, desc: { az: 'Forma, kontur, yağ', ru: 'Форма, контур, масло' } },
    { id: 'combo', price: 15, min: 60, name: { az: 'Saç + saqqal', ru: 'Стрижка + борода' }, desc: { az: 'Ən populyar kombo', ru: 'Самое популярное комбо' }, hot: true },
    { id: 'shave', price: 8, min: 30, name: { az: 'Ülgüclə qırxma', ru: 'Бритьё опасной бритвой' }, desc: { az: 'İsti dəsmal ilə', ru: 'С горячим полотенцем' } },
    { id: 'kids', price: 7, min: 30, name: { az: 'Uşaq saç kəsimi', ru: 'Детская стрижка' }, desc: { az: '12 yaşadək', ru: 'До 12 лет' } },
    { id: 'tone', price: 15, min: 40, name: { az: 'Tonlama / boyama', ru: 'Тонирование / окрашивание' }, desc: { az: 'Saç və ya saqqal', ru: 'Волосы или борода' } },
    { id: 'face', price: 10, min: 30, name: { az: 'Üz baxımı', ru: 'Уход за лицом' }, desc: { az: 'Buxar, qara maska, krem', ru: 'Пар, чёрная маска, крем' } },
    { id: 'king', price: 28, min: 90, name: { az: 'KRAL paketi', ru: 'Пакет КОРОЛЬ' }, desc: { az: 'Saç + saqqal + üz baxımı + çay', ru: 'Стрижка + борода + уход + чай' }, hot: true }
  ],

  team: [
    { name: 'Elvin', img: 'img/master1.jpg', years: 8, role: { az: 'Top barber · klassika', ru: 'Топ-барбер · классика' } },
    { name: 'Ramin', img: 'img/master2.jpg', years: 6, role: { az: 'Saqqal və ülgüc ustası', ru: 'Мастер бороды и бритья' } },
    { name: 'Tural', img: 'img/master3.jpg', years: 5, role: { az: 'Fade və müasir kəsimlər', ru: 'Фейды и современные стрижки' } }
  ],

  works: ['img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg', 'img/g4.jpg', 'img/g5.jpg', 'img/g6.jpg']
};

/* --- nümunə sayt ayarları (demo-yarat.js) --- */
SITE.demo = { url: 'https://sumqayit-sayt.vercel.app' };
if (SITE.reviews) SITE.reviews = [];
document.addEventListener('DOMContentLoaded', function () { document.querySelectorAll('.metrics > div:last-child').forEach(function (e) { e.remove(); }); });
