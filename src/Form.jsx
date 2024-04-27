import React from "react";

function Form({ label, options, placeholder }) {
  return (
    <div>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {label}
        </button>
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index}>
              <a className="dropdown-item" href="#">
                {option}
              </a>
            </li>
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
