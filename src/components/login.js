import React, { useState } from "react";
import axiosBaseURL from '../api/httpCommon';

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault();
        const loginPayload = {
            emailId: username,
            password: password,
        };
        // Code to handle login goes here
        axiosBaseURL.post('/Authenticate/userlogin', loginPayload)
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("username", loginPayload.emailId);
                localStorage.setItem("userId", res.data.id);
                if (token) {
                    props.userResp(res.data);
                //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                }
            })
            .catch((err) => console.log(err));

        //props.userResp(res);
        props.toggle();        
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="row col-12">
                    <div className="col-11"><h2>Login</h2></div>
                    <div className="col-1"><img src={require('../images/close.jpg')} alt="close" title="close" className="closeImg" onClick={props.toggle} /></div>
                </div>
                <form onSubmit={handleLogin}>
                    <label>
                        Email ID:
                        <input type="text" value={username} placeholder="Email ID" required onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>
                {/* <button onClick={props.toggle} type="close">Close</button> */}
            </div>
        </div>
    )
}
export default Login;