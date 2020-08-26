import React from "react";
import './Comment.css'
import Comment from "./Comment";
import Services from "../../network/Services";

const Comments = ({comments, bookId}) => {
    const [comment, setComment] = React.useState("")

    const commentts = comments.map(comment => <Comment comment={comment} key={comment.id}/>)
    const handleSubmit = e => {
        e.preventDefault();
        Services.post(`/books/${bookId}/comments`, {comment})
            .then(res => {
                if (res.data.error === false) {
                    console.log(res.data.data)
                    setComment('')
                    comments.unshift(res.data.data);
                }
            }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="col-lg-12 col-sm-12 text-center">
            <div className="well">
                <h5 className="section-title h1">What is on your mind?</h5>
                <div className="input-group">
                    <input type="text"
                           id="userComment"
                           className="form-control input-sm chat-input"
                           placeholder="Write your message here..."
                           value={comment}
                           onChange={e => setComment(e.target.value)}
                    />
                    <span className="input-group-btn" onClick={handleSubmit}>
                        <a href="#" className="btn btn-primary btn-sm">
                            <span className="glyphicon glyphicon-comment"/> Add Comment
                        </a>
                    </span>
                </div>
                <hr data-brackets-id="12673"/>
                <ul data-brackets-id="12674" id="sortable" className="list-unstyled ui-sortable">
                    {commentts}
                </ul>
            </div>
        </div>
    )
}

export default Comments