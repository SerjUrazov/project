// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
    
    
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// }   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// }   else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// }   else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

// --ЦИКЛЫ--

// let num = (50);

// for (i = 0; i <= 20; i++){
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