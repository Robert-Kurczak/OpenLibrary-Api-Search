import { useState } from "react";
import "../../styles/Book.css";

function Book(props){
    var {
        title,
        author,
        subject,
        publish_date,
        publisher,
        language
    } = props

    const [editMode, setEditMode] = useState(false);

    const getValidData = (data, maxEntries=5) => {
        if(!data || data === "") return "no data"
        if(data.length >= maxEntries) data = data.slice(0, maxEntries);
        return data.join(", ");
    }

    //All authors
    author = getValidData(author, Infinity);

    //Up to 5 subjects max
    subject = getValidData(subject);

    //Only first publish_date
    publish_date = getValidData(publish_date, 1);

    //Up to 5 publishers max
    publisher = getValidData(publisher);

    //Up to 5 languages max
    language = getValidData(language);

    const normalModeRow = [
            <td>{title}</td>,
            <td>{author}</td>,
            <td>{subject}</td>,
            <td>{publish_date}</td>,
            <td>{publisher}</td>,
            <td>{language}</td>
    ];

    const editModeRow = [
        <td><textarea defaultValue={title} className="edit-textarea"/></td>,
        <td><textarea defaultValue={author} className="edit-textarea"/></td>,
        <td><textarea defaultValue={subject} className="edit-textarea"/></td>,
        <td><textarea defaultValue={publish_date} className="edit-textarea"/></td>,
        <td><textarea defaultValue={publisher} className="edit-textarea"/></td>,
        <td><textarea defaultValue={language} className="edit-textarea"/></td>
    ]

    const editBtn = <button onClick={() => {setEditMode(true)}}>Edit</button>
    const saveBtn = <button onClick={() => {setEditMode(false)}}>Save</button>

    return(
        <tr>
            {editMode ? editModeRow : normalModeRow}

            <td className="control-btns-td">
                {editMode ? saveBtn : editBtn}


                <button>Remove</button>
            </td>
        </tr>
    );
}

export default Book;