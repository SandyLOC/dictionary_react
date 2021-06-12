import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
    console.log(props.meaning);
    return(
        <div className="Meaning">
            <h3 className="defType">{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function(definition, index) {
                if(definition.example) {
                    return (
                        <div key={index}>
                        <p>{index + 1 +".-"} <span>{definition.definition}</span> 
                        <br/>
                        <strong>Example: </strong>
                        <em><span>{definition.example}</span></em>
                        <br/>
                        <Synonyms synonyms={definition.synonyms}/></p>
                     </div>
                    );
                } else {
                return (
                    <div key={index}>
                       <p>{index + 1 +".-"} <span>{definition.definition}</span> 
                       <br/>
                       <Synonyms synonyms={definition.synonyms}/></p>
                    </div>
                );
                }
            })}
        </div>
    );
}