import styled from "styled-components"


const Select = styled.select`
    display: block;
    font-family:'source sans semi blod';
    font-size: 20px;
    background-color:#010101;
    padding: 8px 90px;
    border-radius:10px;
    box-sizing: border-box;
`
const Label = styled.label`
    font-family:'source sans';
    font-size: 24px;
   
`
    


const ListaOpciones =(props)=>{

    const equipos  = [
        "Frontend",
        "Backend",
        "Inovación y gestión"
    ]
    
    const manejarCambio =(e) =>{
        props.actualizarEquipo(e.target.value)

    }
    return <div>
        <Label>Categoría</Label>
        <Select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccione una categoría</option>
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>
            )}
        </Select>

    </div>
}

export default ListaOpciones