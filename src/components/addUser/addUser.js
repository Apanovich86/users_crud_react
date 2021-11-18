import {Link} from 'react-router-dom';
import './addUser.css';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {addUser} from "../../services/usersService";

function AddUser(props) {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const history = useHistory();

    const createUser = () => {
        const user = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            userType: userType,
        };

        addUser(user).then(res => {
            if (res.status === 200) {
                history.push('/');
            }
        })
    }

    return (
        <div>
            <Link to='/'>
                <button className='button-back'>Back to users list</button>
            </Link>
            <form className='form-addUser'>

                <label htmlFor='username'>Username:</label>
                <input required placeholder='username' type='text' className="text-input"
                       onChange={(event) => setUsername(event.target.value)}/>

                <label htmlFor='first_name'>First name</label>

                <input required placeholder='first name' type='text' className="text-input"
                       onChange={(event) => setFirstName(event.target.value)}/>

                <label htmlFor='last_name'>Last name</label>
                <input required placeholder='last name' className="text-input"
                       onChange={(event) => setLastName(event.target.value)}/>

                <label htmlFor='email'>Email</label>
                <input required name='email' placeholder='@' type='text' className="text-input"
                       onChange={(event) => setEmail(event.target.value)}/>

                <label htmlFor='password'>Password</label>
                <input autoComplete='on' name='password' required placeholder='password' type='password'
                       className="text-input" onChange={(event) => setPassword(event.target.value)}/>

                <label htmlFor='user_type'>User type</label>
                <select required onChange={(event) => setUserType(event.target.value)} name='user_type'>
                    <option value=''/>
                    <option value='Admin'>Admin</option>
                    <option value='Driver'>Driver</option>
                </select>
                <button onClick={createUser}>Create</button>
            </form>
        </div>
    );
}

export default AddUser;
