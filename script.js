let timer=document.querySelector('.timer');
let start=document.getElementById('start');
let stopBtn=document.getElementById('stopBtn');
let reset=document.getElementById('reset');

let msec=00;
let sec=00;
let min=00;

let timerID=null;

start.addEventListener('click', function(){
    if(timerID !== null){
        clearInterval(timerID);
    }
    timerID=setInterval(startTimer, 10);
});


stopBtn.addEventListener('click', function(){
    clearInterval(timerID);
});

reset.addEventListener('click', function(){
    clearInterval(timerID);
    timer.innerHTML=`00:00:00`;
    msec=sec=min=00;
});
function startTimer(){
    msec++;
    if(msec==100){
        sec++;
        msec=0;
        if(sec==60){
            min++;
            sec=0;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec< 10 ? `0${sec}` : sec;
    let minString = min<10 ? `0${min}` : min;

    timer.innerHTML = `${minString} : ${secString} : ${msecString}`;
}