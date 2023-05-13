//Countdown timer 
function updateTimer() {
    future = Date.parse("July 25, 2022 01:30:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div><b>' + d + '</b><span>Days</span></div>' +
        '<div><b>' + h + '</b><span>Hours</span></div>' +
        '<div><b>' + m + '</b><span>Minutes</span></div>' +
        '<div><b>' + s + '</b><span>Seconds</span></div>';
}
setInterval('updateTimer()', 1000);
