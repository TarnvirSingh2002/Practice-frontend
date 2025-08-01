import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reduxPractice/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// export const Context = createContext();
// const Bin=()=>{
//   const [state,setstate]=useState(0);
//   return(
//     <Context.Provider value={{state, setstate}}>
//       <App/>
//     </Context.Provider>
//   )
// }


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
