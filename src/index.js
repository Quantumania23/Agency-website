import React from "react";
 import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";''

import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

reportWebVitals(console.log);

 ReactDOM.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>,
   document.getElementById("root")
 );


