import React from 'react';

const TableRow = ({result, index}) => {
    return (
        <tr className={result.is_passed === "No" ? "wrong" : "correct"}>
            <td>{result.num_1}</td>
            <td>{result.num_2}</td>
            <td>{result.resp}</td>
            <td>{result.expected}</td>
            <td>{result.is_passed}</td>
            <td>
                <span
                    className="close"
                    onClick={()=>{}}
                >x</span>
            </td>
        </tr>
    );
}

export default TableRow;
