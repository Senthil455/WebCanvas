const btn = document.querySelector(".btn");
const para = document.querySelector(".name");

let content = "Senthil";
let count = 0;

function printName(){
    const timer = setInterval(work, 500);
    function work(){
        if(count == content.length){
            clearInterval(timer);
        }
        para.innerHTML += content.charAt(count);
        count++;
    }
   
}

btn.addEventListener("click", printName);

