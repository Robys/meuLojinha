import { useState } from "react";
import { Badge, Button, Offcanvas } from "react-bootstrap";

import { useSelector } from "react-redux";

const CartButton = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const state = useSelector((productReducer) => productReducer)

    return(
        <>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart.length === 0 ? "carrinho vazio" : 
          state.cart.map(item =>
          <p>{item.title}</p>)}
          
        </Offcanvas.Body>
        </Offcanvas>

      <Button onClick={handleShow}> Cart  
            <Badge bg="danger">{state.cart.length}</Badge>
        </Button>
        
        </>
    )
        
}

export default CartButton