import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Firebase
    // axios.get('https://pizzashop-76313-default-rtdb.firebaseio.com/pizzas.json')

    //json-server
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => { dispatch(setPizzas(data)) })
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} exact />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
