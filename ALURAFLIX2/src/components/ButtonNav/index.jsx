import React from "react";
import { styled } from "styled-components"
import Buttonhome from "./ButtonHome.png"
import Buttonvideo from "./ButtonVideo.png"
import { Link } from "react-router-dom";

const ContainerEstilizado = styled.div`
    display:flex;
    justify-content: center;
    
`;

const NavContainer = styled.div`
    display:flex;
    gap:25px;
   
   
`
const ButtonHomeStyled= styled.img`
   cursor: pointer;
`;
const ButtonVideoStyled = styled.img`
    cursor: pointer;
`;
const ButtonNav = () => {
    
    return (
        <ContainerEstilizado>
            <NavContainer>
                <Link to="/">
                    <ButtonHomeStyled src={Buttonhome} alt="Boton home" />
                </Link>
                <Link to="/videos">
                    <ButtonVideoStyled src={Buttonvideo} alt="Boton nuevo video" />
                </Link>
        </NavContainer>  
        </ContainerEstilizado>
        
    )
}

export default ButtonNav;