import React, {useState, createContext} from 'react';

export const ResponseContext = createContext();

export const ResponseProvider = props => {
    const [responces, setResponces] = useState([]);
    return (
        <ResponseContext.Provider value={[responces, setResponces]}>
            {props.children}
        </ResponseContext.Provider>
    );
}
