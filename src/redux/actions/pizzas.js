import axios from 'axios';

export const fetchPizzas = () => dispatch => {
  dispatch(setLoaded(false))
  axios.get('http://localhost:3001/pizzas')
    .then(({ data }) => { dispatch(setPizzas(data)) })
    .catch(error => console.log(error))
}

export const setPizzas = val => ({
  type: 'SET_PIZZAS',
  payload: val,
});

export const setLoaded = bool => ({
  type: 'SET_LOADED',
  payload: bool
})
