import React, { useState, useEffect } from 'react';

export default function Textarea({
  InputLabel,
  InputPlaceholder,
  form,
  handleChange,
  name,
  id,
  value,
  errorMessage,
  formSubmitted,
  setFormSubmitted,
  rows, // Include rows in the props
  ...rest
}) {
  const [touched, setTouched] = useState(false);
  const showError = formSubmitted && touched && !value && errorMessage;

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
      <div className='d-flex flex-column GAPxs'>
        <textarea
          className='BRANDInput'
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={InputPlaceholder}
          required
          rows={rows} // Pass rows to the textarea
          {...rest}
        />
        {showError && <p className='errorMessage'>{errorMessage}</p>}
      </div>
    </div>
  );
}
