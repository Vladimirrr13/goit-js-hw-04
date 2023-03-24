/* --------------------------------- TASK 1 --------------------------------- */

/*  Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

Объявлена функция makePizza
Объявлена переменная result
Значение переменной result это строка "Your pizza is being prepared, please wait."
Значение переменной result получено с помощью вызова функции
Объявлена переменная pointer
Значение переменной pointer это ссылка на функцию makePizza  */

/* 

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
// Change code below this line

const result = makePizza();
const pointer = makePizza;

*/



/* --------------------------------- TASK 2 --------------------------------- */

/*  Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.

Объявлена функция deliverPizza
Объявлена функция makePizza
Объявлена функция makeMessage
Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
Вызов makeMessage("Royal Grand", makePizza) возвращает строку "Pizza Royal Grand is being prepared, please wait..."
Вызов makeMessage("Ultracheese", deliverPizza) возвращает строку "Delivering Ultracheese pizza."  */

/*  function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}


function makeMessage(pizzaName, callback) {
return callback(pizzaName);
}


console.log(makeMessage("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));   */



/* --------------------------------- TASK 3 --------------------------------- */

/*
Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".

Объявлена функция makePizza
Функция makePizza принимает два параметра
Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром pizzaName
*/

/*
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});
*/




/* --------------------------------- TASK 4 --------------------------------- */

/*
Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

Метод order объявляет три параметра
Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Smoked."
Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza Four meats."
Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Big Mike in the assortment."
Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a name Vienna in the assortment."
*/


/* const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);
  */




/* --------------------------------- TASK 5 --------------------------------- */

/* Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Объявлена функция calculateTotalPrice(orderedItems)
Для перебора массива orderedItems использован метод forEach
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* function calculateTotalPrice(orderedItems) {
let totalPrice = 0;
orderedItems.forEach(function(item) {
totalPrice += item;
});
return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291])); 
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));   */




/* --------------------------------- TASK 6 --------------------------------- */

/* 

Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Объявлена функция filterArray(numbers, value)
Для перебора массива numbers использован метод forEach
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* 

function filterArray(numbers, value) {
const filteredNumbers = [];

// Change code below this line
numbers.forEach((number) => {
if (number > value) {
filteredNumbers.push(number);
}
});
// Change code above this line

return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

*/




/* --------------------------------- TASK 7 --------------------------------- */

/* 

Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

Объявлена функция getCommonElements(firstArray, secondArray)
Для перебора параметра (массива) использован метод forEach
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* 

function getCommonElements(firstArray, secondArray) {
const commonElements = [];

// Change code below this line
firstArray.forEach((element) => {
if (secondArray.includes(element)) {
commonElements.push(element);
}
});
// Change code above this line

return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4])); 
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); 
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); 
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); 
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); 
// Вызов функции со случайными, но валидными аргументами
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 6, 8, 10];
console.log(getCommonElements(arr1, arr2)); 

*/





/* --------------------------------- TASK 8 --------------------------------- */

/* 

Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
Вызов calculateTotalPrice(5, 100) возвращает 500
Вызов calculateTotalPrice(8, 60) возвращает 480
Вызов calculateTotalPrice(3, 400) возвращает 1200
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


*/


/* 

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice(5, 100)); 
console.log(calculateTotalPrice(8, 60)); 
console.log(calculateTotalPrice(3, 400));

*/





/* --------------------------------- TASK 9 --------------------------------- */

/* 

Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
В функции использован неявный возврат
Вызов calculateTotalPrice(5, 100) возвращает 500
Вызов calculateTotalPrice(8, 60) возвращает 480
Вызов calculateTotalPrice(3, 400) возвращает 1200
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* 

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));

*/




/* --------------------------------- TASK 10 --------------------------------- */

/* 

Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

Объявлена переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
Для перебора массива orderedItems использован метод forEach
Коллбек для метода forEach это стрелочная функция
Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* 

const calculateTotalPrice = orderedItems => {
let totalPrice = 0;

orderedItems.forEach(item => {
totalPrice += item;
});

return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

*/





/* --------------------------------- TASK 11 --------------------------------- */

