const express = require('express')
const cors    = require('cors')
const mysql   = require('mysql')

const app = express()

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'discos_db'
})


connection.connect(err => {
  if(err){
    return err
  }
})

app.use(cors())

app.get('/', (req, res) => {
  res.send('Go to /Discos to see Discos')
})

app.get('/Discos', (req, res) =>{
  const SELECT_ALL_DISCOS_QUERY = 'SELECT * FROM discos'
  connection.query(SELECT_ALL_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.json({
        data: results
      })
    }
  })
})

app.get('/Discos/add', (req,res) => {
  const {Artista, Album} = req.query
  const INSERT_DISCOS_QUERY = `INSERT INTO discos (Artista, Album) VALUES('${Artista}','${Album}')`
  connection.query(INSERT_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.send('o disco foi adicionado com sucesso')
    }
  })
})

app.get('/Discos/del', (req, res) => {
  const {Album} = req.query
  const DELETE_DISCOS_QUERY = `DELETE FROM discos WHERE Album = '${Album}'`

  connection.query(DELETE_DISCOS_QUERY,  (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.send('o disco foi removido com sucesso')
    }
  })
})

app.get('/Discos/upd', (req, res) => {

  res.send('choose .../upd/Artista or .../upd/Album or .../upd/id to update')
})

app.get('/Discos/upd/Artista', (req, res) => {

  const {Artista0, Artista1} = req.query
  const UPDATE_DISCOS_QUERY = `UPDATE discos SET Artista = '${Artista1}'  WHERE Artista = '${Artista0}'`

  connection.query(UPDATE_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.send('sucesso na atualização do Disco')
    }
  })
})

app.get('/Discos/upd/Album', (req, res) => {

  const {Album0, Album1} = req.query
  const UPDATE_DISCOS_QUERY = `UPDATE discos SET Album = '${Album1}'  WHERE Album = '${Album0}'`

  connection.query(UPDATE_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.send('sucesso na atualização do Disco')
    }
  })
})

app.get('/Discos/upd/Artista', (req, res) => {

  const {Album0, Album1} = req.query
  const UPDATE_DISCOS_QUERY = `UPDATE discos SET Album = '${Album1}'  WHERE Album = '${Album0}'`

  connection.query(UPDATE_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.send('sucesso na atualização do Disco')
    }
  })
})

app.get('/Discos/upd/id', (req, res) => {

  const {id0, id1} = req.query
  const UPDATE_DISCOS_QUERY = `UPDATE discos SET id= ${id1}  WHERE id = ${id0}`

  connection.query(UPDATE_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.send('sucesso na atualização do Disco')
    }
  })
})



app.get('/Discos/search', (req, res) => {

  const {text} = req.query
  const SEARCH_ALL_DISCOS_QUERY = `SELECT * FROM discos WHERE Artista LIKE '${text}'`

  connection.query(SEARCH_ALL_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      for (var i in results){
        console.log(locate('${text}',results[i]))
      }
    }
  })
})


app.get('/Discos', (req, res) => {

  const SELECT_ALL_DISCOS_QUERY = 'SELECT * FROM discos'

  connection.query(SELECT_ALL_DISCOS_QUERY, (err, results) => {
    if(err){
      return res.send(err)
    }
    else{
      return res.json({
        dado: results
      })
    }
  })
})

app.listen(4000, () => {
  console.log('servidor Discos escutando na porta 4000')
})
