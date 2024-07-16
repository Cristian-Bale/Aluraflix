import  styled  from 'styled-components';
import footer from './Pie.png';

const PieEstilizado = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-image: url(${footer});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	margin-top: 100px;
	padding: 22px;
	box-sizing: border-box;
	color: white;
	height: 100px;
	bottom: 0px;
	
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 32px;
	}
`;

const PieTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

function Pie() {
	return (
    	<PieEstilizado>
        	<IconoContainer>
            	<li>
                	<a href="#">
                    	<img src="/img/redes/facebook.svg" alt="" />
                	</a>
            	</li>
            	<li>
                	<a href="#">
                    	<img src="/img/redes/twitter.svg" alt="" />
                	</a>
            	</li>
            	<li>
                	<a href="#">
                    	<img src="/img/redes/instagram.svg" alt="" />
                	</a>
            	</li>
        	</IconoContainer>
        	<PieTexto>Desarrollado Cristian Duran</PieTexto>
    	</PieEstilizado>
	);
}

export default Pie
