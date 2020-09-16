import React, {useState} from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../firebase';
import { useStateValue } from '../StateProvider';


function Login() {
    const [{user}, dispatch] = useStateValue();

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            history.push("/")
        }). catch(e => alert(e.message));
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            history.push("/")
        }). catch(e => alert(e.message));
    }

    const signOut = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            {user === null ? (
            <div className="login__container">
                <form>
                    <h2>Email:</h2>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h2>Password:</h2>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button onClick={login} type="submit">Sign In</button>
                </form>
                <button onClick={register}>Create a new accont</button>
            </div>) : (
                <div className="login__container">
                    <button onClick={signOut} type="submit">Sign Out</button>
                </div>
            )}
            
        </div>
    )
}

export default Login
