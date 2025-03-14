import logo from './logo.svg';
import './App.css';

import React from 'react';
import FileUploader from './components/FileUploader';


function App() {
  return (
    <div>
      <h1>Resume Scanner App</h1>
      <p>Hello, React!</p>
      <FileUploader />
    </div>
  );
}

export default App;
