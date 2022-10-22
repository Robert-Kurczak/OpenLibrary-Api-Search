import "../../styles/BookTable.css"

function BookTable(props){
    const {bookList} = props;
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
                </tr>
            </thead>
            
            <tbody>
                {bookList}
            </tbody>
        </table>
    );
}

export default BookTable