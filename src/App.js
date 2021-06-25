import { useEffect, useState } from 'react';
import axios from 'axios';
import { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Layout from './components/Layout/Layout';
import Menu from './pages/Menu';
import WelcomePage from './pages/WelcomePage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FoodDetailPage from './pages/FoodDetailPage';
import FoodListPage from './pages/FoodListPage';
import FoodListDetail from './pages/FoodListDetail';

function App() {
  // za all meals ali dobija se samo 25 jela
  /*  const get = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/search.php?s='
        );
        const data2 = get.data;
        console.log(data2); */
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <WelcomePage />
          </Route>
          <Route path='/menu' exact>
            <Menu />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/menu/:foodlist/' exact>
            <FoodListPage />
          </Route>
          <Route path='/menu/:foodlist/:foodlistsingle' exact>
            <FoodListDetail />
          </Route>
          <Route path='/menu/:foodlist/:foodlistsingle/:foodId' exact>
            <FoodDetailPage />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Fragment>
  );
}

export default App;
