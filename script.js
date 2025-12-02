let h1=document.querySelector("h1");
let h3= document.querySelector("h3");

let but=document.querySelector("button");

window.addEventListener("keydown",function(det){
    // console.log(det); //to show you the detail
    // console.log(det.key); //to show which key is pressed
    if (det.key === " "){
        h1.textContent= "Space";
    }
    else{
        
        h1.textContent=det.key;
    }
    h3.innerHTML=`Ctrl: <b>${det.ctrlKey}</b> | Alt: <b>${det.altKey}</b> | Shift: <b>${det.shiftKey}</b>`;
});


but.addEventListener("click",function(){
    h1.textContent="Start Typing";

});


