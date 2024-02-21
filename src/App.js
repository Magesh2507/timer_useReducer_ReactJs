import './App.css';
import Screen from './counter_components/screen/Screen.js';
import Button from './counter_components/button/Button.js';
import { useEffect, useReducer } from 'react';

const initialValue = { time: 0, isRunning: false };
function App() {

  const [count, dispatch] = useReducer(reducer, initialValue)
  useEffect(() => {
    
    let myInterval;
    if (!count.isRunning) {
      return
    }
    else{
      myInterval = setInterval(()=>handleClick("Start"), 1000)
    }
    return () => {
      clearInterval(myInterval)
    }

  }, [count.isRunning])

  const handleClick = (actions) => { dispatch({ type: actions }) };

  function reducer(state, action) {
    switch (action.type) {
      case 'Start':
        return { ...state, time: state.time + 1, isRunning: true };
      case 'Stop':
        return { ...state, isRunning: false };
      case 'Reset':
        return { isRunning: false, time: 0 };
      default:
        return state;
    }
  }

  return (
    <div className="App">
      <Screen value={count.time} />
      <div style={{display:"flex"}} >
      <Button handleClick={handleClick} text='Stop' />
      <Button handleClick={handleClick} text='Reset' />
      <Button handleClick={handleClick} text='Start' />
      </div>
    </div>
  );
}

export default App;
