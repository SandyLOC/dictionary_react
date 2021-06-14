import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            {props.phonetics.text}<span>     </span>
            <ReactAudioPlayer
            src={props.phonetics.audio}
            controls
            controlslist
            />   
            <br/>
        </div>
    );
}