// NOTE :  use  querySelector() to return element in a "class"
// NOTE :  use  getElementById() to return element of an "id"

const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
const dateEl = document.getElementById("current-date")

function updateClock(){
    const now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()
    let ampm = "AM"

    if (h >12) {
        h = h -12   //as it 24 hr format but we need 12 hr so .. 13:00 == 1pm
        ampm = "PM"
    }

    // as clocks have format 08 for hour
    h = h<10 ? "0" + h : h ;
    m = m<10 ? "0" + m : m ;
    s = s<10 ? "0" + s : s ;

    hourEl.innerText = h 
    minuteEl.innerText = m
    secondEl.innerText = s
    ampmEl.innerText = ampm

    // Update date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    dateEl.innerText = now.toLocaleDateString('en-US', options);

    // Request next frame
    requestAnimationFrame(updateClock);
}

updateClock() 