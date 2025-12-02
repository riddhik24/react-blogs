import React from "react";

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
    const data = await fetch("https://api.github.com/users/riddhik24");

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
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />

        {/* <h1>Count = {count}</h1> */}
        <h2>Name: {name}</h2>
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
      </div>
    );
  }
}

export default UserClass;
