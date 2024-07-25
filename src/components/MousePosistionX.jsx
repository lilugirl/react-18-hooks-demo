import { useMouseX } from "../hooks/useMouseX"

export const MousePositionX=()=>{
    const x=useMouseX()
    const start=performance.now();
    while(performance.now()-start < 20){}
    return <div> MouseX:{x}</div>
}