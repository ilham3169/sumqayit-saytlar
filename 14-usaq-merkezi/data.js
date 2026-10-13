/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'balaca-dahi',
  name: 'Balaca Dahi',
  schemaType: 'ChildCare',
  phone: '+994 50 000 00 00',
  whatsapp: '994500000000',
  instagram: 'balaca.dahi.sumqayit',
  address: { az: 'Sumqayıt, 10-cu mikrorayon, Səməd Vurğun küçəsi 9', ru: 'Сумгайыт, 10-й микрорайон, ул. Самеда Вургуна 9' },
  map: { lat: 40.5870, lng: 49.6755, zoom: 17 },
  hours: [null, '08:00-19:00', '08:00-19:00', '08:00-19:00', '08:00-19:00', '08:00-19:00', '10:00-16:00'],

  t: {
    nav_programs: { az: 'Proqramlar', ru: 'Программы' },
    nav_day: { az: 'Bir gün', ru: 'Наш день' },
    nav_prices: { az: 'Qiymətlər', ru: 'Цены' },
    nav_party: { az: 'Ad günü', ru: 'День рождения' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    visit: { az: 'Tanışlıq ziyarəti', ru: 'Пробный визит' },
    hero_title: { az: 'Uşağınız burada<br><span class="c1">oynayır</span>, <span class="c2">öyrənir</span>, <span class="c3">böyüyür</span>', ru: 'Здесь ваш ребёнок<br><span class="c1">играет</span>, <span class="c2">учится</span>, <span class="c3">растёт</span>' },
    hero_text: { az: '2–7 yaş uşaqlar üçün inkişaf mərkəzi: məktəbəqədər hazırlıq, ingilis dili, rəsm, rəqs, şahmat və loqoped. Kiçik qruplar, təhlükəsiz mühit.', ru: 'Центр развития для детей 2–7 лет: подготовка к школе, английский, рисование, танцы, шахматы и логопед. Маленькие группы, безопасная среда.' },
    hero_cta2: { az: 'Proqramlar', ru: 'Программы' },
    s1: { az: 'Valideynlər üçün canlı kamera', ru: 'Онлайн-камеры для родителей' },
    s2: { az: 'Tibb bacısı və sağlam qida', ru: 'Медсестра и здоровое питание' },
    s3: { az: 'Qrupda 8 uşaq', ru: '8 детей в группе' },
    prog_kicker: { az: 'Proqramlar', ru: 'Программы' },
    prog_title: { az: 'Hər yaşa uyğun məşğələlər', ru: 'Занятия для каждого возраста' },
    age: { az: 'yaş', ru: 'лет' },
    day_kicker: { az: 'Bizdə bir gün', ru: 'Один день у нас' },
    day_title: { az: 'Gündəlik rejim', ru: 'Режим дня' },
    prices_kicker: { az: 'Qiymətlər', ru: 'Цены' },
    prices_title: { az: 'Sizə uyğun paketi seçin', ru: 'Выберите подходящий пакет' },
    month: { az: '/ay', ru: '/мес' },
    choose: { az: 'Seç', ru: 'Выбрать' },
    plan_msg: { az: 'Salam! Bu paket barədə məlumat istəyirəm: ', ru: 'Здравствуйте! Хочу узнать о пакете: ' },
    party_title: { az: 'Unudulmaz ad günü! 🎉', ru: 'Незабываемый день рождения! 🎉' },
    party_text: { az: 'Animator, şar dekoru, tort, oyunlar və foto — 15 uşağa qədər. Siz sadəcə gəlin, qalanını biz edirik.', ru: 'Аниматор, шары, торт, игры и фото — до 15 детей. Вы просто приходите, остальное — наша забота.' },
    party_price: { az: '2 saat — 180 ₼-dan', ru: '2 часа — от 180 ₼' },
    party_btn: { az: 'Ad günü sifariş et', ru: 'Заказать праздник' },
    party_msg: { az: 'Salam! Ad günü təşkil etmək istəyirəm. Tarix: ..., uşaq sayı: ...', ru: 'Здравствуйте! Хочу организовать день рождения. Дата: ..., кол-во детей: ...' },
    form_title: { az: 'Tanışlıq ziyarətinə yazılın', ru: 'Запишитесь на знакомство' },
    form_text: { az: 'Uşağınızla gəlin, mərkəzi gəzin və 1 pulsuz məşğələdə iştirak edin.', ru: 'Приходите с ребёнком, посмотрите центр и посетите 1 бесплатное занятие.' },
    f_child: { az: 'Uşağın adı', ru: 'Имя ребёнка' },
    f_age: { az: 'Yaşı', ru: 'Возраст' },
    f_prog: { az: 'Maraqlandığınız proqram', ru: 'Интересующая программа' },
    f_parent: { az: 'Valideynin adı', ru: 'Имя родителя' },
    f_phone: { az: 'Telefon', ru: 'Телефон' },
    f_send: { az: 'Yazıl', ru: 'Записаться' },
    form_msg: { az: 'Salam! Tanışlıq ziyarətinə yazılmaq istəyirəm:', ru: 'Здравствуйте! Хочу записаться на знакомство:' },
    contact_title: { az: 'Bizi ziyarət edin', ru: 'Приходите к нам' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  programs: [
    { img: 'img/p-school.jpg', ages: '5–7', color: '#ff7a59', name: { az: 'Məktəbə hazırlıq', ru: 'Подготовка к школе' }, desc: { az: 'Oxu, yazı, riyaziyyat, məntiq', ru: 'Чтение, письмо, математика, логика' } },
    { img: 'img/p-english.jpg', ages: '3–7', color: '#3fa7f5', name: { az: 'Uşaqlar üçün ingilis dili', ru: 'Английский для детей' }, desc: { az: 'Oyun və mahnılarla', ru: 'Через игры и песни' } },
    { img: 'img/p-art.jpg', ages: '2–7', color: '#ffc531', name: { az: 'Rəsm və yaradıcılıq', ru: 'Рисование и творчество' }, desc: { az: 'Rəsm, plastilin, aplikasiya', ru: 'Рисунок, лепка, аппликация' } },
    { img: 'img/p-dance.jpg', ages: '3–7', color: '#e85dad', name: { az: 'Rəqs və ritmika', ru: 'Танцы и ритмика' }, desc: { az: 'Milli və müasir rəqslər', ru: 'Национальные и современные танцы' } },
    { img: 'img/p-chess.jpg', ages: '5–7', color: '#7c5cff', name: { az: 'Şahmat', ru: 'Шахматы' }, desc: { az: 'Diqqət və strateji təfəkkür', ru: 'Внимание и стратегическое мышление' } },
    { img: 'img/p-lego.jpg', ages: '5–7', color: '#29c18c', name: { az: 'LEGO və robototexnika', ru: 'LEGO и робототехника' }, desc: { az: 'Konstruksiya və ilk kodlaşdırma', ru: 'Конструирование и первое программирование' } },
    { img: 'img/p-speech.jpg', ages: '3–7', color: '#ff9f43', name: { az: 'Loqoped', ru: 'Логопед' }, desc: { az: 'Fərdi nitq məşğələləri', ru: 'Индивидуальные занятия по речи' } }
  ],

  day: [
    ['08:00', '☀️', { az: 'Qəbul və səhər oyunları', ru: 'Приём и утренние игры' }],
    ['09:00', '🥣', { az: 'Səhər yeməyi', ru: 'Завтрак' }],
    ['09:30', '📚', { az: 'Təhsil məşğələləri', ru: 'Развивающие занятия' }],
    ['11:30', '🌳', { az: 'Gəzinti / idman', ru: 'Прогулка / спорт' }],
    ['12:30', '🍲', { az: 'Nahar', ru: 'Обед' }],
    ['13:30', '😴', { az: 'Gündüz yuxusu', ru: 'Дневной сон' }],
    ['15:30', '🎨', { az: 'Rəsm, rəqs, şahmat', ru: 'Рисование, танцы, шахматы' }],
    ['17:00', '🍎', { az: 'Günorta qəlyanaltısı', ru: 'Полдник' }],
    ['17:30', '🧸', { az: 'Sərbəst oyun və evə gediş', ru: 'Свободная игра и уход домой' }]
  ],

  plans: [
    { name: { az: 'Yarım gün', ru: 'Полдня' }, price: 220, list: { az: ['08:00–13:00', 'Səhər yeməyi', 'Təhsil məşğələləri', 'Gəzinti'], ru: ['08:00–13:00', 'Завтрак', 'Развивающие занятия', 'Прогулка'] } },
    { name: { az: 'Tam gün', ru: 'Полный день' }, price: 350, hot: true, list: { az: ['08:00–19:00', '4 dəfə qidalanma', 'Bütün məşğələlər', 'Gündüz yuxusu', 'Canlı kamera'], ru: ['08:00–19:00', '4-разовое питание', 'Все занятия', 'Дневной сон', 'Онлайн-камера'] } },
    { name: { az: 'Kurslar', ru: 'Кружки' }, price: 60, list: { az: ['Həftədə 2 dərs', 'İstənilən proqram', '45 dəqiqə', 'Mərkəzə gəlməyənlər üçün'], ru: ['2 занятия в неделю', 'Любая программа', '45 минут', 'Для приходящих детей'] } }
  ]
};
