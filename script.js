let left= document.querySelector(".left");
let line= document.querySelector(".blueline");
let right= document.querySelector(".right");
left.addEventListener("click",()=>{
    line.style.left='16%';
})
right.addEventListener("click",()=>{
    line.style.left='60%';
})
