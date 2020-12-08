const express=require('express');
const app=express();
const db=require('./db/conectin');
const PORT=3000;
const bodyParser=require('body-parser');
app.listen(PORT,function(){
    console.log(`Rodando na porta ${PORT}`);
});

app.use(bodyParser.urlencoded({extended:false}));

//banco de dados
db
  .authenticate()
  .then(()=>{
    console.log("Conectado ao banco");
  })
  .catch(err=>{
      console.log("erro ao conectar");
  })

//rotas
app.get('/',(req,res)=>{
    res.send("Funcionando");
});

app.use('/jobs',require('./routes/jobs'));