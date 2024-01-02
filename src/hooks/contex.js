// Contex.js
import React, { createContext } from 'react';

// Create and export a function that returns the context
function createMyContext(defaultValue = 'Rohith_K') {
  return createContext(defaultValue);
}
const name='venkata sai'
export {createMyContext,name}
