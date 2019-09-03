const Sequelize = require('sequelize')

//BD Connect
const sequelize = new Sequelize('postapp', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}