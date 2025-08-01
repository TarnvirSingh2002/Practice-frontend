// USING THE LAZY LOADING


// import { lazy, Suspense} from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallBack from './ErrorFallBack';

// // Loading them only when they are actually needed, not when the initial bundle is loaded
// const UserCard = lazy(() => import('./UserCard'));

// function App() {

//   return (
//     <div style={{ padding: '30px' }}>
//       <ErrorBoundary FallbackComponent={ErrorFallBack}>{/*OR fallback={<p>Error is occuured in your compom....nent</p>}*/}
//         <Suspense fallback={<p>Loading.........</p>}>
//           <UserCard name="Tarnvir Singh" status="online" />
//           <UserCard name="Alex Doe" status="offline" />
//         </Suspense>
//       </ErrorBoundary>
//     </div>
//   );
// }

// export default App;



// USING THE JEST TESTING

// import Calculation from './Calculation'

// export default function App() {
//   return (
//     <div>
//       <Calculation/>
//     </div>
//   )
// }



// CREATE OUR CUSTOM HOOK


// import useCounter from './custom-hook/useCounter'

// export default function App() {
//   const [addOne, minusOne, state]=useCounter(10); //order must be same
//   return (
//     <div>
//       <h1>{state}</h1>
//       <button onClick={addOne}>Add</button>
//       <button onClick={minusOne}>Minus</button>
//     </div>
//   )
// }



//REDUX IN REACT

import { useDispatch, useSelector } from "react-redux"
export default function App() {
  const state = useSelector(faltu=>faltu.val);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{state}</h1>
      <button onClick={()=>{dispatch({type: "deposit"})}}>Add</button>
      <button onClick={()=>{dispatch({type: "withdraw"})}}>subtract</button>
    </>
  )
}
