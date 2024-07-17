import React from "react";
import styled from "styled-components";
import backend from "./backend.png";
import frontend from "./frontend.png";
import innovacionGestion from './innovGestion.png';


const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 50px;
    
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding: 20px;
    
`;

const Img = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    
`;

const Equipo = () => {
  return (
    <Section>
      <Div>
        <Img src={frontend} alt="Frontend Team" />
        <Img src={backend} alt="Backend Team" />
        <Img src={innovacionGestion} alt="Inovación y gestión Team" />
      </Div>
    </Section>
  );
};

export default Equipo;