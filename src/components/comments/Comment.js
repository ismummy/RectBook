import React from "react";
import ReactTimeAgo from 'react-time-ago'

const Comment = ({comment}) => (
    <>
        <strong className="pull-left primary-font">{comment.name}</strong>
        <small className="pull-right text-muted">
            <span className="glyphicon glyphicon-time"/><ReactTimeAgo date={comment.created_at}/></small>
        <br/>
        <li className="ui-state-default">{comment.comment}
        </li>
        <br/>
    </>
)

export default Comment