import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/menu'>Picasso</Link>
      </div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/menu' activeClassName={classes.active}>
              menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName={classes.active}>
              about
            </NavLink>
          </li>
        </ul>
      </nav>
      {props.children}
    </header>
  );
};

export default MainNavigation;
