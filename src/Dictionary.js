import axios from "axios";
import React, {useState} from "react";
import Results from "./Results.js";
import Photos from "./Photos.js";
import 'bootstrap/dist/css/bootstrap.css';
import "./Dictionary.css";

export default function Dictionary() {

    const [word, setWord] = useState("sunset");
    const [definition, setDefinition] = useState({loaded:false});
    const [photos, setPhotos] = useState(null);

    function handleResponse(response) {
        setDefinition({
            loaded: true,
            data: response.data[0]
            });
    }
    function handlePictures(response) {
        setPhotos(response.data.photos);
    }
    //Source documentation: https://dictionaryapi.dev/
    function search(event) {
        setDefinition({loaded:true});
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
        axios.get(apiUrl).then(handleResponse);
        //API for pexels images:
        let apiKey = "563492ad6f91700001000001919a4aa8017448728906e0e001db0e3b";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
        let headers = {Authorization : `Bearer ${apiKey}`};
        axios.get(pexelsUrl, {headers: headers}).then(handlePictures);

    }
    function handleWord(event) {
        setWord(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    let form =  <div className="form">
        <h3 className="introText">What word do you want to look up?</h3>
        <form onSubmit={handleSubmit} >
        <div className="row">
        <div className="col-auto">
            <input type="search" className="form-control" autoFocus={true} onChange={handleWord}></input>
        </div>
        <div className="col-sm-3">
            <input type="submit" className="btn btn-primary"></input>
        </div>
        </div>
        </form>
        </div>;


    if(definition.loaded) {
    return(
    <div className="Dictionary">
        {form}
    <div className="results"><Results results={definition.data}/></div>
    <Photos photos={photos}/>
    </div>
    );
    } else {
        search();
    }

}