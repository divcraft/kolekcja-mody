import React from 'react';

const Button = ({ text, style }) => {
   return (
      <button style={style && style}>{text}</button>
   );
}

export default Button;