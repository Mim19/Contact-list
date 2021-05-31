import React from 'react';
import UserField from '../UserField/UserField';
import "./userForm.css"

class UserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            phone: '',
            email: '',
            // photoUrl: '',
            isOffline: false,
            users: [],
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
    
    // photoUrlHandler = (e) => {
    //     this.setState({ photoUrl: e.target.value });
    // };

    clickHandler = (e) => {
        e.preventDefault();
        if (!this.state.phone || !this.state.name || !this.state.surname || !this.state.email) {
            alert('Fill in all the fields');
            return;
        }
       
        this.setState({
            name: '',
            surname: '',
            phone: '',
            email: '',
            // photoUrl: '',
            users: this.state.users.concat([
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    phone: this.state.phone,
                    email: this.state.email,
                    // photoUrl: this.state.photoUrl,
                },
            ]),
        });
    };

    render() {
        return (
            <div className="contact">
                <form className="contact__container">
                    <div className="container__item">
                        <label>Name</label>
                        <input
                            value={this.state.name}
                            type="text"
                            onChange={this.nameHandler}
                        />
                    </div>
                    <div className="container__item">
                        <label>Surname</label>
                        <input
                            value={this.state.surname}
                            type="text"
                            onChange={this.surnameHandler}
                        />
                    </div>
                    <div className="container__item">
                        <label>Phone</label>
                        <input
                            value={this.state.phone}
                            type="number"
                            onChange={this.phoneHandler}
                        />
                    </div>
                    <div className="container__item">
                        <label>Email</label>
                        <input
                            value={this.state.email}
                            type="text"
                            onChange={this.emailHandler}
                        />
                    </div>
                    {/* <div className="container__item">
                        <label>PhotoUrl</label>
                        <input
                            value={this.state.email}
                            type="text"
                            onChange={this.photoUrlHandler}
                        />
                    </div> */}
                    <div className="container__item">
                        <button onClick={this.clickHandler}>Add</button>
                    </div>
                    <div>
                        {/* <img src={"https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"} /> */}
                        {/* <img src = {this.props.url} alt='something'/> */}
                    </div>
                </form>
                <div>
                    <UserField users={this.state.users} />
                </div>
            </div>
        );
    }
}

export default UserForm;
