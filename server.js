const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const valAgents = {
    'jett': {
        'Ability 1': 'Cloudburst',
        'Ability 2': 'Updraft',
        'Ability 3': 'Tailwind',
        'Ultimate': 'Bladestorm',
        'Origins': 'South Korea',
        'Role': 'Duelist',
        'Clutch': "Oh, my back hurts! Everyone's so heavy!"
    },
    'killjoy': {
        'Ability 1': 'Alarmbot',
        'Ability 2': 'Nanoswarm',
        'Ability 3': 'Turret',
        'Ultimate': 'Lockdown',
        'Origins': 'Germany',
        'Role': 'Sentinel',
        'Thrifty': "How about I only bring a ruler next time? *laughs*"
    },
    'viper': {
        'Ability 1': 'Snake Bite',
        'Ability 2': 'Poison Cloud',
        'Ability 3': 'Toxic Screen',
        'Ultimate': "Viper's Pit",
        'Origins': 'USA',
        'Role': 'Controller',
        'Ultimate Domain Expansion': "Welcome to my world."
    },
    'unknown': {
        'Ability 1': 'Unknown',
        'Ability 2': '',
        'Ability 3': '',
        'Ultimate': '',
        'Origins': '',
        'Role': '',
        'Clutch': ""
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const agentName = request.params.name.toLowerCase()
    if( valAgents[agentName] ) {
        response.json(valAgents[agentName])
    }else{
        response.json(valAgents['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}.`)
})