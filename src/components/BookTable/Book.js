import React, { useState } from "react";

import "../../styles/Book.css";
import { 
    MdEdit,
    MdDelete,
    MdSave
} from 'react-icons/md'

function Book(props){
    let {
        title,
        author,
        subject,
        publish_date,
        publisher,
        language
    } = props

    const {
        index,
        applyChanges,
        removeBook
    } = props

    const [editMode, setEditMode] = useState(false);

    const save = () => {
        const bookObject = {
            title: title,
            author: author,
            subject: subject,
            publish_date: publish_date,
            publisher: publisher,
            language: language
        }

        applyChanges(bookObject, index);
        setEditMode(false);
    }

    const remove = () => {
        if(window.confirm("Are you sure you want to remove this position?")){
            removeBook(index);
        }
    }

    return(
        <tr>
            {editMode ?
                <React.Fragment>
                    <td><textarea defaultValue={title} className="edit-textarea" onChange={(e) => {title = e.target.value}}/></td>
                    <td><textarea defaultValue={author} className="edit-textarea" onChange={(e) => {author = e.target.value}}/></td>
                    <td><textarea defaultValue={subject} className="edit-textarea" onChange={(e) => {subject = e.target.value}}/></td>
                    <td><textarea defaultValue={publish_date} className="edit-textarea" onChange={(e) => {publish_date = e.target.value}}/></td>
                    <td><textarea defaultValue={publisher} className="edit-textarea" onChange={(e) => {publisher = e.target.value}}/></td>
                    <td><textarea defaultValue={language} className="edit-textarea" onChange={(e) => {language = e.target.value}}/></td>
                </React.Fragment>
            :
                <React.Fragment>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>{subject}</td>
                    <td>{publish_date}</td>
                    <td>{publisher}</td>
                    <td>{language}</td>
                </React.Fragment>
            }

            <td className="control-btns-wrapper">
                {editMode ? 
                    <button onClick={save} title="Save"><MdSave/></button>
                : 
                    <button onClick={() => {setEditMode(true)}} title="Edit"><MdEdit/></button>
                }

                <button onClick={remove} title="Delete"><MdDelete/></button>
            </td>
        </tr>
    );
}

export default Book;