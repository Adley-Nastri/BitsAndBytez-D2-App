import React, { useState, useEffect } from 'react';

const Support = () => {

  useEffect(() => {

    document.title = "Support"

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
        <h1>Support</h1>
      </div>
    );
  };
  
  export default Support;