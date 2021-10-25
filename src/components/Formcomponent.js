import React from 'react'
import Formcontainer from "./Formcontainer"

function Formcomponent(props) {
   
    return (
      <div className="App">
      <form
      name="form"
      onSubmit={props.onSubmit}
      >
        <h1>Welcome to Lorem Ipsum Air!</h1>
        <label>
        First Name:
        <input
        type="text"
        name="firstName"
        placeholder="first name"
        onChange={props.onChange}
        value={props.data.firstName}
        ></input> 
        </label>
<br/>
        <label>
        Last Name:
        <input
        type="text"
        name="lastName"
        placeholder="last name"
        onChange={props.onChange}
        value={props.data.lastName}
        ></input> 
        </label>
<br/>
<label>
        Age:
        <input
        type="number"
        name="age"
        placeholder="age"
        onChange={props.onChange}
        value={props.data.age}
        ></input> 
        </label>
<br/>
<p>Gender:</p>
        <label>
        Female
        <input
        type="radio"
        name="gender"
        onChange={props.onChange}
        checked={props.data.gender === "female"}
        value="female"
        ></input> 
        </label>

<br/>
        <label>
        Male
        <input
        type="radio"
        name="gender"
        onChange={props.onChange}
        checked={props.data.gender === "male"}
        value="male"
        ></input> 
        </label>

<br/>
        <label>
        Trans or Non-Binary
        <input
        type="radio"
        name="gender"
        onChange={props.onChange}
        checked={props.data.gender === "trans/nonbinary"}
        value="trans/nonbinary"
        ></input> 
        </label>

<br/>
        <label>
        Decline to Answer
        <input
        type="radio"
        name="gender"
        onChange={props.onChange}
        checked={props.data.gender === "declined"}
        value="declined"
        ></input> 
        </label>    

<br/>
<p>Destination:</p>

        <select
        type="select"
        name="destination"
        onChange={props.onChange}
        value={props.data.destination}
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
        onChange={props.onChange}
        checked={props.data.vegan}
        ></input> 
        </label>     
<br/>
        <label>
        Gluten Free
        <input
        type="checkbox"
        name="noGluten"
        onChange={props.onChange}
        checked={props.data.noGluten}
        ></input> 
        </label>
<br/>
        <label>
        Kosher
        <input
        type="checkbox"
        name="kosher"
        onChange={props.onChange}
        checked={props.data.kosher}
        ></input> 
        </label>          
<br/>
<p><em>Please review your information before submitting:</em></p>
      <h2>{props.data.firstName} {props.data.lastName}</h2>
      <p>{props.data.age}</p>
      <p>{props.data.gender}</p>
      <p>{props.data.destination}</p>
      <p>Vegan: {props.data.vegan ? "Yes" : "No"}</p>
      <p>Gluten Free: {props.data.noGluten ? "Yes" : "No"}</p>
      <p>Kosher: {props.data.kosher ? "Yes" : "No"}</p>
      
      <button
      type="submit"
      >Submit</button>
      </form>
      </div>
   
    )
}

export default Formcomponent;