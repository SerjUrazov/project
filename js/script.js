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

let calc = function(a, b) {
    let sum = (a + b)
    console.log(sum);
}
calc(4, 4)