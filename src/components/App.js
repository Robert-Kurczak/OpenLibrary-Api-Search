import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import Book from "./BookTable/Book"
import BookTable from "./BookTable/BookTable";

import "../styles/App.css"

function App(){
    //array of books components build from fetched FPI
    const [bookList, setBooksList] = useState();
    const [searchBtnLabel, setSearchBtnLabel] = useState("Search");

    //main function for fetching data from Open Library Search API
    const callApi = (phrase,  limit=20) => {
        if(phrase === "") return;

        setSearchBtnLabel("Searching...");

        fetch("http://openlibrary.org/search.json?title=" + phrase.replace(" ", "+") + "&limit=" + limit)
        .then((response) => response.json())
        .then((data) => {
            //Processing data
            //building app components from fetched API
            const books = data.docs.map((book, index) =>
                <Book
                    key={index}

                    title={book.title}
                    author={book.author_name}
                    subject={book.subject}
                    publish_date={book.publish_date}
                    publisher={book.publisher}
                    language={book.language}
                />
            );
            
            //rerendering new content
            setSearchBtnLabel("Search");
            setBooksList(books);
        });

    }

    return(
        <>
            <SearchBar
                callApi={callApi}
                searchBtnLabel={searchBtnLabel}
            />

            
            {bookList &&
                <BookTable
                    bookList={bookList}
                />
            }
        </>
    );
}

export default App