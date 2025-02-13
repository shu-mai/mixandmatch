let bgImage = document.getElementById('content');
let bgButton = document.getElementById('bgButton');
let accButton = document.getElementById('aButton');
let flowButton = document.getElementById('fButton');
let vaseButton = document.getElementById('vButton');
 
let bgCounter = 1;
let accCounter = 1;
let flowCounter = 1;
let vaseCounter = 1;

bgButton.addEventListener('click', () => {
    bgCounter++; 
    if(bgCounter > 3){
        bgCounter = 1;
    }
    bgImage.style.backgroundImage=`url(img/background_0${bgCounter}.jpg)`;
});

accButton.addEventListener('click', () => {
    let currImage = document.getElementById(`a${accCounter}`);
    accCounter++; 
    if(accCounter > 3){
        accCounter = 1;
    }
    let nextImage = document.getElementById(`a${accCounter}`);

    currImage.style.display="none";
    nextImage.style.display="block";
});

flowButton.addEventListener('click', () => {
    let currImage = document.getElementById(`f${flowCounter}`);
    flowCounter++; 
    if(flowCounter > 4){
        flowCounter = 1;
    }
    let nextImage = document.getElementById(`f${flowCounter}`);

    currImage.style.display="none";
    nextImage.style.display="block";
});

vaseButton.addEventListener('click', () => {
    let currImage = document.getElementById(`v${vaseCounter}`);
    vaseCounter++; 
    if(vaseCounter > 3){
        vaseCounter = 1;
    }
    let nextImage = document.getElementById(`v${vaseCounter}`);

    currImage.style.display="none";
    nextImage.style.display="block";
});
