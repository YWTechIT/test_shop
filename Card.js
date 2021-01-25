import React from 'react';

function Cards(props) {
    return (
      <div className='col-md-4 mt-3' >
        <img src={`./images/${props.product.title}.jpg`} width='100%' height='70%'
          onClick={() => { props.history.push('/detail/' + props.product.id) }} /> 
         
        <div className='border'>
          <h2 className="pt-3 mb-1"> {props.product.title} </h2>
          <p className='fontSize21 mb-1'> {props.product.content} </p>
          <p className='fontSize20 mb-3'> {props.product.price} </p>
        </div>
      </div>
    )
  }

export default Cards;