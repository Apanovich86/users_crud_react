import "./viewUser.css";

export function ViewUser({user}) {
    const {username, first_name, last_name, email, user_type} = user;
    return (
        <div className='viewUser'>
            <div>{username}</div>
            <div>{first_name}</div>
            <div>{last_name}</div>
            <div>{email}</div>
            <div>{user_type}</div>
        </div>
    )
}
