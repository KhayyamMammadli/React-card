import React, {Component} from 'react';
import Card from "./components/Card";
import Collapse from "./components/Collapse";

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
              <div className="col">
                  {/*  card componentine carTitle atributna dyer verib Card.js de {props.cardTitle} edib cagiriq*/}
                  <Collapse href="collapseExample1">
                      <Card cardTitle="React 1"
                            cardText="Text 1"
                            updatedTime="Last Updated 1"
                            image="https://picsum.photos/id/1/200/300"/>
                  </Collapse>
              </div>
          </div>
        </div>
    );
  }
}

export default App;
