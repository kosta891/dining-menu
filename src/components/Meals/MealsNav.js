import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MealsNav.module.css';

import Button from '../UI/Button';

const MealsNav = () => {
  return (
    <Fragment>
      <div className={classes.mealsNav}>
        <Button>
          <NavLink activeClassName={classes.active} to='/menu/category'>
            Category
          </NavLink>
        </Button>
        <Button>
          <NavLink activeClassName={classes.active} to='/menu/areas'>
            National Dishes
          </NavLink>
        </Button>
      </div>
    </Fragment>
  );
};

export default MealsNav;
