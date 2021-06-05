import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {

    const [word, setWord] = useState(null);
    const [loaded, setLoaded] = useState(false);
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}`);
        setLoaded(true);
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