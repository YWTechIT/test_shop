/* eslint-disable */

// 메인 파일입니다.

import './App.css';
// import './ScrollIndicator.css';
import React, { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import Detail from './Detail.js'
import DetailId from './DetailId.js'
import productData from './data.js';
import Cart from './Cart.js'
import CartData from './CartData.js'
  
  function App() {
  
  let history = useHistory();
  let [product, product변경] = useState(productData);
  let [cartData, cartData변경] = useState(CartData);

  
  let copyTitle = [...product];
  let copyHighPrice = [...product];
  let copyLowPrice = [...product];

  function stringSort(a, b){
    if (a.title < b.title)
    return -1;
    else if(a.title == b.title)
    return 0;
    else 
    return 1;
  }

  let sortTitle = copyTitle.sort(stringSort);
  let sortHighPrice = copyHighPrice.sort((a, b) => a.price - b.price);
  let sortLowPrice = copyLowPrice.sort((a, b) => b.price - a.price);

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
                <ToggleButton value={1} variant="dark" onClick={() => { }}>상품명순</ToggleButton>
                <ToggleButton value={2} variant="dark" onClick={() => {}}>가격높은순</ToggleButton>
                <ToggleButton value={3} variant="dark">가격낮은순</ToggleButton>
              </ToggleButtonGroup>
            </div>

            <div className='row'>
              {
                product.map((a, i) => {
                  return <Card product={product[i]} i={i} history={history} key={i} />
                })
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

function Card(props) {
  return (
    <div className='col-md-4 mt-3'>
      <img src={'./images/' + (props.i + 1) + '.jpg'} width='100%' height='70%'
        onClick={() => { props.history.push('/detail/' + props.product.id) }} />
      <h2 className="pt-3 mb-1"> {props.product.title} </h2>
      <p className='fontSize21 mb-1'> {props.product.content} </p>

      <div className='fontSize20' > {props.product.price} </div>

    </div>
  )
}
export default App;

