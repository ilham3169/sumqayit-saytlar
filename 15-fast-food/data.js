/* ============================================================
   SAYTIN MƏZMUNU — müştəri üçün yalnız bu faylı dəyişin.
   ============================================================ */
window.SITE = {
  id: 'doner-ustasi',
  name: 'Dönər Ustası',
  schemaType: 'FastFoodRestaurant',
  phone: '+994 55 966 77 44',
  whatsapp: '994559667744',
  instagram: 'doner.ustasi',
  address: { az: 'Sumqayıt, 8-ci mikrorayon, Nizami küçəsi 55', ru: 'Сумгайыт, 8-й микрорайон, ул. Низами 55' },
  map: { lat: 40.5828, lng: 49.6760, zoom: 17 },
  hours: ['11:00-02:00', '11:00-01:00', '11:00-01:00', '11:00-01:00', '11:00-01:00', '11:00-02:00', '11:00-02:00'],
  cart: true,
  delivery: { fee: 1.5, freeFrom: 20 },

  t: {
    hero_badge: { az: '🛵 Pulsuz çatdırılma 20 ₼-dan', ru: '🛵 Бесплатная доставка от 20 ₼' },
    hero_title: { az: 'İsti, ləzzətli,<br><span>30 dəqiqəyə</span> qapında!', ru: 'Горячо, вкусно,<br><span>за 30 минут</span> у двери!' },
    hero_text: { az: 'Kömürdə bişmiş toyuq və dana dönəri, burgerlər, qutab. Sifariş bir kliklə — WhatsApp-a.', ru: 'Донер из курицы и говядины на углях, бургеры, кутабы. Заказ в один клик — в WhatsApp.' },
    hero_cta: { az: 'Menyuya keç', ru: 'К меню' },
    i1: { az: 'dəq çatdırılma', ru: 'мин доставка' },
    i2: { az: 'reytinq', ru: 'рейтинг' },
    i3: { az: 'gecəyədək açıq', ru: 'открыто до ночи' },
    combo_t: { az: 'KOMBO: Dönər + kartof + içki', ru: 'КОМБО: Донер + картошка + напиток' },
    combo_d: { az: '9.5 ₼ əvəzinə', ru: 'вместо 9.5 ₼' },
    combo_btn: { az: 'Səbətə at', ru: 'В корзину' },
    menu_title: { az: 'Menyu', ru: 'Меню' },
    search: { az: 'Axtar…', ru: 'Поиск…' },
    add: { az: 'Əlavə et', ru: 'Добавить' },
    spicy: { az: 'acılı', ru: 'острое' },
    how_t: { az: 'Necə sifariş verim?', ru: 'Как заказать?' },
    how1: { az: 'Yeməkləri səbətə at', ru: 'Добавьте блюда в корзину' },
    how2: { az: 'Ünvanını yaz', ru: 'Укажите адрес' },
    how3: { az: 'WhatsApp-a göndər — hazırdır!', ru: 'Отправьте в WhatsApp — готово!' },
    contact_title: { az: 'Gəlib götürmək istəyirsən?', ru: 'Хотите забрать сами?' },
    hours_title: { az: 'İş saatları', ru: 'Часы работы' },
    route: { az: 'Marşrut', ru: 'Маршрут' },
    note: { az: 'Qeyd (məs: soğansız, acılı)', ru: 'Комментарий (напр.: без лука, остро)' },
    rights: { az: 'Bütün hüquqlar qorunur.', ru: 'Все права защищены.' }
  },

  categories: [
    { id: 'doner', ico: '🌯', name: { az: 'Dönər', ru: 'Донер' } },
    { id: 'burger', ico: '🍔', name: { az: 'Burger', ru: 'Бургеры' } },
    { id: 'pide', ico: '🍕', name: { az: 'Pizza və qutab', ru: 'Пицца и кутабы' } },
    { id: 'snack', ico: '🍟', name: { az: 'Qəlyanaltı', ru: 'Закуски' } },
    { id: 'drink', ico: '🥤', name: { az: 'İçkilər', ru: 'Напитки' } }
  ],

  items: [
    { id: 'combo', cat: 'none', img: 'img/f-doner.jpg', price: 7.5, name: { az: 'KOMBO: Dönər + kartof + içki', ru: 'КОМБО: Донер + картошка + напиток' } },
    { id: 'd1', cat: 'doner', img: 'img/f-doner.jpg', price: 3.5, hit: true, name: { az: 'Toyuq dönər (lavaş)', ru: 'Донер с курицей (лаваш)' }, desc: { az: 'Toyuq, pomidor, xiyar, soğan, sous', ru: 'Курица, помидор, огурец, лук, соус' } },
    { id: 'd2', cat: 'doner', img: 'img/f-doner.jpg', price: 4.5, name: { az: 'Dana dönər (lavaş)', ru: 'Донер с говядиной (лаваш)' }, desc: { az: 'Dana əti, göyərti, ayran sousu', ru: 'Говядина, зелень, соус айран' }, spicy: true },
    { id: 'd3', cat: 'doner', img: 'img/f-plate.jpg', price: 7, name: { az: 'Dönər porsiya (boşqabda)', ru: 'Донер порция (на тарелке)' }, desc: { az: 'Düyü, kartof, salat ilə', ru: 'С рисом, картошкой и салатом' } },
    { id: 'b1', cat: 'burger', img: 'img/f-burger.jpg', price: 5.5, name: { az: 'Klassik burger', ru: 'Классический бургер' }, desc: { az: '150 qr dana kotleti, salat, pomidor', ru: '150 г говяжья котлета, салат, помидор' } },
    { id: 'b2', cat: 'burger', img: 'img/f-cheese.jpg', price: 6.5, hit: true, name: { az: 'Double çizburger', ru: 'Двойной чизбургер' }, desc: { az: '2 kotlet, çedar, karamel soğan', ru: '2 котлеты, чеддер, карамелизированный лук' } },
    { id: 'b3', cat: 'burger', img: 'img/f-hotdog.jpg', price: 3, name: { az: 'Hot-doq', ru: 'Хот-дог' }, desc: { az: 'Sosis, xiyar turşusu, xardal', ru: 'Сосиска, маринованный огурец, горчица' } },
    { id: 'p1', cat: 'pide', img: 'img/f-lahmacun.jpg', price: 3, name: { az: 'Qutab (3 əd.)', ru: 'Кутабы (3 шт.)' }, desc: { az: 'Ətli və ya göyərtili, sumaq və qatıq ilə', ru: 'С мясом или зеленью, с сумахом и катыком' } },
    { id: 'p2', cat: 'pide', img: 'img/f-pizza.jpg', price: 9, name: { az: 'Pizza Pepperoni (30 sm)', ru: 'Пицца Пепперони (30 см)' }, desc: { az: 'Mozzarella, pepperoni, pomidor sousu', ru: 'Моцарелла, пепперони, томатный соус' } },
    { id: 's1', cat: 'snack', img: 'img/f-fries.jpg', price: 2.5, name: { az: 'Kartof fri', ru: 'Картофель фри' }, desc: { az: '150 qr, ketçup ilə', ru: '150 г, с кетчупом' } },
    { id: 's2', cat: 'snack', img: 'img/f-wings.jpg', price: 6, name: { az: 'Toyuq qanadları (8 əd.)', ru: 'Куриные крылья (8 шт.)' }, desc: { az: 'BBQ və ya acılı sous', ru: 'Соус BBQ или острый' }, spicy: true },
    { id: 's3', cat: 'snack', img: 'img/f-nuggets.jpg', price: 4, name: { az: 'Naggets (9 əd.)', ru: 'Наггетсы (9 шт.)' }, desc: { az: 'Sous seçimi ilə', ru: 'С соусом на выбор' } },
    { id: 'k1', cat: 'drink', img: 'img/f-cola.jpg', price: 1.5, name: { az: 'Kola 0.5 l', ru: 'Кола 0,5 л' }, desc: { az: 'Soyuq', ru: 'Холодная' } },
    { id: 'k2', cat: 'drink', img: 'img/f-ayran.jpg', price: 1.2, name: { az: 'Ayran', ru: 'Айран' }, desc: { az: 'Təzə, ev üsulu', ru: 'Свежий, домашний' } }
  ]
};
