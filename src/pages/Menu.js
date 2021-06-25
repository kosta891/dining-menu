import { Fragment } from 'react';

import MainNavigation from '../components/Layout/MainNavigation';
import MealsNav from '../components/Meals/MealsNav';

const Menu = () => {
  return (
    <Fragment>
      <MainNavigation />
      <MealsNav />
    </Fragment>
  );
};

export default Menu;
