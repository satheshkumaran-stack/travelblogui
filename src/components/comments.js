import React, { useState, useEffect } from "react";
import axiosBaseURL from '../api/httpCommon';
import '../css/homeStyle.css';
import Login from "./login";
import AddComments from "./addComments";

function Comments(props) {
    const [commentsList, setCommentsList] = useState([])
    const [addCommentSeen, setAddCommentSeen] = useState(false)
    const [seen, setSeen] = useState(false)
    useEffect(() => {
        const id = props.placeId;        
        axiosBaseURL.get(`/Blog/getplacescomments?placeId=${id}`)
            .then((res) => {
                setCommentsList(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function togglePop () {
        setSeen(!seen);
    };

    function toggleAddCommentPop (e) {
        const userActive = localStorage.getItem('userId');
        if (userActive) {
            setAddCommentSeen(!addCommentSeen);
        }
        else {
            setSeen(!seen);
        }
    };

    function makeUserChanges (data) {
        if (data.success)
        {
            setSeen(!seen);
            setAddCommentSeen(!addCommentSeen);
        }
    }

    return (
        <div className="popup">
            <div className="popup-inner divsize">
                <div className="row col-12">
                    <div className="col-11"><h4>Comments</h4></div>
                    <div className="col-1"><img src={require('../images/close.jpg')} alt="close" title="close" className="closeCommentImg" onClick={props.toggle} /></div>
                </div><br />
                <div className="row col-12">
                    {commentsList.map(item => (
                        <div>
                            <div className="commentstxt">
                            <i class="bi bi-chat-dots-fill"></i><b><i> by </i></b> {item.createdBy}<br /><br />
                                <span className="ml-2 text-primary">{item.comments}</span> 
                            </div>
                            <hr />
                        </div>
                    ))}
                    <button className="btnaddcomment ml-4" type="submit" onClick={toggleAddCommentPop}>Add Comment</button>
                </div>
            </div>
            {addCommentSeen ? <AddComments toggle={toggleAddCommentPop} /> : null}
            {seen ? <Login toggle={togglePop} userResp={makeUserChanges} /> : null}
        </div>
    )
}
export default Comments;