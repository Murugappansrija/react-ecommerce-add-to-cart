import React, { useEffect,useState } from "react";
import {useNavigate} from "react-router-dom"

export default function Success (){
    const navigate = useNavigate ()
    const [count, setCount] = useState(15)
    useEffect(()=>{
       setInterval(() =>  setCount((count) => count-1), 1000); 
       setTimeout(()=>{ navigate('/')},15000)
    }, [navigate])
    return(
        <h4 className="mt-5">Your order will be successfully placed in  your Address. You will redirect to Home in {count} sec</h4>
    )
}