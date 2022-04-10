const initState = {
    count: 0
}

/**
 *
 */
export default function Reducer(prevState = initState, action){
    let {type, data} = action;
    let state = {...prevState}
    switch(type){
        case '+':
            state.count += data
            return state
        default:
            return prevState
    }
}