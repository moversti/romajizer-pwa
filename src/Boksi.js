import React, {useEffect, useState} from 'react';
import romaji from 'romaji'

export default function Boksi({to, value, setValue}){

    const [a,sA] = useState('')
    
    useEffect(()=>{
        if(to==='r'){
            sA(romaji.fromKana(value))
        } else {
            sA(value)
        }
    },[to,value])

    function handleChange(e){
        if(to==='r'){
            setValue(romaji.toHiragana(e.target.value))
        } else {
            setValue(e.target.value)
        }
    }

    return (
        <textarea value={a} onChange={handleChange} />
    )
}