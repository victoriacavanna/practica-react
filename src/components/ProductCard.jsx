import Card from 'react-bootstrap/Card';

const ProductCard = ({...product}) => {
  return (
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard