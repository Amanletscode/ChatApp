// src/hooks/useInputValidation.js
import { useState } from 'react';

const useInputValidation = (initialValue, validateFn) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    setValue(e.target.value);
    if (validateFn) {
      const validation = validateFn(e.target.value);
      if (!validation.isValid) {
        setError(validation.errorMessage);
      } else {
        setError(null);
      }
    }
  };

  return { value, changeHandler, error };
};

export default useInputValidation;
