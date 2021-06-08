import React from "react";

export default function Results(props) {
    return (
        <div className="Results">
        <h1 className="word">{props.results.word}</h1>
        <h2 className="phonetics">{props.results.phonetics}</h2>
        <ul>
            <li>{props.results.definition}</li>
        </ul>
        </div>
    );
}