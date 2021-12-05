README

# What is this?

Simple sms api for your messaging

# First Steps

To get started,
1. Visit https://sms.nalosolutions.com
2. Click on the new account, fill out the forms and click on register and your account will be activated.


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

# Parameters
useraname: The username field is the username used upon registering on https://sms.nalosolutions.com.

password: The password field is the password used upon registering on https://sms.nalosolutions.com.

type: The type field specifies whether message is a going out as a flash message or a text message. 0 is for text message, 1 is for a flash message.

dlr: This field is a field that specifies whether a delivery report is required or not. 1 is for YES, 0 is for NO.

destination: This is a required field that specifies that receipient number of the text message.

sender: This is a required string value of the sender ID. It has a maximum character length of 11.

message: This is the actual message to be sent.

secured: This is a boolean that specifies whether it should pass through a secure connection or not.
