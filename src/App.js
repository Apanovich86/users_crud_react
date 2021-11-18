import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AddUser from "./components/addUser/addUser";
import UpdateUser from "./components/updateUser/updateUser";
import GetUsers from "./components/getUsers/getUsers";

function App() {
    return (
        <div className="App">
            <Router>
                <Link to='/add-user'>
                    <button className='button-create'>Create</button>
                </Link>
                <Route exact path="/" component={GetUsers}/>
                <Switch>

                    <Route exact path="/add-user" component={AddUser}/>
                    <Route exact path="/update-user/:id" component={UpdateUser}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
