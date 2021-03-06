/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DetailId(props) {

    let { id } = useParams();
    let history = useHistory();
    let findProduct = props.product.find((e) => e.id == id);

    useEffect(() => {
        window.scrollTo(0, 90)
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm" ></div>
                <div className="col-md-5 mt-5" >
                    <img src={`/images/${findProduct['title']}.jpg`} width='100%' height='70%' />
                    <div className="col-md mt-2">
                        <h4 className="pt-3 mb-1">제품명: {findProduct['title']}</h4>
                        <p className='fontSize21 mb-1'>기능: {findProduct['content']} </p>
                        <div className='fontSize20' >가격: {findProduct['price']} </div>
                        <div className='mt-2'>
                            <button className="btn btn-dark" onClick={() => { history.goBack() }}>뒤로가기</button>
                            <button className="btn btn-danger">주문하기</button>

                            <button className="btn btn-secondary" onClick={() => { 
                                props.dispatch({type: 'ADD', payload: {id: findProduct.id, name: findProduct.title, quantity: 1}})
                                history.push('/Cart') }}>장바구니에 추가</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm"></div>
            </div>
        </div>
    )
}

function stateToProps(state){
    console.log(state);
    return {
      state : state
    }
  }

export default connect(stateToProps)(DetailId)
// export default DetailId;