import { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
