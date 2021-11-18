import React from 'react';
import {deleteUser, getUsers} from '../../services/usersService';
import "./getUsers.css";

class GetUsers extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        getUsers().then(users => {
            console.log(users);
            if (users != null) {
                this.setState({
                    users: users
                });
            }
        })
    }

    deleteUser = (id) => {
        deleteUser(id).then(res => {
            if (res.status === 200) {
                getUsers().then(users => {
                    if (users != null) {
                        this.setState({
                            users: users
                        });
                    }
                })
            }
        })
    }

    render() {
        return (
            <div className='user-container'>
                    <tr>
                        <td className='titles'>
                            USERNAME
                        </td>
                        <td className='titles'>
                            FIRST NAME
                        </td>
                        <td className='titles'>
                            LAST NAME
                        </td>
                        <td className='titles'>
                            EMAIL
                        </td>
                        <td className='titles'>
                            USER TYPE
                        </td>
                    </tr>

                {this.state.users.map(user =>
                    <div className='one-user'>
                        <div className='user-field'>
                            <tr >
                               <td className='user-field'>
                                   {user.username}
                               </td>
                                <td className='user-field'>
                                    {user.first_name}
                                </td>
                                <td className='user-field'>
                                    {user.last_name}
                                </td>
                                <td className='user-field'>
                                    {user.email}
                                </td>
                                <td className='user-field'>
                                    {user.user_type}
                                </td>
                            </tr>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default GetUsers;


