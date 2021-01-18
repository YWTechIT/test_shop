/* eslint-disable */
import React from 'react';

import { Table, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { BootstrapTable, TableHeaderColumn, selectRowProp } from 'react-bootstrap-table';


function Cart(props) {
    const selectRowProp = {
        mode: 'checkbox',
        bgColor: 'lightgrey'
        // clickToSelect: true  // enable click to select
    };

    return (
        <Card className='mt-5'>
            <h1 className='text-md-left'><FontAwesomeIcon icon={faShoppingCart} size='1x' /></h1>
            <Table responsive striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>수량설정</th>
                        <th>항목제거</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((n, i) => {
                            return (
                                <tr key={i}>
                                    <td>{n.id}</td>
                                    <td>{n.name}</td>
                                    <td>{n.quantity}</td>
                                    <td>
                                        <p className='inline'><Button variant='secondary' onClick={() => { props.dispatch({ type: '수량증가', payload: n.id }) }}>+</Button></p>
                                        <p className='inline ml-3'><Button variant='secondary' onClick={() => { props.dispatch({ type: '수량감소', payload: n.id }) }}>-</Button></p>
                                    </td>
                                    <td>
                                    <Button variant='secondary' onClick={() => { props.dispatch({ type: '항목제거', payload: n.id }) }}>-</Button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </Card>


    )
}

function stateToProps(state) {
    return {
        state: state
    }
}

export default connect(stateToProps)(Cart);
// export default Cart;