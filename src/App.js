import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

class App extends Component {
  componentDidMount() {
    axios.get('https://pizzashop-76313-default-rtdb.firebaseio.com/pizzas.json')
      .then(({ data }) => { this.props.setPizzas(data) })
      .catch(error => console.log(error))
  }

  render() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home pizzas={this.props.items} exact />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
    );

  }
}


const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: items => dispatch(setPizzasAction(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
