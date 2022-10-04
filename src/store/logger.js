
function logger(reducer){
    return (prevState, action) => {
        console.group(action.type);
        console.log('Prev state', prevState);
        console.log('Action', action);

        const nextState = reducer(prevState, action);

        console.log('new state', nextState)
        return nextState;
    }
}
 export default logger