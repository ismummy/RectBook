import React, {useState, useEffect} from "react";
import './BookDetail.css'
import {useParams} from "react-router-dom"
import Character from "../components/characters/Character";
import Comments from "../components/comments/Comments";
import Services from "../network/Services";


const BookDetail = () => {
    const [book, setBook] = useState();
    const {id} = useParams();

    useEffect(() => {
        Services.get("/books/" + id)
            .then(res => {
                if (res.data.error === false) {
                    console.log(res.data.data)
                    setBook(res.data.data)
                }
            }).catch(error => {
            console.log(error)
        })
    }, []);
    let characters = '';
    let details = '';
    if (book) {
        characters = book.characters.map(character => <Character character={character} key={character.id}/>)
        details = (
            <div className="wrapper">
                <div className="header">{book.name}</div>
                <div className="banner-img">
                    <img src="https://picsum.photos/640/360/?random" alt="Image 1"/>
                </div>
                <div className="dates">
                    <div className="start">
                        <strong>Released</strong> {book.released}
                        <span/>
                    </div>
                    <div className="ends">
                        <strong>Publisher</strong> {book.publisher}
                    </div>
                </div>
                <h5 className="section-title h1">Characters</h5>
                <div className="row">
                    {characters}
                </div>
                <Comments comments={book.comments}/>
                <div className="footer">
                    <p>Developed by: Ismummy</p>
                </div>
            </div>);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="tile">
                        {details}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BookDetail;