import React from 'react';
import Home from '../src/screen/home/home'
import { StatusBar } from 'react-native';

function App() {
  return (
    <>
    <StatusBar barStyle='light-content'
    backgroundColor='transparent'
    translucent
    />
      <Home/>
    </>
  );
}

export default App