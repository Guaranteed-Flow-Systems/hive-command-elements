import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Button, Blower, DosingPump, Valve, Pump, ButterflyValve } from '../../src'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [ blowerOn, setBlowerOn ] = useState(true);
  const [ blowerFault, setBlowerFault ] = useState(false);

  useEffect(() => {
    let int = setInterval(() => {
      console.log("SET BLOWER");

      setBlowerFault((fault) => !fault)
      setBlowerOn((on) => !on);

    }, 5000)
    return () => {
      clearInterval(int);

    }
  }, [])

  return (
    <div className="App" style={{height: "100vh", width: '100vw', background: '#fff'}}>
        <div style={{width: 50, height: 50, display: 'flex'}}>

          <Valve options={{open:'true'}} />
        </div>

        <div style={{width: 50, display: 'flex'}}>

          <ButterflyValve options={{open:true}} />
        </div>
        <div style={{width: 50, height: 50}}>
          <Button />
        </div>
        <div style={{width: 50, height: 50}}>

          <Blower options={{on: blowerOn, fault: blowerFault}} />
        </div>

        <div style={{width: 50, height: 50}}>

          <Pump options={{on: 'true'}} />
        </div>
        <div style={{width: 50, height: 50}}>

          <DosingPump options={{on: 'true'}} />
        </div>

    </div>
  )
}

export default App
