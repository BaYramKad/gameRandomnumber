let rDom;
function randomGame(){ 
    rDom = 45;
        function dom(n){
            let input = prompt("Введите число от 1 до 100");
            if (input === null){
                alert("Игра окончена"); 
            }
            if(isNaN(input) || input.trim() == ""){
                alert("Введите число!");
            }else if(input == rDom){
                alert("Поздравляем!!! Вы угадали")
            } else if(input > rDom){
                alert("Загаданное число меньше");
            } else if(input < rDom){
                alert("Загаданное число больше");
            }  
            dom(rDom);
            dom();
        }
    return dom();
}
randomGame();

console.dir(randomGame);