// 'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},            //<--ОБЪЕКТ
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        }   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        }   else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }   else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden)
        console.log(personalMovieDB);
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){     //==trueё
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Вы ввели неверные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item} `);
        });
    }
};


// --ЦИКЛЫ--

// let num = (50);

// for (i = 50; i <= 70; i++){
//     console.log(num);
//     num++;
// }

// --ФУНКЦИИ--

// function calcFunction(a, b) {
//     return (a + b);
// }
// console.log(calc(5, 6));

// const calcFunction2 = function(a, b) {
//     let num = (a + b);
//     return num;
// }
// const calcCall = calcFunction2(6, 5);
// console.log(calcCall);

// const calcFunction3 = (a, b) => {
//     let num = (a + b); 
//     return num;
// }
// console.log(calcFunction3(3, 9));

// --МЕТОДЫ И СВОЙСТВА--

// const logg = 'Hello, you look cool'
// console.log(logg.slice(7, 20).toUpperCase());
// console.log(logg.substr(7, 13));

// const num = 12.5;
// console.log(Math.round(num));

// const testNum = "12.6"
// console.log(parseInt(testNum));
// console.log(parseFloat(testNum));

// --CALLBACK ФУНКЦИИ--

// function learnJS(lang, callback) {
//     console.log(`Я учу ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Я прошел урок!');
// }
// learnJS('JavaScript', done);

// // --CALLBACK С АНОНИМНОЙ ФУНКЦИЕЙ--

// function first(y) {
//     console.log(1);
//     y();
// }
// function calc(a, b) {
//     console.log(a + b);
// }

// first(function() {
//     calc(2, 5);
// });

// --ОБЪЕКТЫ И ДЕСТРУКТУРИЗАЦИЯ--

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() { //--Метод в объекте (функция)
//         console.log('Test');
//     }
// };

// const {border, bg} = options.colors; //--Деструктуризация объектов
// console.log(border);

// options.makeTest(); //--Вызов Метода (функции в объекте)

// console.log(Object.keys(options).length); //--Метод Object.keys превращает свойства объекта в массив.

// delete options.name; //--Удаление свойства в объекте
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`У свойства ${i} значение: ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`У свойства ${key} значение: ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

//--МАССИВЫ И ПСЕВДОМАССИВЫ(МЕТОДЫ)--

// const arr = [0, 1, 22, 73, 6, 8];

// arr.sort(compareNum);    //--Шаблон сортировки цифр
// console.log(arr);
// function compareNum(a, b){
//     return a - b;
// }

// //console.log(arr.length);   //--последний индекс +1

// arr.forEach(function(item, i, arr) {    //--Метод forEach
//     console.log(`№${i + 1}: ${item} внутри массива ${arr}`);
// });

// arr.pop()
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// };

// for (let value of arr) {    //--цикл for of предназначен для перебора массива
//     console.log(value);
// };

// const str = prompt("", "");
// const products = str.split(", ");    //--Задает как нужно указывать разделение массивов
// products.sort();    //--Сортировка по алфавиту & цифрам
// console.log(products.join('; '));    //--Задает какой будет разделительный символ

//--ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ, SPREAD ОПЕРАТОР--

// function copy(mainObj) {    //--Функция Копирования Объектов
//     let objects = {};
//     let key;
//     for(key in mainObj) {
//         objects[key] = mainObj[key];
//     }
//     return objects;
// }


// const info = {
//     name: 'Serj',
//     age: 25,
//     skills: {
//         prokrastination: '10/10',
//         lazy: '10/10'
//     }
// };
// const dopInfo = {
//     games: 'gta sa',
// };
// const newInfo = Object.assign({}, info);    //--Метод Объединения Объектов
// newInfo.name = 'Serjio';
// console.log(info);
// console.log(newInfo);


// const oldArray = ['a', 'b', 'c'];   //--Метод Копии Объектов
// const newArray = oldArray.slice();
// newArray[1] = 'abc';
// console.log(oldArray);
// console.log(newArray);


// const video = ['youtube', 'vimeo', 'rutube'],   //-- ...-Оператор Разворота
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);

// function log(a, b, c){  //--Разворот в функции
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const news = ['You', 'are', 'rodip'];
// log(...news);


// const masNums = ['8', '8', '14'];    //--Копия массива с помощью разворота
// const linkNums = [...masNums];
// console.log(linkNums);

// const objNums = {
//     one: '8', 
//     two: '14',
//     thre: '8'
// };
// const newObj = {...objNums};    //--Копия объекта с помощью разворота
// newObj.one = '0';
// console.log(newObj);
// console.log(objNums);