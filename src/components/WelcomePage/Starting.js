import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import classes from './Starting.module.css';

const Starting = () => {
  return (
    <Fragment>
      <div className={classes.bgcImg}></div>
      <main className={classes.starting}>
        <div className={classes.startingNav}>
          <div className={classes.startingLogo}>
            <h1>Picasso</h1>
            <h3>Dining Menu</h3>
          </div>
          <div className={classes.buttons}>
            <Button>
              <Link to='/menu'>Menu</Link>
            </Button>
            <Button>
              <Link to='/about'>About</Link>
            </Button>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Starting;
