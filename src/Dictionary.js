import axios from "axios";
import React, {useState} from "react";
import Results from "./Results.js";
import 'bootstrap/dist/css/bootstrap.css';
import "./Dictionary.css";

export default function Dictionary() {

    const [word, setWord] = useState("sunset");
    const [definition, setDefinition] = useState({loaded:false});

    function handleResponse(response) {
        setDefinition({
            loaded: true,
            data: response.data[0],
            definition: response.data[0].meanings[0].definitions[0].definition
        });
    }
    //Source documentation: https://dictionaryapi.dev/
    function search(event) {
        setDefinition({loaded:true});
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
    }
    function handleWord(event) {
        setWord(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    let form =     
        <form onSubmit={handleSubmit} className="form">
        <div className="row">
        <div className="col-auto">
            <input type="search" className="form-control" autoFocus={true} onChange={handleWord}></input>
        </div>
        <div className="col-sm-2">
            <input type="submit" className="btn btn-primary"></input>
        </div>
        </div>
        </form>;


    if(definition.loaded) {
    return(
    <div className="Dictionary">
        {form}
    <div className="results"><Results results={definition.data}/></div>
    </div>
    );
    } else {
        search();
    }

}