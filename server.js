const express = require('express')
const api = express()

api.get('/', (request, response) => {
    response.status(200).json({
        slackUsername: 'Siilver',
        backend: true,
        age: 26,
        bio: 'Getting shit done!'
    })
})

//for endpoints that are not valid
api.all('*', (request, response) => {
    response.status(404).send('Not a valid route')
});


api.listen(conf.port, ()=> {
    console.log(`Server running on port 8080`)
})