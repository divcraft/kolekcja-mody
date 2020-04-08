import React from 'react';

const Input = ({ type, name, value, placeholder, onChange, style }) => {
   return (
      <input style={style && style} type={type} name={name && name} value={value} placeholder={placeholder} onChange={onChange} />
   );
}

export default Input;