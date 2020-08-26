import React from "react";
import './Comment.css'
import Comment from "./Comment";

const Comments = ({comments}) => (
    <div className="col-lg-12 col-sm-12 text-center">
        <div className="well">
            <h5 className="section-title h1">What is on your mind?</h5>
            <div className="input-group">
                <input type="text" id="userComment" className="form-control input-sm chat-input"
                       placeholder="Write your message here..."/>
                <span className="input-group-btn">
            <a href="#" className="btn btn-primary btn-sm">
                <span className="glyphicon glyphicon-comment"/> Add Comment
            </a>
        </span>
            </div>
            <hr data-brackets-id="12673"/>
            <ul data-brackets-id="12674" id="sortable" className="list-unstyled ui-sortable">
                <Comment comment={"jk"}/>
                <Comment comment={"jk"}/>
                <Comment comment={"jk"}/>
                <Comment comment={"jk"}/>
            </ul>
        </div>
    </div>
)

export default Comments