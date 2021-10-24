
// You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

// You should collect the following information from the user:

// First name (text input)
// Last name (text input)
// Age (number input)
// Gender (radio buttons with 2 or more options)
// Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
// Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:

import React from "react"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]:value }) 
  }

  render(){
    return (
      <div className="App">
      <form>
        <h1>Welcome to Bella Air!</h1>
        <label>
        First Name:
        <input
        type="text"
        name="firstName"
        placeholder="first name"
        onChange={this.handleChange}
        value={this.state.firstName}
        ></input> 
        </label>
<br/>
        <label>
        Last Name:
        <input
        type="text"
        name="lastName"
        placeholder="last name"
        onChange={this.handleChange}
        value={this.state.lastName}
        ></input> 
        </label>
<br/>
<label>
        Age:
        <input
        type="number"
        name="age"
        placeholder="age"
        onChange={this.handleChange}
        value={this.state.age}
        ></input> 
        </label>
<br/>
<p>Gender:</p>
        <label>
        Female
        <input
        type="radio"
        name="gender"
        onChange={this.handleChange}
        checked={this.state.gender === "female"}
        value="female"
        ></input> 
        </label>

<br/>
        <label>
        Male
        <input
        type="radio"
        name="gender"
        onChange={this.handleChange}
        checked={this.state.gender === "male"}
        value="male"
        ></input> 
        </label>

<br/>
        <label>
        Trans or Non-Binary
        <input
        type="radio"
        name="gender"
        onChange={this.handleChange}
        checked={this.state.gender === "trans/nonbinary"}
        value="trans/nonbinary"
        ></input> 
        </label>

<br/>
        <label>
        Decline to Answer
        <input
        type="radio"
        name="gender"
        onChange={this.handleChange}
        checked={this.state.gender === "declined"}
        value="declined"
        ></input> 
        </label>    

<br/>
<p>Destination:</p>

        <select
        type="select"
        name="destination"
        onChange={this.handleChange}
        value={this.state.destination}
        >
          <option>Rome</option>
          <option>Florence</option>
          <option>Venice</option>
        </select> 
                 

      </form>
      </div>
    );
  }
}

export default App;
