import React from "react";
import styled from "styled-components";
import CampoTexto from "../../CampoTexto";

const Section = styled.section`
    display: flex;
    justify-content: center;
    height: 100vh; 
    margin-top:90px;
    background-color:#030303;
    
`;

const H2 = styled.h2`
    display:flex;
    justify-content: center;
    margin-top: 0;
    font-size:60px;
    color:#FFFFFF;  
    font-family:'roboto';
    `

const H3 = styled.h3`
    display:flex;
    justify-content: center;
    margin-top: 0;
    font-size:20px;  
    color:#FFFFFF;
    font-family:'roboto regular';
    
    `
const H4 = styled.h4`
margin-top: 0;
font-size:36px;  
color:#FFFFFF;
font-family:'roboto regular';
`

const Nuevovideo = () => {
    return (
        <Section>
            
            <form>
                <H2>Nuevo video</H2>
                <H3>Complete el formulario para crear una nueva tarjeta de video</H3>
                <H4>Crear Tarjeta</H4>
                <CampoTexto/>
                <CampoTexto/>
                <CampoTexto/>
                <CampoTexto/>
                <CampoTexto/>
    
            </form>
        </Section>
    );
};

export default Nuevovideo;


