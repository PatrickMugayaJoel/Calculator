import React, {useState, createContext} from 'react';

export const ResponseContext = createContext();

export const ResponseProvider = props => {
    const [responces, setResponces] = useState([{expected: "2",
    is_passed: "Yes",
    num_1: "1",
    num_2: "1",
    resp: "2"},
    {expected: "2",
    is_passed: "No",
    num_1: "1",
    num_2: "1",
    resp: "2"},
]);
    return (
        <ResponseContext.Provider value={[responces, setResponces]}>
            {props.children}
        </ResponseContext.Provider>
    );
}
