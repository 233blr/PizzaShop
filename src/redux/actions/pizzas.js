import axios from 'axios';

export const fetchPizzas = () => dispatch => {
  axios.get('http://localhost:3001/pizzas')
    .then(({ data }) => { dispatch(setPizzas(data)) })
    .catch(error => console.log(error))
}

export const setPizzas = val => ({
  type: 'SET_PIZZAS',
  payload: val,
});
