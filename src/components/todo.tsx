import data from "./data"
import React from 'react'

export default function Todos(){
    return(
        data.map((todo)=>{
            return(
                <li>{todo}</li>
            )
        })
        
    )
}