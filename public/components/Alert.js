import React from 'react';

export default function Alert({ message, type, className }) {




  const alertClass = type === 'success' ? 'alertSuccess' : '';
  const combinedClasses = `d-flex flex-row alertMessage ${alertClass} ${className || ''}`;

  return (
    <div className={combinedClasses.trim()}>
      {message}
    </div>
  );
}
