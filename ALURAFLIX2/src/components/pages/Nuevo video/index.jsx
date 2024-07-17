import React from "react";
import styled from "styled-components";
import CampoTexto from "../../CampoTexto";
import ListaOpciones from "../../ListaOpciones";
import Boton from "../../BotonForm";
import { useState } from "react";





const Section = styled.section`
    display: flex;
    justify-content: center;
    height: 100vh; 
    margin-top:90px;
    background-color:#262626;
    
    
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

    const [titulo, actualizarTitulo] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const guardarVideo =(evento) =>{
        evento.preventDefault()
        console.log("guardando video")
        let datosAEnviar ={
            titulo,
            imagen,
            video,
            descripcion,
            equipo
        }
        
    }

    return (
        <Section>
            
            <form onSubmit={guardarVideo}>
                <H2>Nuevo video</H2>
                <H3>Complete el formulario para crear una nueva tarjeta de video</H3>
                <H4>Crear Tarjeta</H4>
                <CampoTexto titulo="Titulo" placeholder="Ingresar el título" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}/>
                <ListaOpciones 
                valor={equipo} 
                actualizarValor={actualizarEquipo}/>
                <CampoTexto titulo="Imagen" placeholder="Ingrese el enlace de la imagen"
                 required
                 valor={imagen} 
                actualizarValor={actualizarImagen}/>/
                <CampoTexto titulo="Video" placeholder="Ingrese el enlace del video"
                 required
                 valor={video} 
                actualizarValor={actualizarVideo}/>/
                <CampoTexto titulo="Descripcion" placeholder="¿De qué se trata este video?"
                required
                valor={descripcion} 
                actualizarValor={actualizarDescripcion}/>
                <Boton>
                    Guardar
                </Boton>
               
            </form>
        </Section>
    );
};

export default Nuevovideo;


