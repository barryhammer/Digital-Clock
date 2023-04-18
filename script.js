function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM'
    }

    // Changes format from 24 hour clock to 12 hour clock
    if(hrs > 12){
        hrs = hrs -12;
    }

    // Because minutes and seconds were not getting a padded 0 if the number
    // was less than 10, I have to use an extra if statement for minutes and
    // seconds. I found my answer here:
    // https://www.tutorialspoint.com/How-to-pad-a-number-with-leading-zeros-in-JavaScript

    if(min < 10){
        let paddedMin = min.toString().padStart(2, '0');
        min = paddedMin;
    }

    if(sec < 10){
        var paddedSec = sec.toString().padStart(2, '0');
        sec = paddedSec;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10)