import React from 'react';
import Splash from './splash/splash';

const App = ({ children }) => (
  <div>
    <Splash />
    { children }
  </div>
);

export default App;
