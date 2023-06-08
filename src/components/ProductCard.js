import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const ProductCard = ({product}) =>{
    return (
      <Card>
        <Card.Img variant="top" src={product.image} />

        <Card.Body>
          <Card.Header>
            <Card.Title className="cart-title">{product.title}</Card.Title>
          </Card.Header>
          <Card.Text>{product.price}</Card.Text>

          <Card.Footer>
          <Link to={`/product/${product.id}`} state={{id:product.id}}>Buy</Link>
        </Card.Footer>

        </Card.Body>
      </Card>
    );
}

export default ProductCard