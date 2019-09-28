import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import SidePen from "./containers/SidePen"

function App() {
  return (
    <div className="App">
      <div className="row">
        <SidePen />
        <div className="col-md-8">
          <div className="results-pannel full-height">
            <span className="title">Results</span>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th>Number&nbsp;1</th>
                    <th>Number&nbsp;2</th>
                    <th>Response</th>
                    <th>Expected</th>
                    <th>Passed</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="wrong">
                    <td>4</td>
                    <td>5</td>
                    <td>778</td>
                    <td>9</td>
                    <td>No</td>
                    <td>x</td>
                  </tr>
                  <tr className="correct">
                    <td>4</td>
                    <td>5</td>
                    <td>9</td>
                    <td>9</td>
                    <td>Yes</td>
                    <td>x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
