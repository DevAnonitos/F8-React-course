import { useReducer } from "react";
import Context from "./Context";
import reducer, {initialState} from "./reducer";
import logger from "./logger";


function Provider({ children}){
    const [state, dispatch] = useReducer(logger(reducer), initialState);

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider;