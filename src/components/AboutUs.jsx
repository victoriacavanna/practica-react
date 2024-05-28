import { Container, Row, Col, Image } from "react-bootstrap"
const AboutUs = () => {
    return (
        <>
            <Container fluid>
                <Row className="abtus-container">
                    <Col md={6} className="p-0">
                        <Image src="https://pleasing.com/cdn/shop/files/41-min.jpg?v=1682362026" className="img-abtus" />
                    </Col>
                    <Col md={6} className="abtus-text">
                        <div>
                            <h2 className="abtus-title">Sobre Nosotros </h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutUs