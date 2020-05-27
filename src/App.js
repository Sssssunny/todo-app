import React, { Fragment } from 'react';
// import Hello from './Hello';
import './App.css';


function App() {
  const name = '박수진';
  const age = '19';
  const nameStyle = {
    color: 'blue',
    fontSize: 24
  }

  return (
    <Fragment>
      <div style={nameStyle}>{name}</div>
      <div>{age}</div>
    </Fragment>
  );
}

export default App;