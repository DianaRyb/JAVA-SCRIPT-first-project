"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' ||  numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять В КОДЕ СДЕЛАНО ПОСЛЕ ВОПРОСОВ. 

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', ''),
              b = prompt ('На сколько оцените его?', '');
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies [a] = b;
            console.log ("done");
        } else {
            console.log ("error");
            i--; 
            // возвращение на 1 цикл назад, если условия сверху не выполнились
        }
    }
}

rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel ();

// Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB);
    }
}

showMyDB ();

// // Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// // "Ваш любимый жанр под номером ${номер по порядку}". Когда работаем с пользователем, то отсчёт начинаем с 1.
// Каждый ответ записывается в массив данных // genres

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);   
        // в массиве нумерация с 0
    }
}

console.log (writeYourGenres);







