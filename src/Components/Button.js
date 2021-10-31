import React from "react";

export default function Button({Icon,text}){
    return <button>
        <Icon/>
        <p>{text}</p>
    </button>
}