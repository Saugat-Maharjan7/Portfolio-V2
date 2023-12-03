import React from 'react';

export default function Alert({ message, type, className, lefticon }) {
  const alertClass = type === 'success' ? 'alertSuccess' : 'alertError';
  const combinedClasses = `d-flex flex-row GAPs align-items-center alertMessage ${alertClass} ${className || ''}`;

  return (
    <div className={combinedClasses.trim()}>
      
      {lefticon && <span className='AlertIconHolder'>{lefticon}</span>}
      
      
      <span>{message}</span>
    </div>
  );
}
