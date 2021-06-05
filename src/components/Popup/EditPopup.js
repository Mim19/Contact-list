import React, {Component} from 'react';

import './editPopup.css';


const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
class EditPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            surname: this.props.user.surname,
            phone: this.props.user.phone,
            email: this.props.user.email,
            photo: this.props.user.photo,
            isOnline:this.props.user.isOnline
        };
    }
    
    nameHandler = e => this.setState({ name: e.target.value });
    
    surnameHandler = e => this.setState({ surname: e.target.value });

   
    phoneHandler = e => {

        if (rx_live.test(e.target.value))
        this.setState({ phone : e.target.value });
    };


    emailHandler = e => this.setState({ email: e.target.value });

    photolHandler = e => this.setState({ photo: e.target.value });

    render() {
        const { user } = this.props
        
        return (
            <div className="popup">
                <div className="popup_open">
                    <div className="box">
                        <i
                            onClick={this.props.closeHandler} 
                            className="fas fa-times fa-lg iconClose"

                        ></i>
                        <form className="userform">
                            <div>
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    defaultValue={user.name}
                                    onChange={this.nameHandler}
                                />
                            </div>
                            <div>
                                <label className="label">Surname</label>
                                <input
                                    type="text"
                                    defaultValue={user.surname}
                                    onChange={this.surnameHandler}
                                />
                            </div>
                            <div>
                                <label className="label">phone</label>
                                <input
                                    type="number"
                                    id="phone"
                                    maxLength={9}
                                    pattern="[+-]?\d+(?:[.,]\d+)?"
                                    placeholder="Enter amount"
                                    defaultValue={Number(user.phone)}
                                    onChange={this.phoneHandler}
                                />
                            </div>
                            <div>
                                <label className="label">email</label>
                                <input
                                    type="email"
                                    defaultValue={user.email}
                                    onChange={this.emailHandler}
                                />
                            </div>
                            <div>
                                <label className="label">Photo</label>
                                <input
                                    type="text"
                                    defaultValue={user.photo}
                                    onChange={this.photolHandler}
                                />
                            </div>
                            <div>
                                <button
                                    className="btn"
                                    onClick={(e) =>
                                        this.props.editHandler(
                                            e,
                                            this.state
                                        )
                                    }
                                >
                                    SAVE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditPopup;