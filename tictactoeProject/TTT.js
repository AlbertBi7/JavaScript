const grids=document.querySelectorAll(".grids")
const restart=document.querySelector("#restart")
const statusTxt=document.querySelector("#status")


const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
  grids.forEach((grid) => grid.addEventListener("click", cellClicked));
  restart.addEventListener("click", restart);
  statusTxt.innerHTML = `${currentPlayer}'s turn`;
  running = true;
}


function cellClicked(){
  const currentIndex=this.id
  if(options[currentIndex] != "" || !running){
    return;
  }
  setCell(this,currentIndex)
  checkWinner()
}

function setPlayer(){
  if(currentPlayer=currentPlayer==="X"?"O":"X")
  statusTxt.innerHTML= `${currentPlayer}'s Turn`
}


function checkWinner(){
  let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        
        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusTxt.innerHTML = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusTxt.innerHTML = `Draw!`;
        running = false;
    }
    else{
        setPlayer();
    }
}

function setCell(cell ,currentIndex){
  options[currentIndex]=currentPlayer
  if(currentPlayer==="X"?document.getElementById(cell.id).style.color="#FDBE34":document.getElementById(cell.id).style.color="white")
  console.log(document.getElementById(cell.id).innerText.fontcolor="white")
  cell.innerHTML=currentPlayer
 
}

restart.addEventListener("click",function restart(){
  window.location.reload();
})
