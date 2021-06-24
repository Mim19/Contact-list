import React, { Component } from 'react';

import { validate } from '../../util/emailValidation';
import { urlValidate } from '../../util/is-image-url';

import Alert from '../Alert/Alert';
import errorMessages from '../constants/errorMessages';
import EditPopup from '../Popup/EditPopup';
import UserField from '../UserField/UserField';
import ContactForm from '../forms/ContactForm';

import './userForm.css';

class UserForm extends Component {
    constructor() {
        super();
        this.state = {
            edit: false,
            isOnline: true,
            users: [],
            index: '',
            message: '',
            action: "Add",
            isValideUrl: "error",
        };
        
        this.clickHandler = this.clickHandler.bind(this);
    }

    async clickHandler(e, data) {
        const { name, surname, email, photo, phone } = data;
        e.preventDefault();

        if (!phone 
            || !name 
            || !surname 
            || !email 
            || !photo) {
            this.setState({
                message: errorMessages.fill,
            });
            return;
        }

        if (!(name.length || surname.length)) {
            this.setState({ message: errorMessages.name });
            return;
        }
        
        if (!validate(email)) {
            this.setState({ message: errorMessages.email });
            return;
        }
        
        if (phone.includes(' ')) {
            this.setState({ message: errorMessages.phone });
            return;
        }

        const res = await urlValidate(photo);
        this.setState({isValideUrl: res});
        
        if (this.state.isValideUrl !== 'success') {
            this.setState({ message: errorMessages.photo });
            return;
        }

        this.setState({
            users: this.state.users.concat([
                {
                    name,
                    surname,
                    phone,
                    email,
                    isOnline: this.state.isOnline,
                    photo,
                    index: this.state.index,
                },
            ]),
        });
    }

    deleteHandler = (index) => {
        let del = window.confirm("Are you sure you want to delete?");
        if (!del) {
            return;
        } else {
            let us = this.state.users;
            us.splice(index, 1);
            this.setState({ users: us });
        }
    };

    popupHandler = (index) => {
        this.setState({
            edit: !this.state.edit,
            action: "Save",
            index,
        });
    };

    closeHandler = () => {
        this.setState({ 
            action: "Add",
            edit: !this.state.edit,
        });
    };

    editHandler = (e, data) => {
        e.preventDefault();
        let newArr = [...this.state.users];
        newArr[this.state.index] = data;
        this.setState({ 
            users: newArr,
            action: "Add",
        });
        this.closeHandler();
    };

    alertHandler = () => {
        this.setState({ message: '' });
    };

    render() {
        return (
            <>
                {this.state.message && (
                    <Alert
                        message={this.state.message}
                        alertHandler={this.alertHandler}
                    />
                )}
                <div className="box">
                    <ContactForm
                        cancelHandler={() => {}}
                        clickHandler={this.clickHandler}
                        action={this.state.action}
                        user={{}}
                    />
                </div>
                <div>
                    <UserField
                        users={this.state.users}
                        deleteHandler={this.deleteHandler}
                        popupHandler={this.popupHandler}
                    />
                </div>
                {this.state.edit && (
                    <EditPopup
                        closeHandler={this.closeHandler}
                        user={this.state.users[this.state.index]}
                        editHandler={this.editHandler}
                        action={this.state.action}
                    />
                )}
            </>
        );
    }
}

export default UserForm;
