import React, { useState, useEffect } from 'react';

export default function Navbar() {
  return (
    <nav
      className="navbar header"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <span class="icon is-large has-text-danger">
            <i class="mdi mdi-48px mdi-food"></i>
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
              <a className="navbar-item">Salgados</a>
              <a className="navbar-item">Almoço</a>
              <a className="navbar-item">Pizzas</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Dê dicas</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-warning">
                <span class="icon is-large has-text-danger">
                  <i class="mdi mdi-36px mdi-cart-outline"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
