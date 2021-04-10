import React from 'react';
import ReactDOM from 'react-dom';

import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () =>{
    return (
        <div className="container">
            <div className="row">
                <div className="card-group">
                    <div className="col">
                        {/*  card componentine carTitle atributna dyer verib Card.js de {props.cardTitle} edib cagiriq*/}
                        <Collapse href="collapseExample1">
                            <Card cardTitle="React 1"
                                  cardText="Text 1"
                                  updatedTime="Last Updated 1"
                                  image="https://picsum.photos/id/1/200/300"/>
                        </Collapse>
                    </div>
                    <div className="col">
                        {/*  card componentine carTitle atributna dyer verib Card.js de {props.cardTitle} edib cagiriq*/}
                        <Collapse href="collapseExample2">
                            <Card cardTitle="React 2"
                                  cardText="Text 2"
                                  updatedTime="Last Updated 2"
                                  image="https://picsum.photos/id/1/200/300"/>
                        </Collapse>
                    </div>
                    <div className="col">
                        {/*  card componentine carTitle atributna dyer verib Card.js de {props.cardTitle} edib cagiriq*/}
                        <Collapse href="collapseExample3">
                            <Card cardTitle="React 3"
                                  cardText="Text 3"
                                  updatedTime="Last Updated 3"
                                  image="https://picsum.photos/id/1/200/300"/>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

