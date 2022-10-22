import { 
    MdAdd,
    MdCancel
} from 'react-icons/md'

function BookInserter(props){
    const {
        addBook,
        setInsertMode
    } = props

    let title = "";
    let author = "";
    let subject = "";
    let publish_date = "";
    let publisher = "";
    let language = "";

    const add = () => {
        const bookObject = {
            title: title,
            author: author,
            subject: subject,
            publish_date: publish_date,
            publisher: publisher,
            language: language
        }

        addBook(bookObject);
        setInsertMode(false);
    }

    const cancel = () => {
        setInsertMode(false);
    }

    return(
        <tr className="book-inserter-row">
            <td><textarea
                defaultValue={title} placeholder="Title" className="edit-textarea" onChange={(e) => {title = e.target.value}}
            /></td>
            <td><textarea
                defaultValue={author} placeholder="Author" className="edit-textarea" onChange={(e) => {author = e.target.value}}
            /></td>
            <td><textarea
                defaultValue={subject} placeholder="Subject" className="edit-textarea" onChange={(e) => {subject = e.target.value}}
            /></td>
            <td><textarea
                defaultValue={publish_date} placeholder="Publish date" className="edit-textarea" onChange={(e) => {publish_date = e.target.value}}
            /></td>
            <td><textarea
                defaultValue={publisher} placeholder="Publisher" className="edit-textarea" onChange={(e) => {publisher = e.target.value}}
            /></td>
            <td><textarea
                defaultValue={language} placeholder="Language" className="edit-textarea" onChange={(e) => {language = e.target.value}}
            /></td>

            <td className="control-btns-wrapper">
                <button onClick={add} title="Add"><MdAdd/></button>
                <button onClick={cancel} title="Cancel"><MdCancel/></button>
            </td>
        </tr>
    );
}

export default BookInserter;