const Sequelize = require('sequelize');

const sequelize = new Sequelize('exerciciossemanaoito', 'postgres', '1234', {

    dialect: 'postgres',
    host: 'localhost',
    port: '5432'
})

module.exports = sequelize;