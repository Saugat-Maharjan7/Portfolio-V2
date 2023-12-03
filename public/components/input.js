import React, { useState,useEffect } from 'react';

export default function Input({
  InputLabel,
  InputPlaceholder,
  form,
  handleChange,
  type,
  name,
  id,
  value,
  errorMessage,
  formSubmitted,
  setFormSubmitted,
  ...rest
}) {
  const [touched, setTouched] = useState(false);
  const showError = formSubmitted && touched && !value && errorMessage 


  const handleFocus = () => {
    setTouched(true);
  };

  const handleBlur = () => {
    if (value.trim() === '') {
      setTouched(false);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      setTouched(true);
    }
  }, [formSubmitted]);

  return (
    <div className='d-flex flex-column GAPs'>
      <label className=' FONTNEXA InputLabel'>{InputLabel}</label>
      <div className='d-flex flex-column '>
        <input
        className='BRANDInput'
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={InputPlaceholder}
          
          required
          {...rest}
        />
      {showError && <p className='errorMessage'>{errorMessage}</p>}
      </div>
    </div >
  );
}
