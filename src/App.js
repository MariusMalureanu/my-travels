import React, { Component } from "react";
import "./App.css";
import Warsaw from "./Warsaw.jpg"
import Paris from "./Paris.jpg"
import Wien from "./Wien.jpg"

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Travels</h1>
        </header>


        <div className="Container">


          <div className="Poland">
            <Travel
              destination="Warsaw"
              country="Poland"
              distance="1000 km"
              image={Warsaw}
            />
          </div>
          <div className="Austria">
          <Travel
            destination="Wien"
            country="Austria"
            distance="850 km"
            image={Wien}
          />
        </div>
        <div className="France">
          <Travel
            destination="Paris"
            country="France"
            distance="1900 km"
            image={Paris}
          />
        </div>
      </div>
</div>
    );
  }
}

export default App;