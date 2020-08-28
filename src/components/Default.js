import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 text-center text-uppercase pt-5 text-title">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h3>Page not found 
                        <span className="text-danger">
                            {this.props.location.pathname}
                        </span>{" "}</h3>
                    </div>
                </div>
            </div>
        )
    }
};
