import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import SidePen from "./containers/SidePen";
import ResultsPen from "./containers/ResultsPen";
import {ResponseProvider} from "./context/ResponsesCtxt";

function App() {
  return (
    <ResponseProvider>
      <div className="App">
        <div className="row">
          <SidePen />
          <ResultsPen />
        </div>
        <ToastContainer />
      </div>
    </ResponseProvider>
  );
}

export default App;
