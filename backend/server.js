const api = require("express")()
const consign = require("consign")
const bodyParser = require('body-parser')
const port = 8080 | process.env.PORT

consign()
  .include('/routers') 
  .into(api);

api.listen(port, () => {
    console.log('servidor rodando na porta 8080');
})