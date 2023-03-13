import React from "react";
import NonPlayableChar from "./NonPlayableChar";
const PersonDetail = (props) => {
  return (
    <section>
      <div>
        <p> {props.loves}</p>
        <p>{props.hates}</p>
        <p>{props.description}</p>
      </div>
    </section>
  );
};
export default PersonDetail;
