import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  function synonyms() {
    if (props.meaning.synonyms) {
        return <ul className="synonyms">
            {props.meaning.synonyms.map((el, index) => {
                return <li key={index}>{el}</li>;
            })}
        </ul>
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
            <p>
              <strong>Definition:</strong>
              {definit.definition}
              <br />
              <strong>Example:</strong>
              <em>{definit.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
