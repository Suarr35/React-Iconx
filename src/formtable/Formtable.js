import React , { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  

  render() {
    const { name, job } = this.state;

    return (
      <div>
      <h2>Form For Table Contents:-</h2>
      <form>
        <table>
        <tr><td><label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} /> </td> </tr>
        <tr><td><label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} /> </td></tr>

        <input type="button" value="Submit" onClick={this.submitForm} />

        </table>
      </form>
      </div>
      
    );
  }
  
}

export default Form;