import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import '../assets/css/HomeStyle.css';
import { products } from "../data/products.js";
import AboutUs from "../components/AboutUs.jsx";
import { Container, Row, Image } from 'react-bootstrap'
const Home = () => {
    return (
        <>
            <NavBar />
            <Slider />
            <Container fluid>
                <Row className="banner-img">
                    <Image src="https://pleasing.com/cdn/shop/files/image002-1440x240.jpg?v=1682111155" className="p-0" />
                </Row>
                <Row>
                    <h2 className="category-title text-center"> Perfumes </h2>
                    <div className="d-flex justify-content-center align-items-center">
                        {products.fragance.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </Row>
                <h2 className="category-title text-center"> Esmaltes </h2>
                <div className="d-flex justify-content-center align-items-center">
                    {products.nailpolish.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
                <AboutUs />
                <Row className="banner-img">
                    <Image src="https://pleasing.com/cdn/shop/files/image002-1440x240.jpg?v=1682111155" className="p-0" />
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Home;
