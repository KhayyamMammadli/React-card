//ilk conustractor calisir --> state  initialization
//render ilkdefa calisdi
//onclick eventi calisti
//onclick calisaraq showMore metodnu isletdi

//showmore calisaraq setstate update etdi --> triggerer render edir

import React from 'react';

class  Collapse extends React.Component{
    constructor() {
        super();

        this.state = {
            showContent: false
        }

        // this.showMore = this.showMore.bind(this)
    }

    showMore = () => {
        this.setState({showContent: !this.state.showContent})
    }


    // componentDidMount() {
    //     console.log('Component Olusturuldu')
    // }
    //
    // componentDidUpdate() {
    //     console.log('Component Yenilendi')
    // }



    // showMore = () => {
    //     this.setState({showContent: true})
    // }



    render(){
        return(
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore}>
                    {this.props.children.props.cardTitle}
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show">
                            {this.props.children}
                        </div>
                    ) : null
                }

            </div>
        );
    }
};




export default Collapse;