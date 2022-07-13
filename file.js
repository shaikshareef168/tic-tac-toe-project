// let element="X";
// let text=document.querySelector("#b");
// let theboxes=document.getElementsByClassName("boxes");
// let myarray=Array.from(theboxes);
// console.log(myarray);
// let newword=" "
// function winningcondition(){
//      let winningchances=[
//          [0,1,2],
//          [0,3,6],
//          [0,4,8],
//          [1,4,7],
//          [2,5,8],
//          [2,4,6],
//          [6,7,8],
//          [3,4,5]
//      ];
    
   
//     for(let ele of winningchances){
//          if((myarray[ele[0]].textContent===myarray[ele[1]].textContent) && (myarray[ele[1]].textContent===myarray[ele[2]].textContent) && (myarray[ele[0]].textContent!==" "))
//               {
//                      text.textContent=`${newword} won`;
  
         
//               }
//     } }
// for(let i of myarray){
//      i.addEventListener("click",()=>{
         
//      if(element==="X"){
//             i.textContent=element;
//             element=" ";
//             text.textContent="turn for O";
//             newword="X";
            
            

//     }else{
//             i.textContent="O";
//             element="X";
//             text.textContent="turn for X";
//             newword="O";
          
//         }
//     winningcondition();        
// })}    
let myturn="X";
let elementsarray=document.getElementsByClassName("boxes");
let arrayofobjects=Array.from(elementsarray);
let gameover=false;
let image=document.querySelector("img");

// function to choose whose turn
function chooseturn(){
    return myturn==="X" ? "O":"X";
}
// main winning condition for tic tac toe
function mainwinningcondition(){
    let winningchances=[
                  [0,1,2],
                  [0,3,6],
                  [0,4,8],
                  [1,4,7],
                  [2,5,8],
                  [2,4,6],
                  [6,7,8],
                  [3,4,5]
              ];
    winningchances.forEach(e=>{
        if((arrayofobjects[e[0]].textContent===arrayofobjects[e[1]].textContent)&&(arrayofobjects[e[1]].textContent===arrayofobjects[e[2]].textContent)&&arrayofobjects[e[0]].textContent!==""){
            if(myturn==="X"){
                myturn="O";
            }else{
                myturn="X";
            }
            
            document.querySelector("#b").textContent=`${myturn} won`; 
            gameover=true;
            
        }})}

arrayofobjects.forEach((i)=>{
    i.addEventListener("click",()=>{
        if(i.textContent===""){
            i.textContent=myturn;
            myturn=chooseturn();
            document.querySelector("#b").textContent=`turn for ${myturn}`;
            mainwinningcondition();
            if(gameover===true){
                image.style.width="50px";
                image.style.height="50px";
                alert(`the game is over ,reset now,${myturn} wins the game`)

            }
        }})}) 
let buttonobject=document.querySelector("button") ;
buttonobject.addEventListener("click",()=>{
    arrayofobjects.forEach(a=>{
        a.textContent='';
        myturn="X";
        image.style.width="0px";
        image.style.height="0px";
        document.querySelector("#b").textContent=`turn for ${myturn}`;
        gameover=false;


    })
})





   
        
            
            
        
    
    
        
    