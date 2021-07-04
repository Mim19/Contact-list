import React, { Component } from 'react';

import './alert.css';

class Alert extends Component{
    constructor(){
        super()
    }
    
    render(){
        return(
            <div 
                className="alert alert-primary scale-in-center" 
                role="alert" 
                onClick={this.props.alertHandler}
            > 
                <i className="fas fa-info-circle fa-lg mr-4" />
                {this.props.message}
            </div>
        )
    }
}

export default Alert;
