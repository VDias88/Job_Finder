const Sequelize=require('Sequelize');
const db=require('../db/conectin');

const Job=db.define('job',{
    titulo:{
        type:Sequelize.STRING,
    },
    description:{
        type:Sequelize.STRING,
    },
    salario:{
        type:Sequelize.STRING,
    },
    empresa:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
    },
    new_job:{
        type:Sequelize.INTEGER,
    },
});
module.exports=Job;