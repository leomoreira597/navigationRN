import React from "react";
import TextoCentral from "../components/TextCentral";

export default function TelaC(props){

    const numero = props.route && 
    props.route.params && 
    props.route.params.numero ? props.route.numero : 0


    return(
        <TextoCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    );
}