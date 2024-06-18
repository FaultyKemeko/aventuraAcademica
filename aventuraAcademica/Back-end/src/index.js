import express from 'express';

const app = express();
const port = 3000;

// ROTAS NECESSÁRIAS
    // GET - Pega info
    // POST - Cria info
    // PUT - Altera toda info
    // PATCH - Altera uma parte da info
    // DELETE - Apaga uma info

app.get('/', (req, res) => { 
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })