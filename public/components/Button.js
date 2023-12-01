import React from 'react';

const Button = ({ size, type, label, leftIcon, rightIcon, onClick }) => {
  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'BTNBrandSmall';
      case 'large':
        return 'BTNBrandLarge';
      default:
        return 'BTNBrandMedium'; // Default size
    }
  };

  const getTypeClass = () => {
    switch (type) {
      case 'outline':
        return 'BTNBrandOutline';
      case 'solid':
        return 'BTNBrandSolid';
      default:
        return 'BTNBrandAlternate'; // Default type
    }
  };

  const sizeClass = getSizeClass();
  const typeClass = getTypeClass();

  return (
    <button
      className={`BTNBrand ${size ? `BTNBrand${size.charAt(0).toUpperCase() + size.slice(1)}` : ''} ${typeClass}`}
      onClick={onClick} // Optional onClick function
    >
      <div className='BTNBrandHighlight'></div>
      {leftIcon && (
        <div className='IconHolder'>
          {leftIcon}
        </div>
      )}
      {label && <label>{label}</label>} {/* Displaying the label */}
      {rightIcon && (
        <div className='IconHolder'>
          {rightIcon}
        </div>
      )}
    </button>
  );
};

export default Button;
