import React, { Component } from 'react'
import Table from './Table'

/*
class Tbl extends Component {
  render() {
    return (
      <div className="container">
        <h1>Table...</h1>
      <Table />
    </div>
    )
  }
}

export default Tbl  */

/*  //Table row delete
class Tbld extends Component {
  state = {
      characters : [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }

    removeCharacter = (index) => {
      const { characters } = this.state
    
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }

    render() {
      const { characters } = this.state
    
      return (
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
     
        </div>
      )
    }
  }   

  export default Tbld */

import Form from './Formtable'    //Form Table

class Tableform extends Component {
  state = {
      characters : [    ]
  }

    removeCharacter = (index) => {
      const { characters } = this.state
    
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
      })
    }

    handleSubmit = (character) => {
      this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
      const { characters } = this.state
    
      return (
        <div className="container">
          <h1> TABLE and FORM</h1>

          <Table characterData={characters} removeCharacter={this.removeCharacter} />

          <Form handleSubmit={this.handleSubmit} />

        </div>
      )
    }
  }   

export default Tableform 