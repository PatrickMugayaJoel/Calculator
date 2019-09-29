import React, { useContext } from 'react';
import {ResponseContext} from "../context/ResponsesCtxt";

const TableRow = ({result, id}) => {
    const [responces, setResponces] = useContext(ResponseContext);

    const PopResponse = index => {
        const list = [...responces];
        console.log(responces);
        console.log(index);
        list.splice(index, 1);
        console.log(list);
        setResponces(list);
    }
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
                    onClick={()=>{PopResponse(id)}}
                >x</span>
            </td>
        </tr>
    );
}

export default TableRow;
