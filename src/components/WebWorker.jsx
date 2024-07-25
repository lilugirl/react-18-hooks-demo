import {useState} from 'react'
import useWebWorkder from '../hooks/useWebWorker'

const workerFunction=(e)=>{
    const {base,exponent}=e.data;
    console.log("worker function received data:",{e})

    let result=1;
    for(let i=0;i<exponent;i++){
        result *=base;
    }

    self.postMessage(result)
}

export const WebWorker=()=>{
    const [base ,setBase]=useState("")
    const [exponent,setExponent]=useState("");
    const [inputData,setInputData]=useState(null);
    const {result ,error,loading}= useWebWorkder(workerFunction,inputData)

    const handleBaseChange=(e)=>setBase(e.target.value);
    const handleExponentChange=(e)=>setExponent(e.target.value);
    const handleCalculate=()=>{
        setInputData({base:Number(base),exponent:Number(exponent)})
    }

    return (<div>
        <h1>Exponential Calculation with Web Worker</h1>
        <div>
            <label>
                Base: <input type="number" value={base} onChange={handleBaseChange} />
            </label>
        </div>
        <div>
            <label>
                Exponent: <input type="number" value={exponent} onChange={handleExponentChange} />
            </label>
        </div>
        <button onClick={handleCalculate}>Calculate</button>
        {loading && <div>loading...</div>}
        {error && <div>error:{error}</div>}
        {!loading && !error && result !==null && <div>Result: {result}</div>}
    </div>)
}