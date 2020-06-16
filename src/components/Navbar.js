import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as Actions from '../store/actions';

const Navbar = ({ category, cart, toggleCategory }) => {
  useEffect(() => {
    console.log('cart ', cart);
    console.log('categ ', category);
  }, []);

  return (
    <nav
      className="navbar header"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <span className="icon is-large has-text-danger">
            <i className="mdi mdi-48px mdi-food"></i>
          </span>
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Categorias</a>

            <div className="navbar-dropdown">
              {category.category.map((value) => (
                <a
                  key={value.id}
                  className="navbar-item"
                  onClick={() => toggleCategory(value)}
                >
                  {value.title}
                </a>
              ))}
              <hr className="navbar-divider" />
              <a className="navbar-item">Dê dicas</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-warning">
                {cart.value > 0 && (
                  <span style={{ marginRight: 20 }}>R$ {cart.value}</span>
                )}
                <span className="icon is-large has-text-danger">
                  <i className="mdi mdi-36px mdi-cart-outline"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCategory: (value) => dispatch(Actions.toggleCategory(value)),
});

const mapStateToProps = (state) => {
  console.log('teste state ', state);
  return {
    category: state.category,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
