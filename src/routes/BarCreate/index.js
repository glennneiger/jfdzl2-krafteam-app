import React from 'react';

class BarCreate extends React.Component {

  state = {
    name: '',
    street: '',
    city: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    fetch('https://jfdzl2-krafteam.firebaseio.com/places.json', {
      method: 'POST',
      body: JSON.stringify(this.state)
    })
        .then(response => response.json())
        .then(data => {
      this.props.history.push(`/bar-list`);
      // this.props.history.push(`/bar/${data.name}`);
    });
  }

  render() {
    return(
      <div>
        <h1>Create new Bar</h1>
        <div>
          <div>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>
            Street:
            <input type="text" name="street" onChange={this.handleChange} />
          </div>
          <div>
            City:
            <input type="text" name="city" onChange={this.handleChange} />
          </div>
          <div>
            <button onClick={this.handleSubmit}>Send me please</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BarCreate;