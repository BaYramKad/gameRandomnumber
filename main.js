
function randomGame(){
    let input = prompt("Введите число от 1 до 100");
    let rDom = 45;
        function dom(input){
            if (input === null){
                alert("Игра окончена"); 
            }
            
            console.dir(randomGame);
            if(isNaN(input) || input.trim() === ""){
                alert("Введите число!");
            }else if(input == rDom){
                alert("Поздравляем!!! Вы угадали")
            } else if(input > rDom){
                alert("Загаданное число меньше");
            } else if(input < rDom){
                alert("Загаданное число больше");
            } 
            return randomGame(); 
        }
    return dom(input);
}
randomGame();
