let turn = "X";
let myWin = 0;
let opponentWin = 0;
let ties_happen = 0;
let gameOverStyle = {
    backgroundColor:"rgb(238, 198, 124)",
    boxShadow:"0px 5px rgb(245, 172, 36)"

}
let gameOver = false;



const toggleTurn = ()=>{
    turn = (turn == "X")? "O" : "X";
}

// add event on start button
const start = document.getElementsByClassName("start")[0];
start.addEventListener("click", ()=>{
    const boxes = document.getElementsByClassName("textbox");
    for(let i = 0;i<boxes.length;i++)
        boxes[i].innerText = "";
    turn = "X";
    document.getElementsByClassName("turn-update")[0].children[0].innerText = "X";
})


// add event on refresh button
const refresh = document.getElementsByClassName("refresh")[0];
refresh.addEventListener("click", ()=>{
    // reset all boxes
    const boxes = document.getElementsByClassName("textbox");
    for(let i = 0;i<boxes.length;i++)
        boxes[i].innerText = "";
    // reset all values
    turn = "X";
    myWin = 0;
    opponentWin = 0;
    document.getElementsByClassName("turn-update")[0].children[0].innerText = "X";
    document.getElementsByClassName("my-update")[0].children[2].innerText = "";
    document.getElementsByClassName("ties-update")[0].children[2].innerText = "";
    document.getElementsByClassName("opponent-update")[0].children[2].innerText = "";
})


const isGameOver = (turn) =>{
    const winPosition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    const boxes = document.getElementsByClassName("box");
    for (let i = 0;i<winPosition.length;i++)
    {
        const v1 = boxes[winPosition[i][0]].getElementsByClassName("textbox")[0].innerText;
        const v2 = boxes[winPosition[i][1]].getElementsByClassName("textbox")[0].innerText;
        const v3 = boxes[winPosition[i][2]].getElementsByClassName("textbox")[0].innerText;
        if(v1 === turn && v2 === turn && v3 === turn)
        {
            return true;
        }
    }
    return false;

}

const isTies = ()=>{
    const boxes = document.getElementsByClassName("box");
    for(let i=0;i<boxes.length;i++)
    {
        let val = boxes[i].getElementsByClassName("textbox")[0].innerText;
        if(val === "X" || val === "O")
        {
            console.log("true");
            return false;
        }
            
    }
    return true;
}



// add values in boxes
const boxes = document.getElementsByClassName("box");
// preform same operation on all box
for(let i = 0;i<boxes.length;i++)
{
    // check whether game is over or not
        // add clickable event on them
        boxes[i].addEventListener("click", ()=>{
            if(boxes[i].getElementsByClassName("textbox")[0].innerText === ""){
                boxes[i].getElementsByClassName("textbox")[0].innerText = turn;
                if(gameOver = isGameOver(turn)){
                    document.getElementsByClassName("turn-update")[0].children[0].innerText = "Game over";
                    document.getElementsByClassName("turn-update")[0].children[1].innerText = "";
                    document.getElementsByClassName("turn-update")[0].children[2].innerText = "";
                    if(turn === "X"){
                        myWin += 1;
                        document.getElementsByClassName("my-update")[0].children[2].innerText = myWin;
                    }
                    else{
                        opponentWin += 1;
                        document.getElementsByClassName("opponent-update")[0].children[2].innerText = opponentWin;
                    }
                }
                // is not working
                else if(isTies()){
                    ties_happen += 1;
                    document.getElementsByClassName("ties-update")[0].children[2].innerText = ties_happen;
                }
                else
                {
                    toggleTurn();
                    document.getElementsByClassName("turn-update")[0].children[0].innerText = turn;
                }
            }

        });
}



