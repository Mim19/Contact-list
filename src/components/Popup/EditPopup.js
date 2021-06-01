import React from 'react';
import './editPopup.css';

export default class EditPopup extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            phone: '',
            email: '',
            photo: '',
            // isOnline: this.props.editData.isOnline
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
    photolHandler = (e) => {
        this.setState({ photo: e.target.value });
    };
    render() {
        console.log(this.props)
        return (
            <div className="popup">
                <div className="popup_open">
                    <div className="box">
                        <form className="userform">
                            <div>
                                <label className="label">Name</label>
                                <input
                                    type="text"
                                    defaultValue={this.props.editData.name}
                                    onChange={this.nameHandler}
                                />
                            </div>
                            <div>
                                <label className="label">Surname</label>
                                <input
                                    type="text"
                                    defaultValue={this.props.editData.surname}
                                    onChange={this.surnameHandler}
                                />
                            </div>
                            <div>
                                <label className="label">phone</label>
                                <input
                                    type="number"
                                    defaultValue={this.props.editData.phone}
                                    onChange={this.phoneHandler}
                                />
                            </div>
                            <div>
                                <label className="label">email</label>
                                <input
                                    type="email"
                                    defaultValue={this.props.editData.email}
                                    onChange={this.emailHandler}
                                />
                            </div>
                            <div>
                                <label className="label">Photo</label>
                                <input
                                    type="text"
                                    defaultValue={this.props.editData.photo}
                                    onChange={this.photolHandler}
                                />
                            </div>
                            <div>
                                <button
                                    className="btn"
                                    onClick={(e) =>
                                        this.props.editHandler(
                                            e,
                                            this.props.index,
                                            this.state
                                        )
                                    }
                                >
                                    SAVE
                                </button>
                            </div>
                        </form>
                        <i
                            onClick={this.props.closeHandler}
                            className="fas fa-times fa-lg icon"
                        ></i>
                    </div>
                </div>
            </div>
        );
    }
}
