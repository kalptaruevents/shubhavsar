const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const DATA = path.join(__dirname, 'inquiries.json')
if(!fs.existsSync(DATA)) fs.writeFileSync(DATA, '[]')

app.post('/api/inquiry', (req,res)=>{
  const item = { ...req.body, receivedAt: new Date().toISOString() }
  const list = JSON.parse(fs.readFileSync(DATA))
  list.unshift(item)
  fs.writeFileSync(DATA, JSON.stringify(list, null, 2))
  res.json({ok:true})
})

const port = process.env.PORT || 4000
app.listen(port, ()=> console.log('Server listening on', port))