/* 

Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

Объявлена переменная filterArray
Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value)
Для перебора массива numbers использован метод forEach
Коллбек для метода forEach это стрелочная функция
Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* 

const filterArray = (numbers, value) => {
const filteredNumbers = [];

numbers.forEach(number => {
if (number > value) {
filteredNumbers.push(number);
}
});

return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));

*/





/* --------------------------------- TASK 12 --------------------------------- */

/* 

Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

-Объявлена переменная getCommonElements.

Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray)
Для перебора массива firstArray использован метод forEach
Коллбек для метода forEach это стрелочная функция
Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* 

const getCommonElements = (firstArray, secondArray) => {
const commonElements = [];

firstArray.forEach(element => {
if (secondArray.includes(element)) {
commonElements.push(element);
}
});

return commonElements;
};
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

*/





/* --------------------------------- TASK 13 --------------------------------- */

/* 

Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

Объявлена функция changeEven(numbers, value)
Функция changeEven не изменяет значение параметра numbers
Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]
Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16]
Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142]
Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154]
Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

*/


/* 

function changeEven(numbers, value) {
const newNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
if (numbers[i] % 2 === 0) {
newNumbers.push(numbers[i] + value);
} else {
newNumbers.push(numbers[i]);
}
}

return newNumbers;
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); 
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); 
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

*/





/* --------------------------------- TASK 14 --------------------------------- */

/* 

Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

Объявлена переменная planets
Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
Объявлена переменная planetsLengths
Значение переменной planetsLengths это массив [5, 4, 5, 7]
Для перебора массива планет использован метод map()


*/


/* 

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(function(planet) {
return planet.length;
});

console.log(planetsLengths);

*/





/* --------------------------------- TASK 15 --------------------------------- */

/* 

Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

Объявлена переменная books
Значение переменной books это массив
Объявлена переменная titles
Значение переменной titles это массив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
Для перебора массива books используется метод map() как чистая функция

*/


/* 

const books = [
{
title: "The Last Kingdom",
author: "Bernard Cornwell",
rating: 8.38,
},
{
title: "Beside Still Waters",
author: "Robert Sheckley",
rating: 8.51,
},
{
title: "The Dream of a Ridiculous Man",
author: "Fyodor Dostoevsky",
rating: 7.75,
},
{ title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
{ title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);

console.log(titles);

*/





/* --------------------------------- TASK 16 --------------------------------- */

/* 

Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

Объявлена переменная books
Значение переменной books это массив объектов
Объявлена переменная genres
Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
Для перебора массива books используется метод flatMap()

*/


/* 

const books = [
{
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["adventure", "history"],
},
{
title: "Beside Still Waters",
author: "Robert Sheckley",
genres: ["fiction"],
},
{
title: "Redder Than Blood",
author: "Tanith Lee",
genres: ["horror", "mysticism"],
},
];

const genres = books.flatMap(book => book.genres);

console.log(genres);

*/





/* --------------------------------- TASK 17 --------------------------------- */

/* 



*/


/* 



*/





/* --------------------------------- TASK 18 --------------------------------- */

/* 



*/


/* 



*/





/* --------------------------------- TASK 6 --------------------------------- */

/* 



*/


/* 



*/





/* --------------------------------- TASK 19 --------------------------------- */

/* 



*/


/* 



*/





/* --------------------------------- TASK 20 --------------------------------- */

/* 



*/


/* 



*/




/* --------------------------------- TASK 21 --------------------------------- */

/* 



*/


/* 



*/




/* --------------------------------- TASK 22 --------------------------------- */

/* 



*/


/* 



*/




/* --------------------------------- TASK 23 --------------------------------- */

/* 



*/


/* 



*/



/* --------------------------------- TASK 24 --------------------------------- */

/* 



*/


/* 



*/





/* --------------------------------- TASK 25 --------------------------------- */

/* 



*/


/* 



*/





/* --------------------------------- TASK 26 --------------------------------- */

/* 



*/


/* 



*/






/* --------------------------------- TASK 27 --------------------------------- */

/* 



*/


/* 



*/





/* --------------------------------- TASK 28 --------------------------------- */

/* 



*/


/* 



*/
