import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetics(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    );
  } else {
    return null;
  }
}
