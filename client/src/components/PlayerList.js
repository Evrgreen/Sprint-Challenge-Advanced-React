import React from "react";
import axios from "axios";

class PlayerList extends React.Component {
  constructor() {
    super();
    this.state = { players: ["andre"] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return <div>{this.state.players}</div>;
  }
}
export default PlayerList;
