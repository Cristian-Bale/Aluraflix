import styled from "styled-components";


const Button = styled.button`
    background-color: #262626;
    border-radius: 10px;
    padding: 10px 32px; 
    color: #ffffff;
    margin:32px 0 ;
    cursor: pointer;
    font-weight:700;
    border-color:#ffffff;
    transition: border-color 0.3s ease;
    &:hover {
        border-color: #021ad0; 
    }

`

const Div = styled.div`
    display: flex;
    gap: 25px;
`


const Boton = (props) =>{

    return(
        <Div>
             <Button>{props.texto}</Button>
             <Button>{props.texto}</Button>
        </Div>
    )
   
};

export default Boton