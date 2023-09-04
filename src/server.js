const express = require('express')
const app = express()
const port = 3006

app.get('/test', (req, res) => {
  res.send('Oi Mundo!')
})

app.listen(port, () => {
  console.log(`Aqui esta rodando a porta ${port}`)
})