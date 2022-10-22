import { useState } from "react";

import "../../styles/SearchBar.css"

function SearchBar(props){
    const {callApi, searchBtnLabel} = props;

    const [phrase, setPhrase] = useState("");

    const updatePhrase = e => setPhrase(e.target.value);

    return(
        <div className="search-wrapper">
            <input type={"text"} placeholder="Search title" className="search-bar" value={phrase} onChange={updatePhrase}/>
            <input type={"button"} className="search-btn" value={searchBtnLabel} onClick={() => {callApi(phrase)}}/>
        </div>
    );
}

export default SearchBar;