import React from "react";
import Form from "./Form";
import formAttr from "./Data";
import SubmitButton from "./Button";
import IconsDisplay from "./DisplayIcons";
import ImagesDis from "./Image";

function forms(form, index) {
  return <Form key={index} label={form.label} options={form.options} />;
}

function App() {
  return (
    <div className="app-container">
      {formAttr.map(forms)}
      <SubmitButton />
      <IconsDisplay />
      <ImagesDis />
    </div>
  );
}
export default App;
