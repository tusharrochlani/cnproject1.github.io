let [miliseconds,seconds,minutes,hours]=[0,0,0,0];
let displayTime = document.querySelector(".display-time");
let bt = null;

// Start Timer
document.getElementById('start-btn').addEventListener('click',()=>{
    if(bt !== null){
        clearInterval(bt)
    }
        bt = setInterval(calcTime,10);
});


// Pause Timer
document.getElementById('pause-btn').addEventListener('click',()=>{
    clearInterval(bt);
})

// Reset Timer
document.getElementById("reset-btn").addEventListener('click',()=>{
    clearInterval(bt);
    [miliseconds,seconds,minutes,hours]=[0,0,0,0];
    displayTime.innerHTML = '00 : 00 : 00 : 000 ';
})

function calcTime(){
    miliseconds+=10;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    if(minutes == 60){
        minutes = 0;
        hours++;
    }
}
}
let hrs = hours < 10? "0" + hours : hours;
let mins = minutes < 10? "0" + minutes:minutes;
let sec = seconds < 10? "0"+seconds : seconds;
let milsec = miliseconds < 10? "0"+miliseconds : miliseconds;

displayTime.innerHTML = `${hrs} : ${mins} : ${sec} : ${milsec}`;
}
