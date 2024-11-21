import React, { useEffect, useState } from "react";
import '../styles.css';
import axiosBaseURL from '../api/httpCommon';
import '../css/homeStyle.css';
import Comments from "./comments";

function LandingPage() {
    const [placesResp, setPlacesResp] = useState([]);
    const [seen, setSeen] = useState(false)
    const [placeId, setPlaceId] = useState("")

    function toggleCommentPop (e) {
        setPlaceId(e.target.id);
        setSeen(!seen);
    };

    useEffect(() => {
        axiosBaseURL.get('/Blog/gettouristplaces')
            .then((res) => {
                setPlacesResp(res.data);
                //visitPlaceGrid(res.data);

            })
            .catch((err) => console.log(err));

    }, []);


    return (
        <div className="row col-12">
            {placesResp.map(item => (
                <div className="col-6 mt-3 shadowbox" id="img-wrapper1">
                   <div className="col-12 divstyle">
                   <div className="col-5">
                        <ul className="placesul">
                            <img className="placesimg" src={`data:image/jpeg;base64,${item.fileData}`} alt="" />    
                        </ul>
                        <b><i>by </i></b>
                        <span className="spandate" title={"Created On " + item.createdDate}>{item.createdBy}</span>
                        <i class="bi bi-chat-dots-fill"></i>
                        <a href="#" className="atag" title="View Comments" id={item.id} onClick={toggleCommentPop}> {item.commentsCount} Comments</a>   
                        
                    </div>
                   <div className="col-7 placespan">{item.description}</div>
                   </div>
                </div>
            ))}
            {seen ? <Comments toggle={toggleCommentPop} placeId={placeId} /> : null}
        </div>
    );
}
export default LandingPage;