import React, { useState, useEffect } from 'react';

const UserGuide = () => {

  useEffect(() => {

    document.title = "User Guide"

  } );

  
  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>User Guide</h1>
      
    </div>
    
  );
};

export default UserGuide;