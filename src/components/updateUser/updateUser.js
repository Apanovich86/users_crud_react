import React from 'react';
import { Link } from 'react-router-dom';
import { getUser, updateUser } from '../../services/usersService';

class UpdateUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            user_type: ''
        };
    }

    componentDidMount() {
        getUser(this.state.id).then(user => {
            if(user) {
                this.setState({
                    username: user.username,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    password: user.password,
                    user_type: user.user_type
                });
            }
        })
    }

    updateUser = () => {
        const user = {
            id: parseInt(this.state.id),
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            user_type: this.state.user_type
        };

        updateUser(user).then(res=> {
            if(res.status === 200) {
                this.props.history.push('/');
            }
        })
    }

    render() {
        return (
            <div>
                <Link to='/'>
                    <button className='button-back'>Back to users list</button>
                </Link>
                <form className='form-updateUser'>

                    <label htmlFor='username'>Username:</label>
                    <input required type='text' className="text-input"
                           value={this.state.username} onChange={(event) => this.setState({username: event.target.value})}/>

                    <label htmlFor='first_name'>First name</label>

                    <input required type='text' className="text-input"
                           value={this.state.first_name} onChange={(event) => this.setState({first_name: event.target.value})}/>

                    <label htmlFor='last_name'>Last name</label>
                    <input required className="text-input"
                           value={this.state.last_name} onChange={(event) => this.setState({last_name: event.target.value})}/>

                    <label htmlFor='email'>Email</label>
                    <input required name='email' type='text' className="text-input"
                           value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}/>

                    <label htmlFor='password'>Password</label>
                    <input autoComplete='on' name='password' required type='password'
                           className="text-input"  value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}/>

                    <label htmlFor='user_type'>User type</label>
                    <select required value={this.state.user_type} onChange={(event) => this.setState({user_type: event.target.value})}>
                        <option value=''/>
                        <option value='Admin'>Admin</option>
                        <option value='Driver'>Driver</option>
                    </select>
                    <button onClick={this.updateUser}>Update User</button>
                </form>
            </div>
        );
    }
}

export default UpdateUser;
