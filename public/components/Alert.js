import React from 'react';

export default function Alert({ message, type, className, lefticon }) {
  const alertClass = type === 'success' ? 'alertSuccess' : '';
  const combinedClasses = `d-flex flex-row GAPxs align-items-center alertMessage ${alertClass} ${className || ''}`;

  return (
    <div className={combinedClasses.trim()}>
      {lefticon && <span style={{
        width:'32px',height:'32px'
      }} className="icon">{lefticon}</span>}
      <span>{message}</span>
    </div>
  );
}
