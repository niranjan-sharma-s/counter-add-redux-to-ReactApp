import { INCREASE, DECREASE } from "./ActionTypes"

const initialState = {
    count:0
}


export const reducers =(state = initialState, action) => {
    switch(action.type){
        case INCREASE : return {...state, count: state.count+1}
        case DECREASE : return {...state, count:state.count >0 ? state.count-1 : 0}
        default : return state
    }
}