const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const {viewersmodel} = require('./viewersModel/ViewersModel')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/v1/viewers', async (req, res) => {
  
  const newviewer = new viewersmodel({
    device:req.body.device
  })
   const viewers = await newviewer.save()
   res.status(201).json({viewers})

})
app.get('/api/v1/viewersdevice/',async(req,res)=>{
  const devices = await  viewersmodel.find()
  res.send(devices)
 
})

app.listen(5000, () => {
  console.log('Example app listening on port 5000!')
})


mongoose.connect('mongodb://localhost:27017',{dbName:"fishtamovie"}).then((res) => {
    console.log('Mongoss Connected')
})