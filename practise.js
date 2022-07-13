let a=[1,2,3,4];
function baji(){
    console.log("i am baji")
}
for(i of a){
    if(i%2===0){
        console.log("true")
    }else{
        console.log("false")
    }
    baji();
}