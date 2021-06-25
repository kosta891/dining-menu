import axios from 'axios';
import React, { Fragment, useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import MainNavigation from '../components/Layout/MainNavigation';
import MealsNav from '../components/Meals/MealsNav';
import MealsContext from '../store/meals-context';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import MealListDetail from '../components/Meals/MealListDetail';
import MealsList from '../components/Meals/MealsList';

const FoodListDetail = (props) => {
  const { foodlist, foodlistsingle, foodId } = useParams();
  const location = useLocation();
  const mealsCtx = useContext(MealsContext);
  console.log(location);
  let params;

  if (foodlist === 'category') {
    params = 'c';
  }
  if (foodlist === 'areas') {
    params = 'a';
  }

  useEffect(() => {
    const getDataHandler = async () => {
      mealsCtx.setIsLoading(true);
      const fetchData = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${params}=${foodlistsingle}`
      );

      const data = fetchData.data.meals;

      mealsCtx.setListFood(data);

      mealsCtx.setIsLoading(false);
    };

    try {
      getDataHandler();
    } catch (error) {
      console.log(error);
    }
  }, [foodlist, foodlistsingle, foodId]);

  console.log('food data', mealsCtx.foodData, 'listdata', mealsCtx.foodlist);
  return (
    <Fragment>
      <MainNavigation />

      <MealsNav />

      <div style={{ display: 'flex' }}>
        <MealsList />
        {mealsCtx.isLoading && <LoadingSpinner />}
        {!mealsCtx.isLoading && <MealListDetail />}
      </div>
    </Fragment>
  );
};

export default FoodListDetail;
