const express = require('express')
const server = express();

server.all("/", (req, res) => {
  res.send('pp')
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Rpc is ready.")
  })
}
module.exports = keepAlive