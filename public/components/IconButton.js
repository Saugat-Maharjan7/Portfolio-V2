import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({onClick, icon, className,  }) => {
  // Manually concatenate class names
  const buttonClass =
    'btn ' +
    'd-flex ' +
    'flex-row ' +
    'align-items-center ' +
    'SIZEF8 ' +
    'justify-content-center ' +
    'FONTNEXA ' +
    'BTNICON ' +
    'GAPs '+
    
    (className ? className : ''); // Additional class names passed as a prop

  return (
    <button className={buttonClass.trim()} onClick={onClick}>
      <div style={{height:'16px'}} className='SIZEW8  d-flex flex-row align-items-center'> {icon && <span className="icon">{icon}</span>}</div>
      
      {/* {label} */}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.node,
  // label: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
  className: PropTypes.string, // Additional class names as a string
};

export default IconButton;
