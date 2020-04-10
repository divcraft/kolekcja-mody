import React from 'react';

const MainHeader = ({ title }) => {
   return (
      <div className="main-header">
         <div className="main-header-inner">
            <h1>{title}</h1>
         </div>
      </div>
   );
}

export default MainHeader;