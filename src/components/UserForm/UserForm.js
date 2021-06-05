import React, {Component} from 'react';

import { validate } from '../../config/emailValidation';
import Alert from '../Alert/Alert';
import EditPopup from '../Popup/EditPopup';
import UserField from '../UserField/UserField';
import './userForm.css';
class UserForm extends Component {
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
            index: '',
            message:''
        };
    }

    nameHandler = e => this.setState({ name: e.target.value });

    surnameHandler = e => this.setState({ surname: e.target.value });

    phoneHandler = e => this.setState({ phone: e.target.value });

    emailHandler = e => this.setState({ email: e.target.value });

    photoHandler = e => this.setState({ photo: e.target.value });

    clickHandler = (e) => {
        e.preventDefault();
        if (!this.state.phone 
            || !this.state.name 
            || !this.state.surname 
            || !this.state.email 
            || !this.state.photo) {
            this.setState({
                message: 'Fill in all the fields'
            })
            return;
        }

        if(!((this.state.name.length) || (this.state.surname.length))){
            alert('ivalid')
            return
        }

        if (!validate(this.state.email)){
            alert('invalid e-mail address')
            return
        }

        if(this.state.phone.includes(' ')){
           alert('ivalid number');
           return;
        }

        let res = this.state.photo.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        if(res == null){
            alert('url')
            return
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
                    photo: this.state.photo,
                    index:this.state.index,

                },
            ]),
        });
    };

    deleteHandler = (index) => {
        let us = this.state.users;
        us.splice(index, 1);
        this.setState({ users: us });
    };

    popupHandler = (index) => {
        console.log('index:', index)
        this.setState({
            edit: !this.state.edit,
            index,
        });
    };

    closeHandler = () => {
        this.setState({ edit: !this.state.edit });
    };
    
    editHandler = (e, data) => {
        e.preventDefault();
        let newArr = [...this.state.users];
        newArr[this.state.index] = data;
        this.setState({ users: newArr });
        this.closeHandler();
    };
    
    alertHandler = () => {this.setState({message:''})}

    render() {
        return (
            <>
            {
            this.state.message && <Alert message={ this.state.message} alertHandler={this.alertHandler}/>
            }
                <div className="box slide-in-bottom">
                    <form className="userform">
                        <div>
                            <label className="label">Name</label>
                            <input
                                value={this.state.name}
                                type="text"
                                onChange={this.nameHandler}
                                placeholder="Enter Name"
                            />
                        </div>
                        <div>
                            <label className="label">Surname</label>
                            <input
                                value={this.state.surname}
                                type="text"
                                onChange={this.surnameHandler}
                                placeholder="Enter Surname"
                            />
                        </div>
                        <div>
                            <label className="label">Phone</label>
                            <input
                                type="number"
                                id="phone"
                                placeholder="+374 12345678"
                                value={this.state.phone}
                                onChange={this.phoneHandler}
                            />
                        </div>
                        <div>
                            <label className="label">E-mail</label>
                            <input
                                value={this.state.email}
                                type="text"
                                onChange={this.emailHandler}
                                placeholder="Enter E-mail"
                            />
                        </div>
                        <div>
                            <label className="label">PhotoUrl</label>
                            <input
                                value={this.state.photo}
                                type="text"
                                onChange={this.photoHandler}
                                placeholder="Enter photo url"
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
                        user={this.state.users[this.state.index]}
                        editHandler={this.editHandler}
                    />
                )}
            </>
        );
    }
}

export default UserForm;
