import Book from "./Book"
import { useState } from "react";
import BookInserter from "./BookInserter";

import "../../styles/BookTable.css"
import { 
    MdAdd
} from 'react-icons/md'

function BookTable(props){
    const {
        booksData,
        setBooksData
    } = props;

    const [insertMode, setInsertMode] = useState(false);

    const toggleInsertMode = () => {
        setInsertMode(!insertMode);
    }

    //functions for child components,
    //creates modified copy of main booksData object
    //(as booksData is being controlled by state hook) and then updates it
    //---
    const applyChanges = (bookObject, index) => {
        const newData = [...booksData];
        newData[index] = bookObject;

        setBooksData(newData);
    }

    const addBook = bookObject => {
        const newData = [bookObject, ...booksData];
        
        setBooksData(newData);
    }

    const removeBook = index => {
        const newData = [...booksData];
        newData.splice(index, 1);

        setBooksData(newData);
    }
    //---

    return(
        <table className="book-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Subject</th>
                    <th>Publish date</th>
                    <th>Publisher</th>
                    <th>Language</th>

                    {!insertMode &&
                        <th className="control-btns-wrapper"><button onClick={toggleInsertMode} title="Add"><MdAdd/></button></th>
                    }
                </tr>
            </thead>
            
            <tbody>
                {insertMode &&
                    <BookInserter
                        addBook={addBook}
                        setInsertMode={setInsertMode}
                    />
                }

                {booksData.map((book, index) => 
                    <Book
                        key={index}

                        title={book.title}
                        author={book.author}
                        subject={book.subject}
                        publish_date={book.publish_date}
                        publisher={book.publisher}
                        language={book.language}

                        index={index}
                        applyChanges={applyChanges}
                        removeBook={removeBook}
                    />
                )}
            </tbody>
        </table>
    );
}

export default BookTable