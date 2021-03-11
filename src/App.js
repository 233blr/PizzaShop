import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('https://pizzashop-76313-default-rtdb.firebaseio.com/pizzas.json')
      .then((res => setPizzas(res.data)))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home pizzas={pizzas} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
