import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const root=ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(
// <React.StrictMode>
//     <App></App>
// </React.StrictMode>,document.getElementById('root')
// );
root.render(
  <React.StrictMode>
      <App></App>
  </React.StrictMode>,document.getElementById('root')
  );