import React from "react"

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "Rome",
      vegan: false,
      noGluten: false,
      kosher: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]:value }) 
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Thank you for providing your info!  We look forward to flying with you.")
  }

  render(){
    return (
      <div className="App">
      <form
      name="form"
      onSubmit={this.handleSubmit}
      >
        <h1>Welcome to Lorem Ipsum Air!</h1>
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
<br/>
<p>Dietary Restrictions</p>   
<br/>
        <label>
        Vegan
        <input
        type="checkbox"
        name="vegan"
        onChange={this.handleChange}
        checked={this.state.vegan}
        ></input> 
        </label>     
<br/>
        <label>
        Gluten Free
        <input
        type="checkbox"
        name="noGluten"
        onChange={this.handleChange}
        checked={this.state.noGluten}
        ></input> 
        </label>
<br/>
        <label>
        Kosher
        <input
        type="checkbox"
        name="kosher"
        onChange={this.handleChange}
        checked={this.state.kosher}
        ></input> 
        </label>          
<br/>
      <button
      type="submit"
      >Submit</button>
      </form>
      </div>
    );
  }
}

export default Form;