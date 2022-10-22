import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar/SearchBar";
import BookTable from "./BookTable/BookTable";

import "../styles/App.css"

function App(){
    //fetched and processed data object, from which app renders its content
    const [booksData, setBooksData] = useState();
    //It's in a state so I can change it while api is being fetched
    const [searchBtnLabel, setSearchBtnLabel] = useState("Search");

    //Processed data is always string. If array of strings is given,
    //returns string with up to maxEntries separated by comma and space
    //for more natural looking data
    function getFormatedData(data, maxEntries=5){
        if(!data || data === "") return "no data"
        if(data.length >= maxEntries) data = data.slice(0, maxEntries);
        return data.join(", ");
    }

    //main function for fetching data from Open Library Search API
    const callApi = (phrase,  limit=20) => {
        if(phrase === "") return;

        setSearchBtnLabel("Searching...");

        fetch("http://openlibrary.org/search.json?title=" + phrase.replace(" ", "+") + "&limit=" + limit)
        .then((response) => response.json())
        .then((data) => {
            //Building object with neccesary data from API
            const books = data.docs.map(book => (
                {
                    title: book.title,
                    //All authors
                    author: getFormatedData(book.author_name, Infinity),
                    //Up to 5 subjects max
                    subject: getFormatedData(book.subject),
                    //Only first publish_date
                    publish_date: getFormatedData(book.publish_date, 1),
                    //Up to 5 publishers max
                    publisher: getFormatedData(book.publisher),
                    //Up to 5 languages max
                    language: getFormatedData(book.language)
                }
            ));
            
            //rerendering new content
            setSearchBtnLabel("Search");
            setBooksData(books);
        });

    }

    return(
        <React.Fragment>
            <Header/>

            <SearchBar
                callApi={callApi}
                searchBtnLabel={searchBtnLabel}
            />

            
            {booksData &&
                <BookTable
                    booksData={booksData}
                    setBooksData={setBooksData}
                />
            }
        </React.Fragment>
    );
}

export default App