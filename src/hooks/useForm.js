import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);
  // onchange Handler
  const onFormChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  // 초기화
  const resetForm = () => {
    setFormState(initialState);
  };

  return { formState, onFormChangeHandler, resetForm };
};

export default useForm;
