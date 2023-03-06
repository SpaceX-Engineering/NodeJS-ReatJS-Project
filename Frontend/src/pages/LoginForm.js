import '../App.css';
import React, { useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userToken, setUserToken] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/usersData/login', { email, password });
            console.log(response.data);
            alert(response.data.message)
            console.log("Your Token is = ", response.data.token, "Your User ID is = ", response.data.userId)
            // console.log("Your User ID is " ,response.data.userId)
            const logToken = response.data.token
            console.log("Get Token When User Login =", logToken)

            // Set Token
            setUserToken(logToken);

            // Save data to local storage
            localStorage.setItem('storageToken', JSON.stringify(logToken));


            console.log('Get Token in State to Use in Other Pages', userToken)
            // empty all field when form submit
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <center>
                <div className="container-login">

                    <h3 >Welcome to Log In Page</h3>
                    <div className="datain-login">
                        <div>
                            <label htmlFor="email">Email:</label><br />
                            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required /><br /><br />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required /><br /><br />
                        </div>
                        <button className="button_ans" type="submit">Log In</button>
                    </div>
                    <span >Need an account?</span><br />
                    <div className="anchor-tag-login"><Link to="Signup">Goto Sign Up Page</Link></div>
                </div>
            </center>
        </form>
    );
};

export default LoginForm;
