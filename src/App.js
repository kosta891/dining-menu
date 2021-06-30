import { Fragment, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router';

import axios from 'axios';
import MealsContext from './store/meals-context';

import Layout from './components/Layout/Layout';
import Menu from './pages/Menu';
import WelcomePage from './pages/WelcomePage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import FoodDetailPage from './pages/FoodDetailPage';
import FoodListPage from './pages/FoodListPage';
import FoodListDetail from './pages/FoodListDetail';
import ScrollToTop from './ScrollToTop';

// za all meals ali dobija se samo 25 jela
/*  const get = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/search.php?s='
        );
        const data2 = get.data;
        console.log(data2); */

function App() {
  const mealsCtx = useContext(MealsContext);

  useEffect(() => {
    const getDataFromApi = async () => {
      mealsCtx.setIsLoading(true);

      const fetchDataCategory = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      );
      const fetchDataNational = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
      );

      const dataCategory = fetchDataCategory.data.meals;
      const dataNational = fetchDataNational.data.meals;

      mealsCtx.setFoodDataCategory(dataCategory);
      mealsCtx.setFoodDataNational(dataNational);
      mealsCtx.setIsLoading(false);
    };
    try {
      getDataFromApi();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Fragment>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route path='/' exact>
            <WelcomePage />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/menu' exact>
            <Menu />
          </Route>
          {/* <Route path='/menu/:foodlist' exact>
            
            <FoodListPage />
          </Route> */}
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
