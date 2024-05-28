import logo from '../../public/logo.svg';
import { Container, Row, Col, Image } from 'react-bootstrap'
const Footer = () => {
    return (
        <>
            <footer>
                <Container fluid>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center footer-row flex-column'>
                            <div className="footer-logo pt-4">
                                <Image src={logo} width={150} />
                            </div>
                            <ul className='footer-nav pt-2'>
                                <li>Inicio</li>
                                <li>Productos</li>
                                <li>Sobre nosotros</li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer