import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let 기본state = [];

function reducer(state = 기본state, 액션) {
  if (액션.type === '장바구니추가') {
    let found = state.findIndex((e) => e.id === 액션.payload.id)

    if (found >= 0) {
      let copy = [...state];
      copy[found].quantity++;
      return copy;

    } else {
      let copy = [...state];
      copy.push(액션.payload);
      console.log(state);
      return copy;
    }
  }

  else if (액션.type === '항목제거') {
    let copy = [...state];
    let idx = copy.findIndex((e) => e.id === 액션.payload);
    if (idx > -1) copy.splice(idx, 1);
    return copy;
  }

  else if (액션.type === '수량증가') {
    let copy = [...state];
    copy[액션.payload].quantity++;
    return copy;
  }

  else if (액션.type === '수량감소') {
    let copy = [...state];
    copy[액션.payload].quantity--;
    if (copy[액션.payload].quantity < 0) {
      alert('0 미만으로 설정 할 수 없습니다.')
      copy[액션.payload].quantity = 0
    } else {
      return copy;

    }
    return copy;
  }

  else {
    return state
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
