let h1=document.querySelector("h1");

let but=document.querySelector("button");

window.addEventListener("keydown",function(det){
    // console.log(det); //to show you the detail
    console.log(det.key); //to show which key is pressed
    if (det.key === " "){
        h1.textContent= "Space";
    }
    else{
        
        h1.textContent=det.key;
    }

})

but.addEventListener("click",function(){
    h1.textContent="Start Typing";

});


