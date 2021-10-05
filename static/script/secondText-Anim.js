const text = document.querySelector(".BigText");
const strText = text.textContent;//getting our Fancy Shmenzy
const splitText = strText.split("");//Getting evert single induvisual as string

text.textContent = "";
for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>"//getting strings to span
}

let char = 0;
let timer = setInterval(onTick, 50);

//Defining onTick
function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('blur', 'clor');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

//Defining complete
function complete(){
    clearInterval(timer);
    timer = null;
}