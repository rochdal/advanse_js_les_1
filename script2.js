// Создаем новый объект Map для хранения специализаций поваров
const cookSpec = new Map();

// Добавляем пары "повар - специализация" в объект cookSpec
cookSpec.set('Виктор - специализация', 'Пицца'); // Виктор специализируется на пицце
cookSpec.set('Ольга - специализация', 'Суши');   // Ольга специализируется на суши
cookSpec.set('Дмитрий - специализация', 'Десерты'); // Дмитрий специализируется на десертах

// Выводим объект cookSpec в консоль для проверки
console.log(cookSpec);

// Создаем новый объект Map для хранения блюд и их поваров
const cookFood = new Map();

// Добавляем пары "блюдо - повар" в объект cookFood
cookFood.set('Пицца "Маргарита" - повар', 'Виктор'); // Пицца "Маргарита" готовится Виктором
cookFood.set('Пицца "Пепперони" - повар', 'Виктор'); // Пицца "Пепперони" готовится Виктором
cookFood.set('Суши "Филадельфия" - повар', 'Ольга'); // Суши "Филадельфия" готовятся Ольгой
cookFood.set('Суши "Калифорния" - повар', 'Ольга'); // Суши "Калифорния" готовятся Ольгой
cookFood.set('Тирамису - повар', 'Дмитрий'); // Тирамису готовится Дмитрием
cookFood.set('Чизкейк - повар', 'Дмитрий'); // Чизкейк готовится Дмитрием

// Выводим объект cookFood в консоль для проверки
console.log(cookFood);

// Создаем новый объект Map для хранения заказов клиентов
const clientOrder = new Map();

// Добавляем пары "клиент - заказ" в объект clientOrder
clientOrder.set([Symbol('Алексей')], 'Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.'); // Заказ Алексея
clientOrder.set([Symbol('Мария')], 'Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".'); // Заказ Марии
clientOrder.set([Symbol('Ирина')], 'Клиент Ирина заказала: Чизкейк.'); // Заказ Ирины

// Выводим объект clientOrder в консоль для проверки
console.log(clientOrder);