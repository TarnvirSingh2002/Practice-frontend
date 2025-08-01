import { useState } from 'react'

export default function useCounter(initial) {
    const[state, setState]=useState(initial);
    const addOne=()=>setState(state+1);
    const minusOne=()=>setState(state-1);
  return [addOne, minusOne, state]
//   return {addOne, minusOne, state} we can send object also
}