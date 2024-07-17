import { useState } from "react"
import styled from "styled-components"



const Label = styled.label`
    font-family:'source sans';
    font-size: 24px;
    display:block;
    color: #FFFFFF;
    margin-bottom: 10px;
`

const Imput = styled.input`
    font-family:'source sans semi blod';
    font-size: 20px;
    background-color:#010101;
    padding: 8px 90px;
    border-radius:10px;
    
`


const CampoTexto = (props) => {
    
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
        
    }
    return <div>
        <Label>{props.titulo}</Label>
        <Imput placeholder={props.placeholder} required ={props.required}
         value={props.valor}
         onChange={manejarCambio}>

         </Imput>
    </div>

}

export default CampoTexto