function attachEventsListeners(){

    let inputDays = document.getElementById("days")
    let inputHours = document.getElementById("hours")
    let inputMinutes = document.getElementById("minutes")
    let inputSeconds = document.getElementById("seconds")

    let btnDays = document.getElementById('daysBtn')
    let btnHours = document.getElementById('hoursBtn')
    let btnMinutes = document.getElementById('minutesBtn')
    let btnSeconds = document.getElementById('secondsBtn')

    btnDays.addEventListener('click', () => {
        let daysValue = +inputDays.value
        inputHours.value = daysValue * 24
        inputMinutes.value = daysValue * 1440
        inputSeconds.value = daysValue * 86400
    })
    btnHours.addEventListener('click', () => {
        let hoursValue = +inputHours.value
        inputDays.value = hoursValue / 24
        inputMinutes.value = hoursValue * 60
        inputSeconds.value = hoursValue * 3600
    })
    btnMinutes.addEventListener('click', () => {
        let minutesValue = +inputMinutes.value
        inputDays.value = minutesValue / 1440
        inputHours.value = minutesValue / 60
        inputSeconds.value = minutesValue * 60
    })
    btnSeconds.addEventListener('click', () => {
        let secondsValue = +inputSeconds.value
        inputDays.value = secondsValue / 86400 
        inputHours.value = secondsValue / 3600
        inputMinutes.value = secondsValue / 60
    })
}