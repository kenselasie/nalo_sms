README

# What is this?

Simple sms api for your messaging

# First Steps

To get started,
1. Visit https://sms.nalosolutions.com
2. Click on the n


# Installation

`npm i nalo-sms --save`

Then...

```
import { sendSMSMessage } from 'nalo_sms'

const options = {
    username: String,
    password: String,
    type: 1 or 0
    dlr: 1 or 0
    destination: Number
    sender: String
    message: String
    secured: Boolean
}

sendSMSMessage(options)

```
