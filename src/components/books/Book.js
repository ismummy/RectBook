import React from "react";
import "./Book.css";
import {Link} from "react-router-dom";

const Book = ({book}) => (
    <Link to={"/books/" + book.id} className="col-sm-6 col-md-4 col-lg-3 mt-4">\
        <div className="card">
            <img className="card-img-top" src="https://picsum.photos/200/150/?random"/>
            <div className="card-block">
                <h4 className="card-title">Tawshif Ahsan Khan</h4>
                <div className="meta">
                    <a href="#">Friends</a>
                </div>
                <div className="card-text">
                    Tawshif is a web designer living in Bangladesh.
                </div>
            </div>
            <div className="card-footer">
                <span className="float-right">Joined in 2013</span>
                <span><i className=""/>75 Friends</span>
            </div>
        </div>
    </Link>
);

export default Book