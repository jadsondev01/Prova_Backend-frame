import express from "express";
import connectDatabase from "./config/dbconect.js";
import futbol from "./module/futbol.js";

const conexao = await connectDatabase();

conexao.on("error",(erro)=>{
console.log("ero de conexão",erro)
})
conexao.on("open",()=>{
  console.log("Conexão com o banco de dados ok")
  })


const app = express()
app.use(express.json())
// const vagas = [
//     {id: 1, "titulo": "Massgista"},
//     {id: 2, "titulo": "Goleiro"},
//     {id: 3, "titulo": "Atacante"}
//   ]
  
  app.get('/', (req, res) => {
    res.status(200).send('Inicio LoucosporFutebol');
  }) 

 
  app.get('/futbol', async(req, res)=> {
    const listafutbol = await futbol.find({});
      res.status(200).json(listafutbol);
  })

  // app.post('/vagas', (req, res) => {
  //   vagas.push(req.body);
  //   res.status(201).send('Vaga cagastrada com Sucesso!')
  // })

  // app.put('/vagas/:id', (req, res) => {
  //   let index = buscaVaga(req.params.id);
  //   vagas[index].titulo = req.body.titulo;
  //   res.json(vagas);
  // })
  
  //  app.get('/vagas/:id', (req, res)=>{
  //   const index = buscaVaga(req.params.id);
  //   res.status(201).json(vagas[index]);

  //  })

  //  app.delete('/vagas/:id',(req, res)=>{
  //   const index = buscaVaga(req.params.id);
  //   vagas.slice(index,1)
  //   res.status(201).json(vagas)

  //  })

  // function buscaVaga(id) {
  //   return vagas.findIndex(vagas => vagas.id == id)
  // }
  export default app // preciso exporta para que outro arquivo fazer uso 

  	  

