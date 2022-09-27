import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  function synonyms() {
    if (props.meaning.synonyms) {
      return (
        <ul className="synonyms">
          {props.meaning.synonyms.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      );
    }
  }
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Synonyms:</strong>
      {synonyms()}
      {props.meaning.definitions.map(function (definit, index) {
        return (
          <div key={index}>
            <div className="definition">{definit.definition}</div>

            <div className="example">{definit.example}</div>
          </div>
        );
      })}
    </div>
  );
}
