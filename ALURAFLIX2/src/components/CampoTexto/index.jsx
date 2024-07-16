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


const CampoTexto = (datosExternos) => {
    console.log("Datos:", datosExternos )
    return <div>
        <Label>Título</Label>
        <Imput placeholder="Ingresar Título"></Imput>
    </div>

}

export default CampoTexto