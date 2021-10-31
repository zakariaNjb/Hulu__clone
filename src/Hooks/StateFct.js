import { useState } from "react";
export function StateFct(){
    const [state,setState]=useState([]);
    const fetchApi=async(url)=>{
        const resp=await fetch(url);
        if(resp.ok) var data=await resp.json();
        else throw Error("api call has field");
        console.log(data)
        setState(data);
    }
    return {state,setState,fetchApi}
};