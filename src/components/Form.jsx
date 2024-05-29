import React from "react";
import "../index.css";

function Form({ label, options, icon, placeholder }) {
  return (
    <div className="form-container">
      <div className="input-group gap-2 col-6 mx-auto mb-3">
        <button
          className="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label={`Select ${label}`}
        >
          {label}
        </button>
        <ul
          className="dropdown-menu"
          role="menu"
          aria-labelledby="dropdownMenuButton"
        >
          {options.map((option, index) => (
            <li key={index} role="menuitem">
              <a className="dropdown-item" href="#">
                {option}
              </a>
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="form-control"
          aria-label={`${label} input`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Form;
