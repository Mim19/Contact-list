import React, { Component } from 'react';

import {v4 as uuidv4} from 'uuid';

import UserList from '../UserList/UserList';

import './userField.css';

class UserField extends Component {
    constructor() {
        super();
    }

    render() {
        const { users } = this.props;
        return (
            <ul>
                {users.map((item, index) => (
                    <UserList 
                        key={uuidv4()} 
                        user={item} 
                        index={index} 
                        deleteHandler={ () => this.props.deleteHandler(index)} 
                        popupHandler={()=>  this.props.popupHandler(index)}/>
                    )
                )}
            </ul>
        );
    }
}

export default UserField;
