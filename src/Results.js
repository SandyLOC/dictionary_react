import React from "react";

export default function Results(props) {
    return (
        <div className="Results">
        <h1>{props.results.word}</h1>
        <ul>
            <li>{props.results.definition}</li>
        </ul>
        </div>
    );
}