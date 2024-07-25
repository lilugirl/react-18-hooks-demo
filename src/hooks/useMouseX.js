import { useEffect, useRef } from "react";

export const useMouseX=()=>{
    const ref=useRef(0);
    useEffect(()=>{
       const callback=(event)=>{
        ref.current=event.clientX;
       }
       window.addEventListener('mousemove',callback)
       return ()=> window.removeEventListener('mousemove',callback)
    },[])

    return ref.current
}