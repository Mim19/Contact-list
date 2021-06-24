import React, { Component } from 'react';

import ContactForm from '../forms/ContactForm';

import './editPopup.css';

class EditPopup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            closeHandler, 
            editHandler, 
            action,
        } = this.props;
        
        return (
            <div className="popup">
                <div className="popup_open">
                    <div className="box">
                        <ContactForm
                            cancelHandler = {closeHandler}
                            clickHandler={editHandler}
                            action={action}
                            user={this.props.user}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditPopup;
