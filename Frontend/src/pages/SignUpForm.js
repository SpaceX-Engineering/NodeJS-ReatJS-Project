import '../App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3005/usersData/signup', { name, email, password });
            console.log(response.data);
            alert(response.data.message)

            // empty all field when form submit
                setName('');
                setEmail('');
                setPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSignUp}>
<center>
            <div className="container">

                <h3 >Welcome to Sign Up Page</h3>
                <div className="datain">
                    <div>
                        <label htmlFor="name">Name:</label><br />
                        <input type="name" id="name" value={name} onChange={(event) => setName(event.target.value)} required /><br /><br />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required /><br /><br />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required /><br /><br />
                    </div>
                    <button className="button_ans" type="submit">Sign Up</button>
                </div>
                <span >Already have an account?</span><br/>
               <div className="anchor-tag"><Link to="/">Goto Log In Page</Link></div>
               </div>
               </center>
        </form>
    );
};

export default SignUpForm;
