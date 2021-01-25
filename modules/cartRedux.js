// const ADD = "ADD";
// const DELETE = "DELETE";
// const INCREASE = "INCREASE";
// const DECREASE = "DECREASE";

// export const addProduct = () => ({ type: "ADD" });
// export const deleteProduct = () => ({ type: "DELETE" });
// export const increase = () => ({ type: "INCREASE" });
// export const decrease = () => ({ type: "DECREASE" });

const initialState = [];

function Reducer(state = initialState, action) {
  if (action.type === 'ADD') {
    let found = state.findIndex((e) => e.id === action.payload.id);

    if (found >= 0) {
      let copy = [...state];
      copy[found].quantity++;
      return copy;
    } else {
      let copy = [...state];
      let add = copy.concat(action.payload);
      return add;
    }

  } else if (action.type === 'DELETE') {
    let copy = [...state];
    let idx = copy.filter((copy) => copy.id !== action.payload);
    return idx;

  } else if (action.type === 'INCREASE') {
    let copy = [...state];
    copy[action.payload].quantity++;
    return copy;

  } else if (action.type === 'DECREASE') {
    let copy = [...state];
    copy[action.payload].quantity--;
    if (copy[action.payload].quantity < 0) {
      alert("0 미만으로 설정 할 수 없습니다.");
      copy[action.payload].quantity = 0;
    } else {
      return copy;
    }
    return copy;
  }

  return state;
}

export default Reducer;