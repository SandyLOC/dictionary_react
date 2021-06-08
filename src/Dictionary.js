import axios from "axios";
import React, {useState} from "react";
import Results from "./Results.js";
import 'bootstrap/dist/css/bootstrap.css';
import "./Dictionary.css";

export default function Dictionary() {

    const [word, setWord] = useState(null);
    const [definition, setDefinition] = useState({loaded:false});

    function handleResponse(response) {
        console.log(response.data[0].meanings[0].definitions);
        setDefinition({
            loaded: true,
            word: response.data[0].word,
            phonetics: response.data[0].phonetics[0].text,
            definition: response.data[0].meanings[0].definitions[0].definition
        });
        alert(response.data[0].meanings[0].definitions[0].definition);
    }
    //Source documentation: https://dictionaryapi.dev/
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${word}`);
        setDefinition({loaded:true});
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleWord(event) {
        setWord(event.target.value);
    }
    if(definition.loaded) {
    return(
    <div className="Dictionary">
    <form onSubmit={search} className="form"> 
        <input type="search" className="form-control" autoFocus={true} onChange={handleWord}></input>
        <input type="submit" className="btn btn-primary"></input>
    </form>
    <div className="results"><Results results={definition}/></div>
    </div>
    );
    } else {
        return(
            <div className="Dictionary">
            <form onSubmit={search} className="form"> 
                <input type="search" autoFocus={true} onChange={handleWord}></input>
                <input type="submit" className="btn btn-primary"></input>
            </form>
            </div>
            );
    }

}