import React from "react";
import Form from "./components/Form";
import formAttr from "./Data";
import SubmitButton from "./components/Button";
import IconsDisplay from "./DisplayIcons";

function forms(form, index) {
  return <Form key={index} label={form.label} options={form.options} />;
}

function App() {
  return (
    <div className="app-container">
      {formAttr.map(forms)}
      <SubmitButton />
      <IconsDisplay />
    </div>
  );
}
export default App;
