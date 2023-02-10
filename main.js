var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var starttimer;

start.addEventListener('click', function(){
    if(starttimer === undefined){
        starttimer = setInterval(timer, 1000)
    } else {
        alert("The timer is already running");
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    starttimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    starttimer = undefined;
})

function timer(){
    // work timer
    if(ws.innerText !=0){
        ws.innerText--;
    } else if(wm.innerText !=0 && ws.innerText ==0){
    ws.innerText=59;
    wm.innerText--;
    }

    // break timer
    if(wm.innerText ==0 && ws.innerText==0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText ==0){
            bs.innerText=59;
            bm.innerText--;
        }
    }
    // increment of no. of cycles
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

function stopInterval(){
    clearInterval(starttimer);
}