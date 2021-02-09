const app = require('./server');
const connect = require('./dataBase/connect');
require('dotenv/config');

const port = process.env.PORT || 3000;
connect.authenticate().then(async ()=>{
  app.listen(port, () => console.log(`Server online na porta: ${port}`));
})
.catch(err => console.log(`erro ao estabelecer conexão com o banco: ${err}`));
