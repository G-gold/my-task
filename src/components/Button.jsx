import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function SubmitButton() {
  return (
    <div className="button-container">
      <button className="submit-button" type="button">
        <FontAwesomeIcon icon={faMapLocationDot} /> SUBMIT
      </button>
    </div>
  );
}

export default SubmitButton;
