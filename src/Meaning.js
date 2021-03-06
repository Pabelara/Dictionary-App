import React from "react";
import Synonyms from "./Synonyms.js";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              {" "}
              <span className="Tag">Definition:</span>
              {definition.definition}
            </div>
            <br />
            <div className="Example">{definition.example} </div>
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
