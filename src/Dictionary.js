import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {

    const [word, setWord] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        console.log(response.data[0]);
    }
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}`);
        setLoaded(true);
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleWord(event) {
        setWord(event.target.value);
    }
    if(loaded) {
    return(
    <div className="Dictionary">
    <form onSubmit={search} className="form"> 
        <input type="search" autoFocus={true} onChange={handleWord}></input>
        <input type="submit"></input>
    </form>
    </div>
    );
    } else {
        return(
            <div className="Dictionary">
            <form onSubmit={search} className="form"> 
                <input type="search" autoFocus={true} onChange={handleWord}></input>
                <input type="submit"></input>
            </form>
            </div>
            );
    }

}