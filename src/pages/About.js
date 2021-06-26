import { Fragment } from 'react';
import MainNavigation from '../components/Layout/MainNavigation';

const About = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main className='flexAbout'>
        <h1>Picasso Dining Meal</h1>
        <div>
          <p>
            Picasso Catering was created in 2006 out of a passion for amazing
            food and service. The then one-man operation saw rapid growth after
            booking its very first event—catering the anniversary party for the
            NewYork Film Society and its 1,000 guests. Through word of mouth, a
            lot of hard work and a commitment to producing one-of-a-kind events,
            Picasso has become one of the most beloved catering companies in
            NewYork. We believe that using the freshest ingredients produces the
            best results. We are tireless in staying abreast of the latest food
            trends. And we are obsessed with creating customized menus and
            culinary masterpieces for our clients. Simply put: we exist to make
            your vision a reality. Picasso is a member the NewYork Chamber of
            Commerce; National Association of Catering Executives (NACE); and
            International Special Events Society (ISES).
          </p>
        </div>
      </main>
    </Fragment>
  );
};

export default About;
