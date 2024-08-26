import React from 'react';
import { Badge, Container, Dropdown, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import { AiFillDelete } from 'react-icons/ai';
import './styles.css';

function Header(props) {
    const {
        state: { cart },
        productDispatch,
        dispatch,
      } = CartState();
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{height:100}} className='navbar border' >
                <Container className='header'>
                 <div className='headerColumn'>
                    <Navbar.Brand className='fs-3'>
                        <Link to="/">Shopping Cart</Link>
                    </Navbar.Brand>
                   
                    <Navbar.Text className='search searchbar'>
                    <Nav className='mr-auto'>
                        <FormControl placeholder='search product' 
                        style={{width:500}} 
                        className='m-auto'
                        onChange={(e)=>{
                            productDispatch({
                                type:'FILTER_BY_SEARCH',
                                payload:e.target.value
                            })
                        }}/>
                        </Nav>
                    </Navbar.Text>

                    <Nav className='nav1 mainDropdown '>
                        <Dropdown variant='success'>
                            <Dropdown.Toggle>
                                <FaShoppingCart color="white" style={{fontSize:20}}/>
                                <Badge>
                                    {cart.length}
                                </Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu  className='dropdown'>
                                {cart.length>0?(
                                    <div className='cartContainer'>
                                    {cart.map((prod)=>(
                                        <span className='cartItem' key={prod.id}>
                                            <img
                                             src={prod.image} 
                                            alt={prod.name}
                                            className='cartItemImg'
                                            />
                                            <div className='cartItemDetail'>
                                                <span>{prod.name}</span>
                                                <span>{prod.price.split(".")}</span>
                                            </div>
                                            <AiFillDelete
                                            fontSize="20px"
                                            style={{cursor: "pointer"}}
                                            onClick={()=>
                                                dispatch({
                                                 type: "REMOVE_FROM_CART",
                                                 payload: prod,     
                                            })}
                                            />
                                        </span>
                                    ))}
                                    <Link to="/cart" className='cartLink'>
                                        <Button style={{width:"95%", margin:"0 10px"}} className='cartButton'>
                                            Go to Cart
                                        </Button>
                                    </Link>
                                    </div>
                                ): (
                                    <div className='cartEmpty'>Cart is Empty</div>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </div>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;


