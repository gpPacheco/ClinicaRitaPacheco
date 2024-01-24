!!ANOTAÇÕES

-> Sempre que for criar um novo componente react é preciso exportar uma função que retorne;

export function Exemplo() {

    return (
        <>
        Conteudo
        </>
    )
}

-> Para criar novas paginas em next 13, devemos criar uma pasta na pasta APP 
    -> Com o nome que desejamos e dentro um arquivo chamado PAGE que exporta a pagina

export default function Pagina() {

    return (
        <>
            Pagina
        </>
    )
}

-> Para usarmos componentes na pagina é preciso importa-los 

import {Exemplo} from '...'

export default function Pagina() {

    return (
        <>
            <Exemplo />
        </>
    )
}
