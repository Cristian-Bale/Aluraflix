import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Pie from "./components/Pie"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./components/pages/Inicio"
import Nuevovideo from "./components/pages/Nuevo video";
import frontend from "./components/Equipos/frontend.png";




const Fondo = styled.div`
background: #262626;
width:100%;
min-height:100vh;



`
const AppContainer = styled.div`
  width:1440px;
  max-width:100%;
  margin: auto;
  

`
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  
  
  
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`


const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })

    }

    setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      }
    }))
  }


  return (
    <>
      <BrowserRouter>
        <Fondo>
          <GlobalStyles />
          <AppContainer>
            <Cabecera />
            <MainContainer>
              <Routes>
              
                <Route path="/" element={<Inicio/>}/>
                {/* <Route path="/" element={<Banner backgroundImage={banner}/>}/> */}
                <Route path="/videos" element={<Nuevovideo/>} />
              </Routes>            
            </MainContainer>
          </AppContainer>
          <ModalZoom foto={fotoSeleccionada}
            alCerrar={() => setFotoSeleccionada(null)}
            alAlternarFavorito={alAlternarFavorito} />
          <Pie />
        </Fondo>
      </BrowserRouter>
    </>
  )
}

export default App
