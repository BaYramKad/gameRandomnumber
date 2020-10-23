"use strict";
function randomGame(){  
    let rDom = Math.floor(100 * Math.random()) + 1;
    function name(){
        function dom(){  
            let input = prompt("Введите число от 1 до 100");
            if (input === null){
                alert("Игра окончена"); 
            }
            if(isNaN(input) || input.trim() === ""){
                alert("Введите число!");
                dom();
            }else if(input == rDom){
                alert("Поздравляем!!! Вы угадали");
                location.loader();
            } else if(input > rDom){
                alert("Загаданное число меньше");
                dom();
            } else if(input < rDom){
                alert("Загаданное число больше");
            }      
            dom();
        }
        dom();
    }
    name();
}
randomGame();
