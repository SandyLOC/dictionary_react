import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
    if (props.results){
    return (
        <div className="Results">
            <div className="wordSearch">
        <h1 className="word">{props.results.word}</h1>
        {props.results.phonetics.map(function(phonetic, index) {
            return(
            <div key={index}>
                <h2 className="phonetics"><Phonetics phonetics={phonetic}/></h2>
            </div>
            
            );
        })}
            </div>
        {props.results.meanings.map(function(meaning, index) {
            return(
                <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>
            );
        })}
        </div>
    );} else {
        return (null);
    }
}