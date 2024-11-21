import React, { useState } from "react";
import '../css/homeStyle.css';

function AddComments(props) {
    const [name, setName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [comment, setComment] = useState('')


    function handleSubmit(e) {
        e.preventDefault();

    }
    return (
        <div className="popup">
            <div className="popup-inner divsize">
                <div className="row col-12">
                    <div className="col-11"><h4>Your Comments</h4></div>
                    <div className="col-1"><img src={require('../images/close.jpg')} alt="close" title="close" className="closeCommentImg" onClick={props.toggle} /></div>
                </div>
                <div className="row col-12">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={name} placeholder="Name" required onChange={e => setName(e.target.value)} />
                        </label>
                        <label>
                            Email ID:
                            <input type="email" value={emailId} placeholder="Email ID" required onChange={e => setEmailId(e.target.value)} />
                        </label>
                        <label>
                            Comments:
                            <textarea type="text" rows="4" cols="70" value={comment} placeholder="Enter your comments" required onChange={e => setComment(e.target.value)} />
                        </label>
                        <button type="submit">Submit Comment</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddComments;