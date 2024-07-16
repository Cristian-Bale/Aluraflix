import React from "react";
import styled from "styled-components";
import backend from './backend.png';
import frontend from './frontend.png';
import innovacionGestion from './innovGestion.png';
//import videos from './data/db.json';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 20px;
    padding: 20px;
    
`;

const Img = styled.img`
    max-width: 20%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    
`;

const Equipo = () => {

    const secciones = [
      {imagen: backend },
      {imagen: frontend },
      {imagen: innovacionGestion }
    ];
  
    return (
      <Div>
        {secciones.map((seccion, index) => (
          <Section key={index} className="equipo">         
            <Img src={seccion.imagen} alt={seccion.titulo} />
          </Section>
        ))}
      </Div>
    );
  };
  
  export default Equipo;