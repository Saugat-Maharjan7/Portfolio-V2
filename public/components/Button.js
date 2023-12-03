// Button.js

import React from 'react';
const Button = ({ customButtonType, size, label, leftIcon, rightIcon, onClick, type }) => {
  // Existing code for getSizeClass and getTypeClass functions

  const getTypeClass = () => {
    switch (customButtonType) {
      case 'outline':
        return 'BTNBrandOutline';
      case 'solid':
        return 'BTNBrandSolid';
      case 'alternate':
        return 'BTNBrandAlternate'; // Custom type for styling
      case 'loading':
        return 'BTNBrandLoading'; // Class for loading type
      default:
        return 'BTNBrandAlternate'; // Default type
    }
  };

  const getLeftIcon = () => {
    if (customButtonType === 'loading') {
      return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 spinner"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          style={{ animation: 'spin 0.5s infinite linear' }} // Apply the spin animation directly to the SVG element
        />
      </svg>
      
      );
    }
    return leftIcon;
  };

  

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

  const sizeClass = getSizeClass();
  const typeClass = getTypeClass();
  const leftIconComponent = getLeftIcon();

  return (
    <button
      type={type}
      className={`BTNBrand ${sizeClass} ${typeClass}`}
      onClick={onClick}
      disabled={customButtonType === 'loading'} // Disable button during loading
    >
      <div className="BTNBrandHighlight"></div>
      {leftIconComponent && <div className="IconHolder">{leftIconComponent}</div>}
      {label && <label>{label}</label>}
      {rightIcon && <div className="IconHolder">{rightIcon}</div>}
    </button>
  );
};

export default Button;