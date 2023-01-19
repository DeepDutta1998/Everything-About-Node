const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

// for reading body values
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.static(path.join(__dirname, 'public')))

const dbDriver =
  'mongodb+srv://lofi:bLZgeMO7Qs872Qqx@cluster0.rmvujxb.mongodb.net/CRUDapi'

const apiroutes = require('./routes/crudApi.routes.js')
app.use('/api', apiroutes)

const port = process.env.PORT || 1999

mongoose
  .connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port, () => {
      console.log('DB is connected')
      console.log(`Server is connected @ http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log('error')
    console.log(err)
  })
