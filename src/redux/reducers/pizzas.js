const initialState = {
  items: [],
  isLoading: false,
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'SET_PIZZAS') {
    return { ...state, items: action.payload }
  }
  // if (action.tupe === 'SET_CATEGORY') {
  //   return { ...state, category: action.payload }
  // }
  return state;
};

export default pizzas;