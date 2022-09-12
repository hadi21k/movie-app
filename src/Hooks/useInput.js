import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return [value, setValue, onChange];
};

export default useInput;
