import React from 'react';

//ReactDOM is a JavaScript library that provides methods for working with the DOM (Document Object Model) in React applications. It serves as the entry point to the React library for web applications, allowing developers to render React components into the DOM and manage their lifecycle.
import {createRoot} from 'react-dom/client';


//This would be the main component of this react project
import App from './App';

//We need the ReactDOM to get two things, first would be the APP.js file, and whole of our DOM would be contained inside the id="root" which is present inside the index.html in public folder (The one shown to the user)
createRoot(document.getElementById('root')).render(<App />);