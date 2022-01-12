const Sequelize = require('sequelize')
const connection = require('../connection/database')
const Usuarios = connection.define('usuarios',{
    userName:{
        type:Sequelize.STRING,
        allowNull:false,
        charset: 'utf8',
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false,
        charset: 'utf8',
    }
})



module.exports= Usuarios