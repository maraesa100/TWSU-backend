// Reqd External Modules

import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'

import filterFunction from './func/filterFunction'

// App Vars

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: string | number = process.env.PORT || 5000

const app = express()

// App Config

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Server Activation

app.use('*', (req, res) => {
  res.send('<h1>Welcome to your simple server! Awesome right</h1>')
})

app.post('/api/v1/wordfilter', (req, res) => {
  console.log('Endpoint Successfully Hit' + req.body.description)

  if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    })
  }

  const returnedValue = filterFunction(req.body.description)

  return res.status(201).send({
    success: 'true',
    returnedValue
  })
})

app.listen(PORT, () => console.log(`hosting @${PORT}`))

// Webpack Activation
