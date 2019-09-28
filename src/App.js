import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4">
          <div className="side-pannel full-height">
            <span className="title">Numbers</span>
            <div className="form">
              <form>
                <label>Number one</label>
                <input type="number" name="num-one" className="input"/>
                <label>Number two</label>
                <input type="number" name="num-two" className="input"/>
                <label>Operation</label>
                <select type="text" name="operation" className="input">
                  <option value="add">ADD</option>
                  <option value="sub">SUB</option>
                  <option value="mul">MUL</option>
                  <option value="div">DIV</option>
                </select>
                <input type="submit" className="submit" value="Post"/>
              </form>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default App;
