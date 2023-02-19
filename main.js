//создание основного блока
var body = document.querySelector("body");
var container = document.createElement("div");
container.id = "container";
container.className = "container";
body.appendChild(container);
//массив для проверки победы
var objectMassive = ["","","","","","","","",""];
//переменная для чередования Х/О
var playerScore = 0;

//цикл создания поля игры
for(i = 0; i <= 8; i++){
  addObj([i]);
};

var player1 = "Player 1 WIN !!!";
var player2 = "Player 2 WIN !!!";
//создание кнопки рестарт
var restart = document.createElement("button");
restart.className = "restart";
restart.id = "btnRestart";
restart.innerHTML = "Reset"
body.appendChild(restart);

$("#btnRestart").click(function(){
  location.reload();
});
// клик по квадрату и определение условий победы
$(".gridObj").click(function(){
player(this);

if(objectMassive[0]==="X" && objectMassive[1]==="X" && objectMassive[2]==="X"){win(player1)}
else if(objectMassive[3]==="X" && objectMassive[4]==="X" && objectMassive[5]==="X"){win(player1)}
else if(objectMassive[6]==="X" && objectMassive[7]==="X" && objectMassive[8]==="X"){win(player1)}
else if(objectMassive[0]==="X" && objectMassive[3]==="X" && objectMassive[6]==="X"){win(player1)}
else if(objectMassive[1]==="X" && objectMassive[4]==="X" && objectMassive[7]==="X"){win(player1)}
else if(objectMassive[2]==="X" && objectMassive[5]==="X" && objectMassive[8]==="X"){win(player1)}
else if(objectMassive[0]==="X" && objectMassive[4]==="X" && objectMassive[8]==="X"){win(player1)}
else if(objectMassive[2]==="X" && objectMassive[4]==="X" && objectMassive[6]==="X"){win(player1)}

if(objectMassive[0]==="O" && objectMassive[1]==="O" && objectMassive[2]==="O"){win(player2)}
else if(objectMassive[3]==="O" && objectMassive[4]==="O" && objectMassive[5]==="O"){win(player2)}
else if(objectMassive[6]==="O" && objectMassive[7]==="O" && objectMassive[8]==="O"){win(player2)}
else if(objectMassive[0]==="O" && objectMassive[3]==="O" && objectMassive[6]==="O"){win(player2)}
else if(objectMassive[1]==="O" && objectMassive[4]==="O" && objectMassive[7]==="O"){win(player2)}
else if(objectMassive[2]==="O" && objectMassive[5]==="O" && objectMassive[8]==="O"){win(player2)}
else if(objectMassive[0]==="O" && objectMassive[4]==="O" && objectMassive[8]==="O"){win(player2)}
else if(objectMassive[2]==="O" && objectMassive[4]==="O" && objectMassive[6]==="O"){win(player2)}
});

//функция Win
function win(target){
  var winPlayer = document.createElement("div");
  winPlayer.id = "win";
  winPlayer.className = "winPlayer";
  winPlayer.innerHTML = "<h1>"+target+"</h1>"
  body.appendChild(winPlayer);
};
//функция выбора  Х/О
function player(target){
  if(target.innerHTML === ""){
    if (playerScore % 2 === 0) {
        target.innerHTML = "X";
        objectMassive.splice(target.id, 1, "X");
    } else if (playerScore % 2 !== 0) {
        target.innerHTML = "O";
        objectMassive.splice(target.id, 1, "O");
    }
    playerScore++;
  }
};
//функция создания поля
function addObj(idNumber){
  var gridObj = document.createElement("div");
  gridObj.id = idNumber;
  gridObj.className = "gridObj";
  container.appendChild(gridObj);
};
