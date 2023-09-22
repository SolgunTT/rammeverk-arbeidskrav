import React from "react";

const InputField = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
