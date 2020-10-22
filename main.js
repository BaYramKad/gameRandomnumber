"use strict";

let rDom = Math.floor(100 * Math.random()) + 1;
function randomGame(rDom){
    let input = prompt("Введите число от 1 до 100");
        function dom(input){
            if (input === null){
                alert("Игра окончена"); 
            }
            if(isNaN(input) || input.trim() === ""){
                alert("Введите число!");
            }else if(input == rDom){
                alert("Поздравляем!!! Вы угадали");
                location.loader();
            } else if(input > rDom){
                alert("Загаданное число меньше");
            } else if(input < rDom){
                alert("Загаданное число больше");
            } 
            randomGame(rDom); 
        }
    dom(input);
}
randomGame(rDom);
