import { Fragment, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './MealsNav.module.css';

import MealsContext from '../../store/meals-context';
import { FaBars, FaCaretDown, FaTimes } from 'react-icons/fa';

const MealsNav = () => {
  const mealsCtx = useContext(MealsContext);

  const showIcon = () => {
    mealsCtx.setShowMenuIcon((prev) => !prev);
    mealsCtx.setAddClass((prev) => !prev);
    document.body.classList.toggle('hidden');
  };
  const hideSideNavbar = () => {
    mealsCtx.setAddClass(false);
    mealsCtx.setShowMenuIcon(false);
    document.body.classList.remove('hidden');
  };

  return (
    <Fragment>
      <header className={classes.sideHeader}>
        <div className={classes.mealsNav}>
          <nav>
            <div onClick={showIcon} className={classes.menuSideIcons}>
              {!mealsCtx.showMenuIcon && <FaBars />}
              {mealsCtx.showMenuIcon && <FaTimes />}
            </div>

            <ul
              className={`${classes.navListSide} ${
                mealsCtx.addClass && classes.activeNav
              } `}
            >
              <li>
                Category
                <span>
                  <FaCaretDown />
                </span>
                <ul className={classes.submenu}>
                  {mealsCtx.foodDataCategory &&
                    mealsCtx.foodDataCategory.map((item, inx) => (
                      <li key={inx}>
                        <NavLink
                          to={`/menu/category/${item.strCategory}`}
                          activeClassName='menu-active'
                          onClick={hideSideNavbar}
                        >
                          {item.strCategory}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </li>

              <li>
                National Meals
                <span>
                  <FaCaretDown />
                </span>
                <ul className={classes.submenu}>
                  {mealsCtx.foodDataNational &&
                    mealsCtx.foodDataNational.map((item, inx) => (
                      <li key={inx}>
                        <NavLink
                          to={`/menu/areas/${item.strArea}`}
                          activeClassName='menu-active'
                          onClick={hideSideNavbar}
                        >
                          {item.strArea}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default MealsNav;
