import React from 'react';

const Textarea = ({ value, placeholder, onChange }) => {
   return (
      <textarea name="askFormArea" value={value} id="askFormArea" placeholder={placeholder} onChange={onChange} />
   );
}

export default Textarea;