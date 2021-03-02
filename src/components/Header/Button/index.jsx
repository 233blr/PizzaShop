import React from 'react';

function Button({ myClass, children }) {
  return (
    <a className={`button ${myClass}`}>
      {children}
    </a>
  )
}

export default Button;