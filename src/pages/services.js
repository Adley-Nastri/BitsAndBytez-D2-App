import React, { useState, useEffect } from 'react';

const Services = () => {

  useEffect(() => {

    document.title = "Services"

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
        <h1>Services</h1>
      </div>
    );
  };
  
  export default Services;