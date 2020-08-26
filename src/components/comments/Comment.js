import React from "react";

const Comment = ({comment}) => (
    <>
        <strong className="pull-left primary-font">James</strong>
        <small className="pull-right text-muted">
            <span className="glyphicon glyphicon-time"/>7 mins ago</small>
        <br/>
        <li className="ui-state-default">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
        </li>
        <br/>
    </>
)

export default Comment