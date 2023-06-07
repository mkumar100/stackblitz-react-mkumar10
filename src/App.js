import React from 'react';
import './style.css';
import HOC, { OtherComponent } from './HOC';

export default function App() {
  return (
    <>
      <div>
        <h1>Hello Brijesh!</h1>
        <HOC />
        <OtherComponent />
      </div>
    </>
  );
}
