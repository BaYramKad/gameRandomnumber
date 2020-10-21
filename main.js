const isNumber = function(n){
    return  !isNaN(parseFloat(n)) && isFinite(n);
}
let rDom;
function randomGame(){ 
    rDom = 45;
        function dom(n){
            let questuon = prompt("Введите число от 1 до 100");
            if (questuon === null){
                alert("Игра окончена"); 
            }
            if(isNaN(questuon) || questuon.trim() == ""){
                alert("Введите число!");
            }else if(questuon == rDom){
                alert("Поздравляем!!! Вы угадали")
            } else if(questuon > rDom){
                alert("Загаданное число меньше");
            } else if(questuon < rDom){
                alert("Загаданное число больше");
            }  
            dom(rDom);
            dom();
        }
    return dom();
}
randomGame();

console.dir(randomGame);