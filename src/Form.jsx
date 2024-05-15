import React from "react";
import "./index.css";
import formAttr from "./Data";

function Form({ label, options, icon, placeholder }) {
  return (
    <div className="form-container">
      <div className="input-group gap-2 col-6 mx-auto mb-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {label}
          <img
            src="/icons8-location-16.png"
            alt="icon"
            style={{ marginRight: "5px" }}
          />
        </button>
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with dropdown button"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Form;
