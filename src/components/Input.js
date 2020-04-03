import React from 'react';

const Input = ({ type, value, placeholder, onChange, style }) => {
   return (
      <input style={style && style} type={type} value={value} placeholder={placeholder} onChange={onChange} />
   );
}

export default Input;