/**
 * Required External Modules
 */

import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'

/**
 * App Variables
 */

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const app = express()

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!')
})
app.listen(PORT, err => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${PORT}`)
})

/**
 *  App Configuration
 */

/**
 * Server Activation
 */

/**
 * Webpack HMR Activation
 */
