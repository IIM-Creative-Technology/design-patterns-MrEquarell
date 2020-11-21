const LineFactory = {
    metrosFactory: new MetroFactory(),
    busesFactory: new BusFactory(),
    rersFactory: new RerFactory(),
}

let linesHydrated = []

let schedulesContainer = document.querySelector('.schedules')

async function fetchData(type, line, station) {
    const response = await fetch('https://api-ratp.pierre-grimaud.fr/v4/schedules/' + type + '/' + line + '/' + station + '/A+R')
    return await response.json()
}

let allLines = [
    {
        type: 'metros',
        line: 3,
        station: 'opera',
    },
    {
        type: 'metros',
        line: 7,
        station: 'opera',
    },
    {
        type: 'metros',
        line: 8,
        station: 'opera',
    },
    {
        type: 'buses',
        line: 21,
        station: 'opera',
    },
    {
        type: 'buses',
        line: 22,
        station: 'opera',
    },
    {
        type: 'buses',
        line: 27,
        station: 'opera',
    },
    {
        type: 'rers',
        line: 'A',
        station: 'auber',
    }
]

Promise.all(allLines.map(e => fetchData(e.type, e.line, e.station))).then(lines => {
    lines.forEach(function (line, key) {
        const myLine = allLines[key]
        const factory = myLine.type + 'Factory'

        linesHydrated.push(LineFactory[factory].create(myLine.line, myLine.station, line.result.schedules))
    })

    linesHydrated.forEach(function (lineHydrated) {
        const title = '<h3>' + lineHydrated.constructor.name + ' ' + lineHydrated.line + '</h3>'

        let list = '<ul>'
        lineHydrated.schedules.forEach(function (schedule) {
            list += '<li>'+ (lineHydrated.constructor.name === 'Rer' ? schedule.code + ' ' : '')
                + schedule.destination + ' : ' + schedule.message + '</li>'
        })
        list += '</ul>'

        schedulesContainer.innerHTML += title + list
    })
})

function MetroFactory() {
    this.create = function (line, station, schedules) {
        return new Metro(line, station, schedules)
    }
}

function Metro(line, station, schedules) {
    this.line = line
    this.station = station
    this.schedules = schedules
}

function BusFactory() {
    this.create = function (line, station, schedules) {
        return new Bus(line, station, schedules)
    }
}

function Bus(line, station, schedules) {
    this.line = line
    this.station = station
    this.schedules = schedules
}

function RerFactory() {
    this.create = function (line, station, schedules) {
        return new Rer(line, station, schedules)
    }
}

function Rer(line, station, schedules) {
    this.line = line
    this.station = station
    this.schedules = schedules
}