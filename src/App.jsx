import { useState } from "react";
import { ReducerDemo3 } from "./components/ReducerDemo3";
import { ReducerDemo } from "./components/ReducerDemo";
import { ReducerDemo2 } from "./components/ReducerDemo2";
// import { SyncExternalStoreDemo } from "./components/SyncExternalStoreDemo";
import { DebounceDemo } from "./components/DebounceDemo";
import { SyncExternalStoreDemo2 } from "./components/SyncExternalStoreDemo2";
import { Counter } from "./components/Counter";
import "./App.css";


function App() {
  const [num,setNum]=useState(1)
  return (
    <>
    <button onClick={()=>setNum(num+1)}>+</button>
    <button onClick={()=>setNum(num-1)}>-</button>
      {/* <DebounceDemo /> */}
      {/* <SyncExternalStoreDemo /> */}
      {/* <SyncExternalStoreDemo2 />
      <SyncExternalStoreDemo2 /> */}
      {new Array(num).fill('').map((item,index)=>{
        return <Counter key={index} />
      })}
      {/* <Counter /> */}
      {/* <ReducerDemo3 /> */}
      {/* <ReducerDemo2 /> */}
      {/* <ReducerDemo /> */}
    </>
  );
}

export default App;
