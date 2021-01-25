/* eslint-disable */
import React from "react";

import { Table, Card, Button } from "react-bootstrap";
import { useSelector, connect } from "react-redux";
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
  return (
    <Card className="mt-5">
      <h1 className="text-md-left">
        <FontAwesomeIcon icon={faShoppingCart} size="1x" />
      </h1>
      <Table responsive striped bordered hover className="mt-5">
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
          {props.state.map((n, i) => {
            return (
              <tr key={i}>
                <td>{n.id}</td>
                <td>{n.name}</td>
                <td>{n.quantity}</td>
                <td>
                  <p className="inline">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        props.dispatch({ type: "INCREASE", payload: n.id });
                      }}
                    >
                      +
                    </Button>
                  </p>
                  <p className="inline ml-3">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        props.dispatch({ type: "DECREASE", payload: n.id });
                      }}
                    >
                      -
                    </Button>
                  </p>
                </td>
                <td>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      props.dispatch({ type: "DELETE", payload: n.id });
                    }}
                  >
                    -
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  state: state,
});


export default connect(mapStateToProps)(Cart);
// export default Cart;
