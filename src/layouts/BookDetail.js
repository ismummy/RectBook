import React, {useState, useEffect} from "react";
import './BookDetail.css'
import {useParams} from "react-router-dom"
import Character from "../components/characters/Character";
import Comments from "../components/comments/Comments";
import Services from "../network/Services";


const BookDetail = () => {
    const [book, setBook] = useState([]);
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
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="tile">
                        <div className="wrapper">
                            <div className="header">Event Title</div>

                            <div className="banner-img">
                                <img src="https://picsum.photos/640/360/?random" alt="Image 1"/>
                            </div>

                            <div className="dates">
                                <div className="start">
                                    <strong>STARTS</strong> 12:30 JAN 2015
                                    <span/>
                                </div>
                                <div className="ends">
                                    <strong>ENDS</strong> 14:30 JAN 2015
                                </div>
                            </div>

                            <h5 className="section-title h1">Characters</h5>
                            <div className="row">
                                <Character character={'jj'}/>
                                <Character character={'jj'}/>
                                <Character character={'jj'}/>
                                <Character character={'jj'}/>
                                <Character character={'jj'}/>
                            </div>
                            <Comments comments={"klk"}/>
                            <div className="footer">
                                <p>Ismummy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BookDetail;