const senhaMysql = require('./senha')
const Sequelize = require('sequelize')
const connection = new Sequelize('Parlador_ideal', 'root', senhaMysql,{
    host:'localhost',
    dialect:'mysql'
})

connection.sync({force:false})

module.exports = connection