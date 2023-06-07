import React from 'react';

const HOC = () => {
  return (
    <div>
      <h2>HOC</h2>
      <OtherComponent />
    </div>
  );
};

export const OtherComponent = () => {
  return (
    <div>
      <h2>Other Component</h2>
    </div>
  );
};

export default HOC;
