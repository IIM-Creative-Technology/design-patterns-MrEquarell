initMetro()

function initMetro() {
    fetch('https://api-ratp.pierre-grimaud.fr/v4/lines/metros')
    .then(response => response.json())
    .then(data => {
        console.log(data.result.metros)
        const html = data.result.metros
        let selector = document.querySelector('.metro-list')
        html.forEach(metro => {
            let newOption = document.createElement("option");
            newOption.setAttribute("value", metro.code)
            newOption.innerHTML = metro.name
            selector.appendChild(newOption)
        })     
    })
}

let code;

document.querySelector('.metro-list').addEventListener('change', function(event) {
    code = event.target.value

    fetch('https://api-ratp.pierre-grimaud.fr/v4/stations/metros/' + code )
    .then(response => response.json())
    .then(data => {
        console.log(data.result.stations)
        let selector = document.querySelector('.metro-stations')
        if(selector.childElementCount > 1){
            for(let i = 1; i < selector.childElementCount; i++) {
                selector.removeChild(selector.childNodes[i])
            }
        }
        data.result.stations.forEach(station => {
            let newOption = document.createElement("option");
            newOption.setAttribute("value", station.slug)
            newOption.innerHTML = station.name
            selector.appendChild(newOption)
        })   
    })

    console.log(code)
})

document.querySelector('.metro-stations').addEventListener('change', function(event) {
    let slug = event.target.value

    fetch(`https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/${code}/${slug}/A+R`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let ul = document.querySelector('.metro-schedules')
        if(ul.childElementCount > 1){
            for(let i = 0; i < ul.childElementCount; i++) {
                ul.removeChild(ul.childNodes[i])
            }
        }
        data.result.schedules.forEach(schedule => {
            let newLi = document.createElement("li");
            newLi.innerHTML = `⌚ Temps d'attente: ${schedule.message}/${schedule.destination}`
            ul.appendChild(newLi)
        })   
    })

    setInterval(function () {
        // add a random move
        
        let ul = document.querySelector('.metro-schedules')
        if(ul.childElementCount > 1){
            for(let i = 0; i < ul.childElementCount; i++) {
                ul.removeChild(ul.childNodes[i])
            }
        }
        data.result.schedules.forEach(schedule => {
            let newLi = document.createElement("li");
            newLi.innerHTML = `⌚ Temps d'attente: ${schedule.message}/${schedule.destination}`
            ul.appendChild(newLi)
        })
    
    }, 30000);

    console.log(code)
})


