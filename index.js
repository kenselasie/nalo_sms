const http = require('https')

const baseUrl = 'http://api.nalosolutions.com/bulksms/'
const securedBaseUrl = 'https://api.nalosolutions.com/bulksms/'

let url = ''

const sendSMSMessage = (options) => {
    const requiredFields = ['username', 'password', 'type', 'dlr', 'destination', 'sender', 'message']
    const missingFields = requiredFields.filter(field => {
        if (options[field] === null || options[field] === undefined || options[field] === '') return field
    })
    
    if (missingFields.length > 0) return console.error(`Error: ${missingFields} field(s) missing`)

    const otherParams = 
    `?username=${options.username}&password=${options.password}&type=${options.type}&dlr=${options.dlr}&destination=${options.destination}&source=${options.sender}&message=${options.message}`
    
    options.secured ? url = securedBaseUrl : url = baseUrl

    http.get(`${url}${otherParams}`, (res => {
        let data = ''

        res.on('data', d => {
            data += d
        })
        res.on('end', () => {
            console.log(data)
        })
        return data
    }))
}

// TODO: Multiple numbers
// Other features on teh document

module.exports.sendSMSMessage = sendSMSMessage
