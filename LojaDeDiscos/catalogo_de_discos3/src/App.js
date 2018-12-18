import React, { Component } from 'react'
import './App.css'


function searchingFor(searchTerm){
  return function(param){
    return param.Artista.toLowerCase().includes(searchTerm.toLowerCase()) || param.Album.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm
  }
}

class App extends Component {

  state = {
      discos: [],
      disco: {
        Artista: 'Artista',
        Artista1: 'Artista1',
        Album: ' Album',
        Album1: 'Album1'
      },
      searchTerm: ''
    }
    searchHandler = this.searchHandler.bind(this)



  componentDidMount(){
    this.getDiscos()
  }

  getDiscos = _ => {
    fetch('http://localhost:4000/Discos')
      .then(response => response.json())
      .then(response => this.setState({ discos: response.data}))
      .catch(err => console.error(err))
  }

  addDisco = _ => {
    const {disco} = this.state
    fetch(`http://localhost:4000/Discos/add?Artista=${disco.Artista}&Album=${disco.Album}`)
      .then(this.getDiscos)
      .catch(err => console.error(err))
  }

  delDisco = _ => {
    const {disco} = this.state
    fetch(`http://localhost:4000/Discos/del?Album=${disco.Album}`)
      .then(this.getDiscos)
      .catch(err => console.error(err))
  }

  updDisco0 = _ => {
    const {disco} = this.state
    fetch(`http://localhost:4000/Discos/upd/Artista?Artista0=${disco.Artista}&Artista1=${disco.Artista1}`)
      .then(this.getDiscos)
      .catch(err => console.error(err))
  }

  updDisco1 = _ => {
    const {disco} = this.state
    fetch(`http://localhost:4000/Discos/upd/Album?Album0=${disco.Album}&Album1=${disco.Album1}`)
      .then(this.getDiscos)
      .catch(err => console.error(err))
  }

  searchHandler(event){
    this.setState({searchTerm: event.target.value})
  }


  renderDiscos = ({id, Artista, Album}) => <div key={id}>{Artista} - {Album}</div>



  render(){
    const {discos, disco, searchTerm} = this.state
    return (

      <div className="App">
      <h1>Busca na Coleção</h1>
        <form>
          O que deseja buscar?<input type="text"
                onChange={this.searchHandler}

          />
        </form>
        <h1>Discos na Coleção</h1>
        <h2>Artista - Album</h2>
        {discos.filter(searchingFor(searchTerm)).map(this.renderDiscos)}
        <div className="Inserir">
          <h1>Inserir Novo Disco: </h1>digitar:
          <input
            value={disco.Artista}
            onChange={e => this.setState({disco: {...disco, Artista: e.target.value}})}
          />
          <input
            value={disco.Album}
            onChange={e => this.setState({disco: {...disco, Album: e.target.value}})}
          />
          <button onClick={this.addDisco}>Add Disco</button>
        </div>

        <div className="Remover">
          <h1>Excluir Disco: </h1>digitar:
          <input
            value={disco.Album}
            onChange={e => this.setState({disco: {...disco, Album: e.target.value}})}
          />
          <button onClick={this.delDisco}>Delete Disco</button>
        </div>

        <div className="Editar">
          <h1>Editar Informações do Disco: </h1>
          <h3>Artista</h3>sobreescrever em:
          <input
            value={disco.Artista}
            onChange={e => this.setState({disco: {...disco, Artista: e.target.value}})}
          />
          o seguinte:
          <input
            value={disco.Artista1}
            onChange={e => this.setState({disco: {...disco, Artista1: e.target.value}})}
          />
          <button onClick={this.updDisco0}>Atualizar Disco</button>

          <h3>Album</h3>sobreescrever em:
          <input
            value={disco.Album}
            onChange={e => this.setState({disco: {...disco, Album: e.target.value}})}
          />
          o seguinte:
          <input
            value={disco.Album1}
            onChange={e => this.setState({disco: {...disco, Album1: e.target.value}})}
          />
          <button onClick={this.updDisco1}>Atualizar Disco</button>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

    )
  }
}


export default App
