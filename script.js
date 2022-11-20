
setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let day = document.getElementById('day');
    let dd = document.getElementById('dd');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss'); 
    let hr_dot = document.querySelector('.hr_dot');
    let mm_dot = document.querySelector('.mm_dot');
    let ss_dot = document.querySelector('.ss_dot');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let d = new Date().getDay();
    let am = h >= 12 ? "PM" : "AM"



    // to convert to 12 hour clock
    // if (h > 12) {
    //     h = h - 12;
    // }

    // to add zero before single digits
    if (h < 10) {
        "0"+h
    }

    if (m < 10) {
        "0"+m
    }

    if (s < 10) {
        "0"+s
    }
    if (d == 0) {
        d="Sun"
    }
    else if (d == 1) {
        d="Mon"
    }
    else if (d == 2) {
        d="Tue"
    }
    else if (d == 3) {
        d="Wed"
    }
    else if (d == 4) {
        d="Thu"
    }
    else if (d == 5) {
        d="Fri"
    }
    else {
        d="Sat"
    }


    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am ;
    day.innerHTML = d;

    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    

    hr_dot.style.transform = `rotate(${h * 15}deg)`;
    //360 / 24 = 15
    mm_dot.style.transform = `rotate(${m * 6}deg)`;
    //360 / 60 = 6
    ss_dot.style.transform = `rotate(${s * 6}deg)`;
    //360 / 60 = 6

})

