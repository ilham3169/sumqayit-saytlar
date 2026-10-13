/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'zirve-akademiya',
  name: 'Zirvə Akademiya',
  schemaType: 'EducationalOrganization',
  phone: '+994 55 966 77 44',
  whatsapp: '994559667744',
  instagram: 'zirve.akademiya',
  address: { az: 'Sumqayıt, 5-ci mikrorayon, Heydər Əliyev pr. 60, 2-ci mərtəbə', ru: 'Сумгайыт, 5-й микрорайон, пр. Гейдара Алиева 60, 2-й этаж' },
  map: { lat: 40.5862, lng: 49.6700, zoom: 17 },
  hours: ['10:00-16:00', '09:00-20:00', '09:00-20:00', '09:00-20:00', '09:00-20:00', '09:00-20:00', '09:00-18:00'],

  t: {
    nav_courses: { az: 'Kurslar', ru: 'Курсы' },
    nav_results: { az: 'Nəticələr', ru: 'Результаты' },
    nav_teachers: { az: 'Müəllimlər', ru: 'Преподаватели' },
    nav_schedule: { az: 'Cədvəl', ru: 'Расписание' },
    nav_contact: { az: 'Əlaqə', ru: 'Контакты' },
    trial: { az: 'Pulsuz sınaq dərsi', ru: 'Бесплатный пробный урок' },
    hero_pill: { az: '🎓 2026–2027 tədris ili üçün qeydiyyat davam edir', ru: '🎓 Идёт набор на 2026–2027 учебный год' },
    hero_title: { az: 'Uğura gedən yol <mark>biliklə</mark> başlayır', ru: 'Путь к успеху начинается со <mark>знаний</mark>' },
    hero_text: { az: 'Abituriyent hazırlığı, ingilis və rus dili, IELTS, proqramlaşdırma və məktəbəqədər hazırlıq. Kiçik qruplar, real nəticələr.', ru: 'Подготовка абитуриентов, английский и русский языки, IELTS, программирование и подготовка к школе. Маленькие группы, реальные результаты.' },
    hero_cta2: { az: 'Kurslara bax', ru: 'Смотреть курсы' },
    h1: { az: 'tələbə', ru: 'студентов' },
    h2: { az: 'ali məktəbə qəbul', ru: 'поступили в вузы' },
    h3: { az: 'nəfərlik qruplar', ru: 'человек в группе' },
    courses_kicker: { az: 'Kurslar', ru: 'Курсы' },
    courses_title: { az: 'Sizə uyğun proqramı seçin', ru: 'Выберите свою программу' },
    all: { az: 'Hamısı', ru: 'Все' },
    month: { az: '/ay', ru: '/мес' },
    lessons: { az: 'dərs/həftə', ru: 'урока/нед' },
    duration: { az: 'Müddət', ru: 'Длительность' },
    apply: { az: 'Yazıl', ru: 'Записаться' },
    results_kicker: { az: 'Nəticələrimiz', ru: 'Наши результаты' },
    results_title: { az: 'Tələbələrimiz fəxrimizdir', ru: 'Наши студенты — наша гордость' },
    points: { az: 'bal', ru: 'баллов' },
    teachers_kicker: { az: 'Komanda', ru: 'Команда' },
    teachers_title: { az: 'Peşəkar müəllimlər', ru: 'Профессиональные преподаватели' },
    schedule_kicker: { az: 'Dərs cədvəli', ru: 'Расписание' },
    schedule_title: { az: 'Həftəlik cədvəl', ru: 'Расписание на неделю' },
    time: { az: 'Saat', ru: 'Время' },
    form_title: { az: 'Pulsuz sınaq dərsinə yazılın', ru: 'Запишитесь на бесплатный пробный урок' },
    form_text: { az: 'Səviyyə testi + 1 sınaq dərsi tamamilə pulsuzdur. Heç bir öhdəlik yoxdur.', ru: 'Тест на уровень + 1 пробный урок — абсолютно бесплатно. Без обязательств.' },
    f_student: { az: 'Tələbənin adı', ru: 'Имя ученика' },
    f_age: { az: 'Yaşı / sinfi', ru: 'Возраст / класс' },
    f_course: { az: 'Kurs', ru: 'Курс' },
    f_parent: { az: 'Valideynin telefonu', ru: 'Телефон родителя' },
    f_time: { az: 'Rahat vaxt', ru: 'Удобное время' },
    morning: { az: 'Səhər', ru: 'Утро' }, day: { az: 'Gündüz', ru: 'День' }, evening: { az: 'Axşam', ru: 'Вечер' },
    f_send: { az: 'Qeydiyyatdan keç', ru: 'Записаться' },
    form_msg: { az: 'Salam! Pulsuz sınaq dərsinə yazılmaq istəyirəm:', ru: 'Здравствуйте! Хочу записаться на пробный урок:' },
    faq_kicker: { az: 'Suallar', ru: 'Вопросы' },
    contact_title: { az: 'Bizə gəlin', ru: 'Приходите к нам' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  groups: [
    { id: 'kids', name: { az: 'Uşaqlar', ru: 'Дети' } },
    { id: 'school', name: { az: 'Məktəblilər', ru: 'Школьники' } },
    { id: 'adult', name: { az: 'Böyüklər', ru: 'Взрослые' } }
  ],
  courses: [
    { g: 'school', img: 'img/c-exam.jpg', price: 90, lessons: 3, dur: { az: '9 ay', ru: '9 мес' }, color: '#5b5bd6',
      name: { az: 'Abituriyent hazırlığı', ru: 'Подготовка абитуриентов' }, desc: { az: 'I–IV qruplar, DİM formatında sınaqlar', ru: 'I–IV группы, пробные экзамены в формате ГЭЦ' } },
    { g: 'school', img: 'img/c-math.jpg', price: 60, lessons: 2, dur: { az: 'il boyu', ru: 'круглый год' }, color: '#e5484d',
      name: { az: 'Riyaziyyat (5–11 sinif)', ru: 'Математика (5–11 класс)' }, desc: { az: 'Məktəb proqramı və olimpiada', ru: 'Школьная программа и олимпиады' } },
    { g: 'adult', img: 'img/c-english.jpg', price: 70, lessons: 3, dur: { az: '3 ay / səviyyə', ru: '3 мес / уровень' }, color: '#0ea5a0',
      name: { az: 'İngilis dili (A1–C1)', ru: 'Английский язык (A1–C1)' }, desc: { az: 'Danışıq klubu ilə', ru: 'С разговорным клубом' } },
    { g: 'adult', img: 'img/c-ielts.jpg', price: 120, lessons: 3, dur: { az: '3 ay', ru: '3 мес' }, color: '#f59e0b',
      name: { az: 'IELTS / Duolingo', ru: 'IELTS / Duolingo' }, desc: { az: 'Hədəf: 6.5+ bal', ru: 'Цель: 6.5+ баллов' } },
    { g: 'kids', img: 'img/c-coding.jpg', price: 80, lessons: 2, dur: { az: '6 ay', ru: '6 мес' }, color: '#8b5cf6',
      name: { az: 'Uşaqlar üçün proqramlaşdırma', ru: 'Программирование для детей' }, desc: { az: 'Scratch, Python, robototexnika (8–14 yaş)', ru: 'Scratch, Python, робототехника (8–14 лет)' } },
    { g: 'kids', img: 'img/c-russian.jpg', price: 55, lessons: 2, dur: { az: 'il boyu', ru: 'круглый год' }, color: '#ec4899',
      name: { az: 'Rus dili', ru: 'Русский язык' }, desc: { az: 'Uşaq və böyüklər üçün qruplar', ru: 'Группы для детей и взрослых' } }
  ],

  results: [
    { name: 'Nigar Ə.', score: 684, uni: { az: 'ADA Universiteti', ru: 'Университет ADA' } },
    { name: 'Murad H.', score: 671, uni: { az: 'Tibb Universiteti', ru: 'Медицинский университет' } },
    { name: 'Aysel M.', score: 658, uni: { az: 'BANM', ru: 'БВШН' } },
    { name: 'Tural R.', score: 642, uni: { az: 'BDU — Hüquq', ru: 'БГУ — Право' } }
  ],

  teachers: [
    { name: 'Lalə Rzayeva', img: 'img/t1.jpg', subj: { az: 'İngilis dili, IELTS 8.0', ru: 'Английский, IELTS 8.0' } },
    { name: 'Fərid Quliyev', img: 'img/t2.jpg', subj: { az: 'Riyaziyyat, 15 il təcrübə', ru: 'Математика, 15 лет опыта' } },
    { name: 'Aynur Kərimova', img: 'img/t3.jpg', subj: { az: 'Azərbaycan dili və ədəbiyyat', ru: 'Азербайджанский язык и литература' } },
    { name: 'Orxan Babayev', img: 'img/t4.jpg', subj: { az: 'Proqramlaşdırma, Python', ru: 'Программирование, Python' } }
  ],

  // cədvəl: [saat, B.e., Ç.a., Ç., C.a., C., Ş.]
  schedule: [
    ['10:00', 'İngilis A1', '', 'İngilis A1', '', 'İngilis A1', 'Scratch'],
    ['14:00', 'Riyaziyyat 5–7', 'Rus dili', 'Riyaziyyat 5–7', 'Rus dili', '', 'Python'],
    ['16:00', 'Abituriyent I', 'IELTS', 'Abituriyent I', 'IELTS', 'Abituriyent I', 'Sınaq imtahanı'],
    ['18:00', 'Abituriyent III', 'İngilis B1', 'Abituriyent III', 'İngilis B1', 'Abituriyent III', ''],
    ['19:30', 'IELTS', 'Danışıq klubu', 'IELTS', '', 'Danışıq klubu', '']
  ],

  faq: [
    { q: { az: 'Qruplarda neçə nəfər olur?', ru: 'Сколько человек в группе?' }, a: { az: 'Maksimum 8 nəfər. Fərdi dərslər də mümkündür.', ru: 'Максимум 8 человек. Возможны и индивидуальные занятия.' } },
    { q: { az: 'Ödəniş necə aparılır?', ru: 'Как происходит оплата?' }, a: { az: 'Aylıq ödəniş. 3 ay əvvəlcədən ödəyənlərə 10% endirim.', ru: 'Помесячно. При оплате за 3 месяца — скидка 10%.' } },
    { q: { az: 'Dərsi buraxsam nə olur?', ru: 'Что если пропущу урок?' }, a: { az: 'Dərsin videoyazısı və materiallar tələbə qrupunda paylaşılır.', ru: 'Запись урока и материалы публикуются в группе студентов.' } },
    { q: { az: 'Sertifikat verilir?', ru: 'Выдаётся сертификат?' }, a: { az: 'Bəli, hər səviyyənin sonunda imtahan və sertifikat.', ru: 'Да, в конце каждого уровня — экзамен и сертификат.' } }
  ]
};
