var Sequelize = require('sequelize')

var connection = new Sequelize('discos_db', 'root', 'password', {
  dialect: 'mysql',
  operatorsAliases: false
})

//cria a tabela Catálogo de Discos
var Discos = connection.define('Catálogo de Discos', {
  Artista: Sequelize.STRING,
  Album: Sequelize.STRING,
})

//incluir
connection.sync().then(function(){
  Discos.create({
    Artista: 'Alice in Chains',
    Album: 'Jar of Flies'
  })
})

//listar
connection.sync().then(function(){
  Discos.findAll().then(function(Artista){
    console.log(Artista.dataValues)
  })
})

var conexao = connection.authenticate()
  .then(function(){
    console.log('Conexao estabelecida com sucesso')
  })
  .catch(function(err){
    console.log('Nao foi possivel se conectar com o banco de dados MySQL')
  })
  .done()
