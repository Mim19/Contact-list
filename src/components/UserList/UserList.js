import React, { Component } from 'react';

import './userList.css';

class UserList extends Component{
    constructor(){
        super()
    }

    render(){
        const {
            index, 
            user,
            popupHandler, 
            deleteHandler,
        } = this.props;
            
        return(
            <li 
                className="list scale-in-center"
                key={index}
             >
                <div>
                    <i className = {`fas fa-circle ${user.isOnline ? "green" : "gray"}`}/> 
                </div>
                <div>
                    <img 
                        src={user.photo} 
                        alt="image" 
                    />
                </div>
                <div>
                    <span className="name">{user.name}</span>
                    <span className="surname">{user.surname}</span>
                    <span>{user.phone}</span>
                    <span>{user.email}</span>
                </div>
                <div>
                <i 
                    onClick={() => popupHandler(index)}
                    className="fas fa-user-edit fa-lg icon"    
                />
                <i
                    onClick={() => deleteHandler(index)}
                    className="fas fa-user-times fa-lg icon"
                />
                </div>
            </li>
        )
    }
}

export default UserList;
