import React from 'react';
import EditPopup from '../Popup/EditPopup';
import UserField from '../UserField/UserField';
import './userForm.css';
import * as EmailValidator from 'email-validator';

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            phone: '',
            email: '',
            photo: '',
            edit: false,
            isOnline: true,
            users: [],
            editData: {},
            index: '',
        };
    }

    nameHandler = (e) => {
        this.setState({ name: e.target.value });
    };

    surnameHandler = (e) => {
        this.setState({ surname: e.target.value });
    };

    phoneHandler = (e) => {
        this.setState({ phone: e.target.value });
    };

    emailHandler = (e) => {
        this.setState({ email: e.target.value });
    };

    photoHandler = (e) => {
        this.setState({ photo: e.target.value });
    };

    clickHandler = (e) => {
        e.preventDefault();
        if (!this.state.phone || !this.state.name || !this.state.surname || !this.state.email || !this.state.photo) {
            alert('Fill in all the fields');
            return;
        }
        if(!EmailValidator.validate(this.state.email)){
            alert('invalid email');
            this.setState({email: ''});
            return;
        }
        if(this.state.phone.includes(' ')){
           alert('ivalid number');
           return;
        }

        this.setState({
            name: '',
            surname: '',
            phone: '',
            email: '',
            photo: '',
            users: this.state.users.concat([
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    phone: this.state.phone,
                    email: this.state.email,
                    isOnline: this.state.isOnline,
                    photo: this.state.photo
                },
            ]),
        });
    };

    deleteHandler = (index) => {
        let us = [...this.state.users];
        us.splice(index, 1);
        this.setState({ users: us });
    };

    popupHandler = (index) => {
        this.setState({
            edit: !this.state.edit,
            editData: this.state.users[index],
            index,
        });
    };
    closeHandler = () => {
        this.setState({ edit: !this.state.edit });
    };
    editHandler = (e, index, data) => {
        e.preventDefault();
        let newArr = [...this.state.users];
        newArr[index] = data;
        this.setState({ users: newArr });
        this.closeHandler();
    };

    render() {
        return (
            <>
                <div className="box">
                    <form className="userform">
                        <div>
                            <label className="label">Name</label>
                            <input
                                value={this.state.name}
                                type="text"
                                onChange={this.nameHandler}
                            />
                        </div>
                        <div>
                            <label className="label">Surname</label>
                            <input
                                value={this.state.surname}
                                type="text"
                                onChange={this.surnameHandler}
                            />
                        </div>
                        <div>
                            <label className="label">phone</label>
                            <input
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                                value={this.state.phone}
                                type="tel"
                                id="phone"
                                onChange={this.phoneHandler}
                            />
                        </div>
                        <div>
                            <label className="label">email</label>
                            <input
                                value={this.state.email}
                                type="text"
                                onChange={this.emailHandler}
                            />
                        </div>
                        <div>
                            <label className="label">PhotoUrl</label>
                            <input
                                value={this.state.photo}
                                type="text"
                                onChange={this.photoHandler}
                            />
                        </div>
                        <div>
                            <button className="btn" onClick={this.clickHandler}>
                                ADD
                            </button>
                        </div>
                    </form>
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
                        editData={this.state.editData}
                        index={this.state.index}
                        editHandler={this.editHandler}
                    />
                )}
            </>
        );
    }
}

export default UserForm;
