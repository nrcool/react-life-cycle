


import React, { Component } from 'react'
import Header from './components/Header'
import SearchResults from './components/SearchResults'

export default class App extends Component {
  state={
    searchTerm:"",
    lastSearchTerm:"",
    searchname:""
  }

  submitForm=(e)=>{
    e.preventDefault()
    this.setState({
      searchname:this.state.searchTerm
    })

  }

  render() {
    return (
      <div className="App">
         <h1>My React App</h1>
        <Header/>
      <form onSubmit={this.submitForm}>
        <input type="text" onChange={e=>this.setState({searchTerm:e.target.value})}/>
        <button type="submit">search</button>
      </form>
      <SearchResults searchFor={ this.state.searchname}/>
     
    </div>
    )
  }
}


