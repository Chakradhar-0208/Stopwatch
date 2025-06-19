const secSpan = document.getElementById("seconds")
const minSpan = document.getElementById("minutes")
const hourSpan = document.getElementById("hours")

const startBtn = document.getElementById("start")
const resetBtn = document.getElementById("reset")
const PauseBtn = document.getElementById("pause")
let sec = 0, min = 0, hr = 0
let sBtn = 0, active = false


startBtn.addEventListener("click", () => {
    if (active) return
    active = true
    sBtn = setInterval(() => {
        if (++sec < 60) {
            // sec++;
            (sec < 10) ? secSpan.innerHTML = `0${sec}` : secSpan.innerHTML = sec

        } else if (++min < 60) {
            // min++;
            (min < 10) ? minSpan.innerHTML = `0${min}` : minSpan.innerHTML = min
            sec = 0
            secSpan.innerHTML = "00"
            console.log(min)
        } else {
            hr++
            (hr < 10) ? hourSpan.innerHTML = `0${hr}` : hourSpan.innerHTML = hr
            min = 0
            sec = 0
            secSpan.innerHTML = "00"
            minSpan.innerHTML = "00"
        }
    }, 1000)
})

resetBtn.addEventListener("click", () => {
    sec = 0
    min = 0
    hr = 0
    secSpan.innerHTML = "00"
    minSpan.innerHTML = "00"
    hourSpan.innerHTML = "00"
    clearInterval(sBtn)
    active = false
})

PauseBtn.addEventListener("click", () => {
    clearInterval(sBtn)
    active = false
})

