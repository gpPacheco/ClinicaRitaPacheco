'use client'

import { useState } from "react"
export default function Contato(){
    const [name, setName] = useState('')
    const [idade, setIdade] = useState(18)
    const [contato, setContato] = useState('')

    return(
        <div className="flex w-full justify-center bg-rose-400">
            <form action="">
                <label htmlFor="#name">Name: </label><input id="name" type="text" onChange={(e) => setName(e.target.value) } value={name} />
                <label>Contato: </label><input type="text" onChange={(e) => setContato(e.target.value)} value={contato}/>
            </form>
            <div className="flex flex-col">
            <h1>{name}</h1>
            <h2>{contato}</h2>
            </div>
        </div>
    )
}