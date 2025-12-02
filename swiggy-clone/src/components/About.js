import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("Parent Constructor called");
  }

  componentDidMount() {
    // console.log("Parent Mounted");
  }
  render() {
    // console.log("Parent Rendered");
    return (
      <div>
        <h1>About</h1>
        {/* <User name="Riddhik (function)" /> */}
        <UserClass name="Riddhik (class)" location="Mumbai (class)" />
      </div>
    );
  }
}

export default About;
