import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";

import { Modal } from "react-responsive-modal";
import ProfilPhoto from "./image/profilPhoto.jpg";
import Profil from "./Components/Profile/Profil";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Med Saad Othman",
      bio:
        "I am a web Dev ",
      imgSrc: ProfilPhoto,
      profession: "Fullstack js",
    },
    show: false,
    date: new Date(),
  };
  componentDidMount() {
    this.timer = setInterval(() => this.refrechDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  refrechDate() {
    this.setState({
      date: new Date(),
    });
  }
  onOpenModal = () => {
    this.setState({ show: true });
  };
  onCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { show, date } = this.state;
    return (
      <React.Fragment>
        <div className="date-container">
          <h2>It's : {date.toLocaleTimeString()}</h2>
        </div>
        <div className="App">
          <h1 style={{ color: "#3fb0ac" }}>Welcome to My Website</h1>
          <p>Press the Button to Show the Profile </p>
          <div>
            <i className="fas fa-level-down-alt"></i>
          </div>

          <button className="btn" onClick={this.onOpenModal}>
            Show Profile
          </button>
          <Modal open={show} onClose={this.onCloseModal} center>
            <Profil persone={this.state.Person}/>
          </Modal>

        </div>
      </React.Fragment>
    );
  }
}

export default App;