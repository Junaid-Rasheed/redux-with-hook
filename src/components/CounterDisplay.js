import React from 'react'
import { useSelector } from 'react-redux'

export const CounterDisplay = () => {

    const count = useSelector((state)=>{
        return state.count;
    })
    return (
        <div>
            Counter display : {count}
        </div>
    )
}
