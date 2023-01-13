import React, { useState, useEffect } from 'react';

const Home = () => {

  useEffect(() => {

    document.title = "Home"

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
      <h1>Home</h1>
    </div>
  );
};

export default Home;