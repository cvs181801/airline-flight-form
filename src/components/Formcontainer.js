import React from "react"
import Formcomponent from "./components/Formcomponent"

class Formcontainer extends React.Component {
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

        render() {
                return(
                <Formcomponent
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                {...this.state}
                />
                )
        }
}

export default Formcontainer;