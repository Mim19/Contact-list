import React from 'react';
import './userField.css'

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
                        <li key={index}>
                            {item.name} - {item.surname} - {item.phone} - {item.email} 
                            {/* <img src = {this.props.url} alt='something'/> */}
                        </li>
                    );
                })}
            </ul>
        )
    }
}
