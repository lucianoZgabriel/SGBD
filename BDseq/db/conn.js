const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('database_development', 'root', 'cancela123', {
  host: 'localhost',
  dialect: 'mysql'
})

try {
  sequelize.authenticate()
  console.log('Conectou ao banco com sucesso')
} catch (error) {
  console.error('Não foi possível conectar', error)
}

module.exports = sequelize


