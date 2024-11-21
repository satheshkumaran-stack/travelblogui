import React, { useState } from "react";
import axiosBaseURL from '../api/httpCommon';
import '../styles.css';

function NewPost(props) {
    const [place, setPlace] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState();
    
    const saveFile = (e) => {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
    
    function handleNewPost(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("placeName", place);
        formData.append("description", description);
        formData.append("formFile", file);
        formData.append("fileName", fileName);
        formData.append("createdBy", localStorage.getItem("userId"));
        
        const token = localStorage.getItem("token");
        const headers = { 'Authorization': `Bearer ${token}`, "Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Credentials" : true };
        
        axiosBaseURL.post('/Blog/newpostsave', formData, { headers })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));

        props.toggle();        
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="row col-12">
                    <div className="col-11"><h2>Create Post</h2></div>
                    <div className="col-1"><img src={require('../images/close.jpg')} alt="close" title="close" className="closeImg" onClick={props.toggle} /></div>
                </div>
                <form onSubmit={handleNewPost}>
                    <label>
                        Add Image
                        <input type="file" required accept="image/*" onChange={saveFile} />
                    </label>
                    <label>
                        Place:
                        <input type="text" value={place} placeholder="Name of the place" required onChange={e => setPlace(e.target.value)} />
                    </label>
                    <label>
                        Description: <br />
                        <textarea type="text" rows="4" cols="70" value={description} placeholder="Describe about the place" required onChange={e => setDescription(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default NewPost;