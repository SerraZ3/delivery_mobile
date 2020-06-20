const INITIAL_STATE = {
  address_id: 1,
  delivery_type_id: 1,
  type_payment: 'cash',
  amount_will_paid: 0,
  products: [[], []],
};

function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CANCEL_ORDER':
      return {...INITIAL_STATE, products: [[], []]};
    case 'SET_AMOUNT_WILL_PAID':
      return {
        ...state,
        amount_will_paid: action.amount_will_paid,
      };
    case 'INCREMENT_PRODUCT':
      let incrementProduct = state.products;
      incrementProduct[1][action.idx] = incrementProduct[1][action.idx] + 1;
      return {...state, products: incrementProduct};
    case 'DECREMENT_PRODUCT':
      let decrementProduct = state.products;
      decrementProduct[1][action.idx] = decrementProduct[1][action.idx] - 1;
      return {...state, products: decrementProduct};
    case 'PUSH_PRODUCT':
      let addProduct = state.products;
      addProduct[0].push(action.id);
      addProduct[1].push(action.quantity);
      return {...state, products: addProduct};
    case 'REMOVE_PRODUCT':
      let removeProduct = state.products;
      removeProduct[0].splice(action.idx, 1);
      removeProduct[1].splice(action.idx, 1);
      return {...state, products: removeProduct};
    default:
      return state;
  }
}

export default order;
