import React from "react";
import axios from "axios";

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { players: [] };
  }

  componentDidMount() {
    // this.setState({ players: props.playersData });
    axios
      .get("http://localhost:5000/api/players")
      .then((response) => {
        console.log(response.data);
        this.setState({ players: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.players.map((player) => {
          return (
            <div key={player.id}>
              <h1>{player.name}</h1>
              <p>{player.country}</p>
              <p>{player.searches}</p>
              <p>{player.id}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default PlayerList;
