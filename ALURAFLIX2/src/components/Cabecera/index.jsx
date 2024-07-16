import styled from "styled-components"
import ButtonNav from "../ButtonNav"


const HeaderEstilizado = styled.header`
   background-color: #262626;
   padding: 20px 0;
   display: flex;
    gap: 300px; 
    justify-content: space-evenly;
    margin-right: 0;

    img{
        width: 180px;
    }
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="img/logo.png" alt="Logo AlURAFlix" />
        <ButtonNav />
        
    </HeaderEstilizado>
}

export default Cabecera