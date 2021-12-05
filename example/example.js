const { sendSMSMessage } = require('../package/index')
const { credentials } = require('../env')


sendSMSMessage({
    username: credentials.USERNAME,
    password: credentials.PASSWORD,
    type: 0,
    dlr: 1,
    destination: '',
    sender: 'TEST',
    message: 'This is a test from my api',
    secured: true
})
