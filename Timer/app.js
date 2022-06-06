let startButton = document.getElementById("startButton");
let restartButton = document.getElementById("restartButton");
let pauseButton = document.getElementById("pauseButton");
let continueButton = document.getElementById("continueButton");
let stopWatch = document.getElementById("stopWatch");

let hour = 0;
let minute = 0;
let second = 0;
function startTime(){
    second += 1;
    if (second === 60){
        minute += 1;
        second = 0;
  
    if (minute === 60){
        hour += 1;
        minute = 0;
    }
};
    let secondText = (second<10) ? "0" + second.toString() : second;
    let minuteText = (minute<10) ? "0" + minute.toString() : minute;
    let hourText = (hour<10) ? "0" + hour.toString() : hour;
    
    stopWatch.textContent = hourText + ':' + minuteText + ':' + secondText;
};
let interVal;
startButton.addEventListener('click',function(){
     interVal = setInterval(startTime,1000);
});
continueButton.addEventListener('click',function(){
    clearInterval(interVal);
    interVal = setInterval(startTime,1000);
   
});
pauseButton.addEventListener('click',function(){
    clearInterval(interVal);
    
});
restartButton.addEventListener('click',function(){
    clearInterval(interVal);
    hour = 0;
    minute = 0;
    second = 0;
    interVal = setInterval(startTime,1000);
    
});


