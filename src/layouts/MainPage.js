import React, {useState, useEffect} from "react";
import Book from "../components/books/Book";
import Services from "../network/Services";

const MainPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        Services.get("/books")
            .then(res => {
                if (res.data.error === false) {
                    console.log(res.data.data)
                    setBooks(res.data.data)
                }
            }).catch(error => {
            console.log(error)
        })
    }, [])

    const displayBooks = books.map(book => <Book book={book} key={book.id}/>)
    return (
        <div className="container-fluid">
            <div className="section">
                <h5 className="section-title h1">Books Library</h5>
            </div>
            <div className="row">
                {displayBooks}
            </div>
        </div>
    )
}


export default MainPage;