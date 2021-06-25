import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MealsNav from '../components/Meals/MealsNav';
import MainNavigation from '../components/Layout/MainNavigation';
import MealsList from '../components/Meals/MealsList';
import MealsContext from '../store/meals-context';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const FoodListPage = (props) => {
  const { foodlist } = useParams();
  const mealsCtx = useContext(MealsContext);

  let params;
  if (foodlist === 'category') {
    params = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  }
  if (foodlist === 'areas') {
    params = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  }

  useEffect(() => {
    const getDataFromApi = async () => {
      if (
        foodlist === 'category' ||
        foodlist === 'areas' ||
        foodlist === 'allMeals'
      ) {
        mealsCtx.setIsLoading(true);

        const fetchData = await axios.get(params);

        const data = fetchData.data.meals;

        const dataChanged = data.map((item) => {
          return {
            food: Object.values(item),
          };
        });

        mealsCtx.setFoodData(dataChanged);
        mealsCtx.setIsLoading(false);
      }
    };
    try {
      getDataFromApi();
    } catch (error) {
      console.log(error);
    }
  }, [params, foodlist]);

  let errorMsg;
  if (
    foodlist !== 'category' &&
    foodlist !== 'areas' &&
    foodlist !== 'allMeals'
  ) {
    errorMsg = 'No data were found!';
  } else {
    errorMsg = '';
  }

  return (
    <div>
      <MainNavigation />
      <MealsNav />

      {errorMsg}
      {mealsCtx.isLoading && <LoadingSpinner />}
      {!mealsCtx.isLoading && <MealsList />}
    </div>
  );
};

export default FoodListPage;
