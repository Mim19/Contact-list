import React from 'react';
import './userField.css';

export default class UserField extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { users } = this.props;
        return (
            <ul>
                {users.map((item, index) => {
                    return (
                        <li className="list" key={index}>
                            <div>
                                <img src={item.photo} alt="image" style={{height: "50px"}}/>
                            </div>
                            <div>
                                {item.isOnline ? <i className="fas fa-circle green"></i> : <i className="fas fa-circle gray"></i>}
                                <span> {item.name} </span>
                                <span> {item.surname} </span>
                                <span> {item.phone} </span>
                                <span> {item.email} </span>
                            </div>
                            <div>
                                <i
                                    onClick={() =>
                                        this.props.popupHandler(index)
                                    }
                                    className="fas fa-user-edit fa-lg icon"
                                ></i>
                                <i
                                    onClick={() =>
                                        this.props.deleteHandler(index)
                                    }
                                    className="fas fa-user-times fa-lg icon"
                                ></i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

