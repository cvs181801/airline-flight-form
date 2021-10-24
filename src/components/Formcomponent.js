import React from 'react'
import Formcontainer from "./components/Formcontainer"

export default function Formcomponent(props) {
    return (
        <div>
             return (
      <div className="App">
      <form
      name="form"
      onSubmit={props.handleSubmit}
      >
        <h1>Welcome to Lorem Ipsum Air!</h1>
        <label>
        First Name:
        <input
        type="text"
        name="firstName"
        placeholder="first name"
        onChange={props.handleChange}
        value={props.state.firstName}
        ></input> 
        </label>
<br/>
        <label>
        Last Name:
        <input
        type="text"
        name="lastName"
        placeholder="last name"
        onChange={props.handleChange}
        value={props.state.lastName}
        ></input> 
        </label>
<br/>
<label>
        Age:
        <input
        type="number"
        name="age"
        placeholder="age"
        onChange={props.handleChange}
        value={props.state.age}
        ></input> 
        </label>
<br/>
<p>Gender:</p>
        <label>
        Female
        <input
        type="radio"
        name="gender"
        onChange={props.handleChange}
        checked={props.state.gender === "female"}
        value="female"
        ></input> 
        </label>

<br/>
        <label>
        Male
        <input
        type="radio"
        name="gender"
        onChange={props.handleChange}
        checked={props.state.gender === "male"}
        value="male"
        ></input> 
        </label>

<br/>
        <label>
        Trans or Non-Binary
        <input
        type="radio"
        name="gender"
        onChange={props.handleChange}
        checked={props.state.gender === "trans/nonbinary"}
        value="trans/nonbinary"
        ></input> 
        </label>

<br/>
        <label>
        Decline to Answer
        <input
        type="radio"
        name="gender"
        onChange={props.handleChange}
        checked={props.state.gender === "declined"}
        value="declined"
        ></input> 
        </label>    

<br/>
<p>Destination:</p>

        <select
        type="select"
        name="destination"
        onChange={props.handleChange}
        value={props.state.destination}
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
        onChange={props.handleChange}
        checked={props.state.vegan}
        ></input> 
        </label>     
<br/>
        <label>
        Gluten Free
        <input
        type="checkbox"
        name="noGluten"
        onChange={props.handleChange}
        checked={props.state.noGluten}
        ></input> 
        </label>
<br/>
        <label>
        Kosher
        <input
        type="checkbox"
        name="kosher"
        onChange={props.handleChange}
        checked={props.state.kosher}
        ></input> 
        </label>          
<br/>
      <button
      type="submit"
      >Submit</button>
      </form>
      </div>
    );
        </div>
    )
}
