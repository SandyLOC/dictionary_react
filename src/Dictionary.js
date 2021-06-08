import axios from "axios";
import React, {useState} from "react";
import Results from "./Results.js";
import 'bootstrap/dist/css/bootstrap.css';
import "./Dictionary.css";

export default function Dictionary() {

    const [word, setWord] = useState(null);
    const [definition, setDefinition] = useState({loaded:false});

    function handleResponse(response) {
        console.log(response.data[0]);
        setDefinition({
            loaded: true,
            data: response.data[0],
            definition: response.data[0].meanings[0].definitions[0].definition
        });
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
    <div className="results"><Results results={definition.data}/></div>
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