import React, { Component, useContext } from 'react';
import TableRow from "../components/TableRow";
import {ResponseContext} from "../context/ResponsesCtxt";

export const ResultPen = () => {
    const [responces] = useContext(ResponseContext);
    return (
        <div className="col-sm-8">
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
                {  
                  responces.map(
                      (result, index) => <TableRow key={index} id={index} result={result} />
                    )
                }
              </tbody>
            </table>
          </div>
        </div>
    </div>
    );
}

export default ResultPen;