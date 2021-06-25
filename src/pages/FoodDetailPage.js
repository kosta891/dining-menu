import React, { Fragment, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MainNavigation from '../components/Layout/MainNavigation';
import MealsNav from '../components/Meals/MealsNav';
import MealListDetail from '../components/Meals/MealListDetail';
import MealDetail from '../components/Meals/MealDetail';
import MealsContext from '../store/meals-context';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const FoodDetailPage = () => {
  const { foodlist, foodlistsingle, foodId } = useParams();

  const {
    foodDetail,
    setFoodDetail,
    listFood,
    foodData,
    isLoading,
    setIsLoading,
  } = useContext(MealsContext);

  useEffect(() => {
    const getDataFromApi = async () => {
      setIsLoading(true);
      const fetchData = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
      );
      const data = fetchData.data.meals;
      setFoodDetail(data);
      setIsLoading(false);
    };
    try {
      getDataFromApi();
    } catch (error) {
      console.log(error);
    }
  }, [foodlistsingle, foodId]);

  console.log(foodData, 'kkkkkkk', foodlist, isLoading);
  console.log(Boolean(foodData, 'bbbb', Boolean(foodlist)));
  return (
    <Fragment>
      <MainNavigation />
      <MealsNav />
      <main style={{ display: 'flex' }}>
        <MealListDetail />

        <section>
          {listFood ? <MealDetail /> : <p>No data were found!</p>}
          {/*  {isLoading && <LoadingSpinner />}
          {!isLoading && <MealDetail />} */}
        </section>
      </main>
    </Fragment>
  );
};

export default FoodDetailPage;
