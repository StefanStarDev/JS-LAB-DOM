function attachEventsListeners(){

    let btn = document.getElementById("convert")
    let inputUnits = document.getElementById('inputUnits')
    let inputDistance = document.getElementById('inputDistance')
    let outputDistance = document.getElementById('outputDistance')
    let outputUnits = document.getElementById('outputUnits')

    btn.addEventListener('click', () => {
        let inputValue = inputUnits.value
        let outputValue = outputUnits.value
        let inputDistanceValue = +inputDistance.value
        

        if(inputValue = 'km'){

            if(outputValue === 'm'){
                let outputDistanceValue = inputDistanceValue * 1000
                outputDistance.value = outputDistanceValue
            }

        }
        
        console.log(value);
    })
   
    

}