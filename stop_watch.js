

const myStopWatch = {
    hour:0,
    min:0,
    sec:0
}

StopTimer();

function StopTimer() {


    const displayHour = myStopWatch.hour.toString().padStart(2, '0');
    const displayMin = myStopWatch.min.toString().padStart(2, '0');
    const displaySec = myStopWatch.sec.toString().padStart(2, '0');

    document.querySelector('.js-time-display').innerHTML = `<span>${displayHour}:</span>
    <span> ${displayMin}:</span>
    <span> ${displaySec}</span>`


    if (myStopWatch.sec <= 59) { 
        myStopWatch.sec ++;
    }
    
    if (myStopWatch.sec === 59) {
         myStopWatch.sec =0; 
         myStopWatch.min ++;
    }
    
    if (myStopWatch.min === 59) {
         myStopWatch.min =0 
         myStopWatch.hour ++;
    }

}

    let stopTiming = null;
document.querySelector('.js-start_stop').addEventListener('click', () => {
    if (!stopTiming) {
    stopTiming = setInterval(StopTimer,1000)
    
    document.querySelector('.js-start_stop').innerHTML = 'Stop';
    } else {
        document.querySelector('.js-start_stop').innerHTML = 'continue';
        clearInterval(stopTiming);
        stopTiming = false;
    }


    document.querySelector('.js-reset-time').addEventListener('click', () => {
        myStopWatch.hour =0;
        myStopWatch.min =0;
        myStopWatch.sec =0;

        clearInterval(stopTiming);
        stopTiming = false;

        StopTimer();
        document.querySelector('.js-start_stop').innerHTML = 'start';

    })
});
