/* eslint-disable */

import './App.css';
// import './ScrollIndicator.css';
import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Switch, useHistory, useParams } from 'react-router-dom';
import Detail from './Detail.js'
import DetailId from './DetailId.js'
import productData from './data.js';
import Cart from './Cart.js'
import CartData from './CartData.js'

function App() {

  let history = useHistory();
  let [product, setProduct] = useState(productData);


  const sorting = (type) => {
    if (type === 'name') {
      let newProduct = [...product];
      newProduct.sort(function (a, b) {
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      });
      setProduct(newProduct);
    } else if (type === 'desc') {
      let newProduct = [...product];
      newProduct.sort(function (a, b) {
        return a.price - b.price;
      });
      setProduct(newProduct);
    } else if (type === 'asc') {
      let newProduct = [...product];
      newProduct.sort(function (a, b) {
        return b.price - a.price;
      });
      setProduct(newProduct);
    } else if (type === 'origin') {
      setProduct(product);
    }
  }

  return (
    <div className='App'>

      <Navbar sticky='top' bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img alt="" src="/favicon-128.ico" width="30" height="30" className="d-inline-block align-top" />
          {' '}영우의 IT Shop </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/"> 메인페이지 </Nav.Link>
            <Nav.Link as={Link} to="detail" disabled> 상세페이지 </Nav.Link>
            <Nav.Link as={Link} to="cart"> 장바구니 </Nav.Link>
            <Nav.Link as={Link} to="board" disabled> 게시판 </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <Jumbotron className='background'>
            <div className='jumbo_font '>
              <p>2021 20% S/S OFF!</p>
            </div>
          </Jumbotron>

          <div className='container'>
            <div className='position-right'>
              <ToggleButtonGroup type="radio" name="options">
                <ToggleButton variant="dark" onClick={() => { sorting('name') }}>상품명순</ToggleButton>
                <ToggleButton variant="dark" onClick={() => { sorting('asc') }}>가격높은순</ToggleButton>
                <ToggleButton variant="dark" onClick={() => { sorting('desc') }}>가격낮은순</ToggleButton>
              </ToggleButtonGroup>
            </div>

            <div className='row'>
              {
                product.map((a, i) => (
                  <Cards product={product[i]} i={i} history={history} key={i} />
                ))
              }
            </div>

          </div>
        </Route>

        {/* <Route exact path='/detail'>
          <Detail product={product}></Detail>
        </Route> */}

        <Route exact path='/cart'>
          <Cart product={product}></Cart>
        </Route>

        <Route path='/detail/:id'>
          <DetailId product={product}></DetailId>
        </Route>

        <Route path='/:id'>
          <div>구현 준비중입니다.</div>
        </Route>
      </Switch>
    </div >
  );
}

function Cards(props) {
  return (
    <div className='col-md-4 mt-3' >
      <img src={'./images/' + (props.product.title) + '.jpg'} width='100%' height='70%'
        onClick={() => { props.history.push('/detail/' + props.product.id) }} />
      <div className='border'>
        <h2 className="pt-3 mb-1"> {props.product.title} </h2>
        <p className='fontSize21 mb-1'> {props.product.content} </p>
        <p className='fontSize20 mb-3'> {props.product.price} </p>
      </div>
    </div>
  )
}
export default App;