import React from "react";
import "./Book.css";
import {Link} from "react-router-dom";

const Book = ({book}) => {
    const authors = book.authors.map(author => <p> {author.name} |</p>)
    return (
        <Link to={"/books/" + book.id} className="col-sm-6 col-md-4 col-lg-3 mt-4">\
            <div className="card">
                <img className="card-img-top" src="https://picsum.photos/200/150/?random"/>
                <div className="card-block">
                    <h4 className="card-title">{book.name}</h4>
                    <div className="meta">
                        {authors}
                    </div>
                    <div className="card-text">
                        Published by {book.publisher} at {book.country} with
                        isbn {book.isbn} in {book.mediaType} of {book.numberOfPages} pages
                        and {book.characters_count} characters.
                    </div>
                </div>
                <div className="card-footer">
                    <span className="float-right">Released: {book.released}</span>
                    <span><i className=""/>{book.comments_count} Commennts</span>
                </div>
            </div>
        </Link>
    )
};

export default Book