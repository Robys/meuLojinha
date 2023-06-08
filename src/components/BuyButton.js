import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {addToCart} from '../redux/actions/cartActions'

const BuyButton = ({product}) =>{
    const dispatch = useDispatch()

    const handleBuyItem = () =>{
        console.log('adding product')
        dispatch(addToCart(product))
    }

    return(
        <Button variant="primary" onClick={handleBuyItem}>
            Add to Cart
        </Button>
    )

}

export default BuyButton