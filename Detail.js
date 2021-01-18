/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory,  } from 'react-router-dom';


function Detail(props) {

    let history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 my-auto">
                    <img src="./images/1.jpg" width="100%" height='70%' />
                </div>
                <div className="col-md-5 my-auto">
                    <h4 className="mt-10">{props.product[0]['title']}</h4>
                    <p>{props.product[0]['content']}</p>
                    <p>{props.product[0]['price']}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-dark" onClick={() => { history.goBack() }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;