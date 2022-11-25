
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
 
function App() {
  const [mode, setMode] = useState(false);
  const darkmode = ()=>{
    setMode(true)
  }

  const lightmode = ()=>{
    setMode(false)
  }
  return (
    <div  className={mode?"dark bg-slate-900":"fdsf"}>
   <Home darkmode={darkmode} mode={mode}  lightmode={lightmode} />
 
    </div>
  );
}

export default App;
