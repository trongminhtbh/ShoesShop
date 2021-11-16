import React from "react";
import { useReducer } from "react";
import Context from "./Context";
import reducer, {initState} from "./reducer"

function Provider({children}) {
    const [state, dispath] = useReducer(reducer, initState)

    return (
        <Context.Provider value={[state, dispath]}>
            {children}
        </Context.Provider>
    )
}

export default Provider