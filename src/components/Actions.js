
import { INCREASE, DECREASE } from "./ActionTypes"


export const increaseCount = () => {
    return ({type:INCREASE})

}

export const decreaseCount = () => {
    return ({type:DECREASE})

}