const express=require('express');
const router=express.Router();
const Job=require('../models/Job');
//rota de teste
/*router.get('/test',(req,res)=>{
    res.send('Deu certo');
});*/

router.post('/add',(req,res)=>{
    let{titulo,salario,empresa,description,email,new_job}=req.body;

    Job.create({
        titulo,
        description,
        salario,
        empresa,
        email,
        new_job
    })
    .then(()=>res.redirect('/'))
    .catch(err=>console.log(err));
});
module.exports=router;