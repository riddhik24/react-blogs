import React from "react";
import UserContext from "../utils/UserContext";
import { CORS_PROXY } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    // count2: 2,
    // };
    // console.log("Child Constructor called");

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    // console.log("Child Mounted");
    const data = await fetch(
      CORS_PROXY + "https://api.github.com/users/riddhik24"
    );

    const json = await data.json();

    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }
  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    // console.log("Child Rendered");
    return (
      <div className="text-center place-items-center m-10">
        <img src={avatar_url} alt="avatar" className="h-[200px]" />

        {/* <h1>Count = {count}</h1> */}
        <h2 className="font-bold">Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @riddhikhere</h4>
        {/* <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold">Logged In User: {loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
