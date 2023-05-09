var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;

}
function reset() {
    timer = false;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";


}

function stopwatch() {
    if (timer == true) {
        count += 1;

        if (count == 100) {
            sec += 01;
            count = 00;

        }
        if (sec == 60) {
            min += 01;
            sec = 00;

        }
        if (min == 60) {
            hr += 01;
            min = 00;

        }

        var hrs = hr;
        var mins = min;
        var secstring = sec;
        var countstring = count;
        if (hr < 10) {
            hrs = "0" + hrs;
        }
        if (min < 10) {
            mins = "0" + mins;
        }
        if (sec < 10) {
            secstring = "0" + secstring;
        }
        if (count < 10) {
            countstring = "0" + countstring;
        }




        document.getElementById("hr").innerHTML = hrs;
        document.getElementById("min").innerHTML = mins;
        document.getElementById("sec").innerHTML = secstring;
        document.getElementById("count").innerHTML = countstring;



        setTimeout("stopwatch()", 10);
    }

}