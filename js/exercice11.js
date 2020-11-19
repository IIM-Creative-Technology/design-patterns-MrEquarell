let lines = []

function fetchData(type, line, station) {
    const url = 'https://api-ratp.pierre-grimaud.fr/v4/schedules' + type + '/' + line + '/' + station + '/A+R'
    let schedules
    
    fetch(url)
        .then(response => response.json())
        .then(data => results = data.result.schedules)

    return schedules
}

let results = fetchData('metros', '3', 'opera')
console.log(results)