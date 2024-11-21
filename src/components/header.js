import React, { useState } from "react";
import '../styles.css';
import Login from '../components/login';
import NewPost from '../components/newpost';

function Header() {
    const [seen, setSeen] = useState(false)
    const [newPostSeen, setNewPostSeen] = useState(false)
    const [userResp, setUserResp] = useState({})
    const [userVisible, setUserVisible] = useState(false)

    function togglePop () {
        setSeen(!seen);
    };

    function togglePopPost () {
        const userActive = localStorage.getItem('userId');
        if (userActive) {
            setNewPostSeen(!newPostSeen);
        }
        else {
            setSeen(!seen);
        }
    };

    function makeUserChanges (data) {
        if (data.success)
        {
            setUserVisible(true);
            setUserResp(data);
        }
    };

    function userLogout () {
        setUserVisible(false);
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userId");
    }

    return (
        <div className="bgHeader">
            <div className="row col-md-12">
                <div className="col-md-9">
                    <img src={require('../images/logo.png')} width={"10%"} alt="" />
                </div>
                <div className={!userVisible ? "login newpost loginstyle col-md-3" : "logout newpost loginstyle col-md-3"}>
                    <button type="create" onClick={togglePopPost} className="loginbtn"><i class="bi bi-patch-plus-fill"></i> Create New</button>
                    {userVisible ? <div>
                        <span><b>Hi, {userResp.userName}</b></span>
                        <button type="button" onClick={userLogout} className="loginbtn">LogOut</button>
                    </div>
                    : <button type="button" onClick={togglePop} className="loginbtn">Login</button>}
                    {seen ? <Login toggle={togglePop} userResp={makeUserChanges} /> : null}
                    {newPostSeen ? <NewPost toggle={togglePopPost} userResp={makeUserChanges} /> : null}
                </div>
            </div>
        </div>
    )
}
export default Header;