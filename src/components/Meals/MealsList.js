import React, { useContext, useEffect } from 'react';
import { useParams, NavLink, useLocation } from 'react-router-dom';

import MealsContext from '../../store/meals-context';
import classes from './MealsList.module.css';

import Button from '../UI/Button';

const MealsList = (props) => {
  const mealsCtx = useContext(MealsContext);

  const { foodlist } = useParams();

  return (
    <section className={classes.mealsList}>
      {mealsCtx.foodData &&
        mealsCtx.foodData.map((item, inx) => (
          <ul key={inx}>
            <li>
              <Button>
                <NavLink
                  to={`/menu/${foodlist}/${item.food}`}
                  activeClassName='menu-active'
                >
                  {item.food}
                </NavLink>
              </Button>
            </li>
          </ul>
        ))}
    </section>
  );
};

export default MealsList;
