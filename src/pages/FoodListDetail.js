import axios from 'axios';
import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import MainNavigation from '../components/Layout/MainNavigation';
import MealsNav from '../components/Meals/MealsNav';
import MealsContext from '../store/meals-context';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import MealListDetail from '../components/Meals/MealListDetail';
import MealsList from '../components/Meals/MealsList';

const FoodListDetail = (props) => {
  const { foodlist, foodlistsingle, foodId } = useParams();

  const mealsCtx = useContext(MealsContext);

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

      const fetchPreviousData = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/list.php?${params}=list`
      );
      const dataPrevious = await fetchPreviousData.data.meals;
      const dataChanged =
        dataPrevious &&
        dataPrevious.map((item) => {
          return {
            food: Object.values(item),
          };
        });

      mealsCtx.setFoodData(dataChanged);

      mealsCtx.setListFood(data);

      mealsCtx.setIsLoading(false);
    };

    try {
      getDataHandler();
    } catch (error) {
      console.log(error);
    }
  }, [foodlist, foodlistsingle, foodId]);

  let errorMsg;
  if (!mealsCtx.foodData || !mealsCtx.listFood) {
    errorMsg = <p>No data were found!</p>;
  }
  return (
    <Fragment>
      <MainNavigation />

      <MealsNav />
      {errorMsg}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MealsList />
        {mealsCtx.isLoading && <LoadingSpinner />}
        {!mealsCtx.isLoading && <MealListDetail />}
      </div>
    </Fragment>
  );
};

export default FoodListDetail;
