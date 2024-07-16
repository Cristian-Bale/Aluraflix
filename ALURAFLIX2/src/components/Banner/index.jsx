import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content:center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    height:  100vh;
    background-size: cover;
    
`
const Banner = ({backgroundImage}) => {
    return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
    </FigureEstilizada>)
}

export default Banner