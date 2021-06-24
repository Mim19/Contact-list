import React, { Component } from 'react';

import inputs from '../constants/inputs';

import './contactForm.css';


class ContactForm extends Component {
    constructor(props) {
        super(props);
    }

    changeHandler = (e) => {
        this.setState({
            ...this.props.user,
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { 
            clickHandler, 
            action, 
            cancelHandler, 
            user,
        } = this.props;

        return (
            <form
                className="userform" 
                onSubmit={(e) => clickHandler(e, this.state)}
            >
                {inputs.map((input) => {
                    let { name } = input;
                    return (
                        <div key={input.placeholder}>
                            <label>{input.label}</label>
                            <input
                                defaultValue={action === 'Save' ? user[name] : ''}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                onChange={this.changeHandler}
                            />
                        </div>
                    );
                })}
                {action === 'Save' && (
                    <div>
                        <button className="btn" onClick={cancelHandler}>
                            Cancel
                        </button>
                    </div>
                )}
                <div>
                    <button className="btn">{ action }</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
