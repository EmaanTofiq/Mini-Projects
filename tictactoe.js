let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('.reset-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('.msg');
let newBtn=document.querySelector('.new-btn');

let turnO=true;

let winningPtrn=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.remove('visible');
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO==true){

            box.innerText='O';
            box.style.color='#264653';
            turnO=false;
        }
        else{
            box.innerText='X';
            box.style.color='#e9c46a';
            turnO=true;
        }
        box.disabled = true;
        checkWinner();

    });
    

}); 
const disableBoxes=()=>{
    for(let _box of boxes){
        _box.disabled=true;

    }
}
const enableBoxes=()=>{
    for(let _box of boxes){
        _box.disabled=false;
        _box.innerText='';

    }
}
const showWinner=(_Winner)=>{
    msg.innerText=`Congratulations,Winner is ${_Winner}`;
    msgContainer.classList.add('visible');
    disableBoxes();
}

const checkWinner=()=>{
    for(let ptrns of winningPtrn){
        let posVal1 =boxes[ptrns[0]].innerText;
        let posVal2 =boxes[ptrns[1]].innerText;
        let posVal3 =boxes[ptrns[2]].innerText;

    if(posVal1!='' && posVal2!='' && posVal3!=''){
        if(posVal1==posVal2 && posVal2==posVal3){
            showWinner(posVal1);
        }
    }
    }
}
resetbtn.addEventListener('click',resetGame);
newBtn.addEventListener('click',resetGame);



 