import React from 'react';

function Button({ myClick, myClass, children }) {
  return (
    <a onClick={myClick} className={`button ${myClass}`}>
      {children}
    </a>
  )
}

export default Button;