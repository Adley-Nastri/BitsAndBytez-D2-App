import React, { useState, useEffect } from 'react';

const About = () => {

  useEffect(() => {

    document.title = "About"

  });




  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>About</h1>
    </div>
  );
};

export default About;