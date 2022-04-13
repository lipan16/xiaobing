const initState = {
    count: 0,
    timeType: true
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
        case 'timeType':
            state.timeType = data
            return state
        default:
            return prevState
    }
}
