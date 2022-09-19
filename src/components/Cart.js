import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increaseCount, decreaseCount } from './Actions'

const Cart = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()

  return (
    <div>{state.count}
    <button onClick={()=> dispatch(increaseCount())}>Increase</button>
    <button onClick={()=> dispatch(decreaseCount())}>Decrease</button>
    </div>

  )
}

export default Cart