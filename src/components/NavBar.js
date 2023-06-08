import { Nav, Navbar } from "react-bootstrap";
//import { useState } from "react";
import CartButton from "./CartButton";

const NavBar = () =>{
    
    return(
        <Nav>
            <Navbar bg="light" expand="large" style={{width:"100%"}}>
                <Navbar.Brand href="/">Meu Lojinha</Navbar.Brand>
                <Nav.Item>
                <CartButton/>
                </Nav.Item>
            </Navbar>
        </Nav>
    )
}

export default NavBar