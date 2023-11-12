
import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ label, onClick, icon }) => {
  return (
    <button
      className='btn d-flex flex-row align-items-center BTNICON'
    onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element, // Assuming you pass a React element as an icon
};

export default IconButton;

