import React, { useContext } from 'react';
import Nodecontext from './hooks/prwaticecontext';

function Maincontext({ children }) {
    const values = {
        name: 'rohith venkata sai',
        id: 210032432,
        sec: 'BDA'
    }

    return (
        <Nodecontext.Provider value={values}>
            {children}
        </Nodecontext.Provider>
    );
}

export default Maincontext;
