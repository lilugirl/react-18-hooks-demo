import { useCallback,useEffect,useState } from "react";

// library code
const createStore=(initialState)=>{
    let state=initialState
    const getState=()=>state;
    const listeners=new Set();
    const setState=(fn)=>{
        state=fn(state);
        listeners.forEach((l)=>l());
    }
    const subscribe=(listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener)
    }

    return {getState,setState,subscribe}
}

const useStore=(store,selector)=>{
    const [state,setState]=useState(()=>selector(store.getState()))
    useEffect(()=>{
        const callback=()=>setState(selector(store.getState()));
        const unsubscribe=store.subscribe(callback)
        callback();
        return unsubscribe
    },[store,selector])
}

// application code
const store=createStore({count:0,text:'hello'})

const Counter=()=>{
    const count=useStore(store,useCallback((state)=>state.count,[]))
}