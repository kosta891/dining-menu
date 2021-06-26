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
    setListFood,

    isLoading,
    setIsLoading,
  } = useContext(MealsContext);

  let params;

  if (foodlist === 'category') {
    params = 'c';
  }
  if (foodlist === 'areas') {
    params = 'a';
  }

  useEffect(() => {
    const getDataFromApi = async () => {
      setIsLoading(true);
      const fetchData = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
      );
      const fetchDataPrevios = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?${params}=${foodlistsingle}`
      );
      const data = fetchData.data.meals;
      const dataPrevious = fetchDataPrevios.data.meals;

      setFoodDetail(data);
      setListFood(dataPrevious);
      setIsLoading(false);
    };
    try {
      getDataFromApi();
    } catch (error) {
      console.log(error);
    }
  }, [params, foodlistsingle, foodId]);

  return (
    <Fragment>
      <MainNavigation />
      <MealsNav />
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        {foodDetail ? <MealListDetail /> : <p>No data were found!</p>}

        <section>
          {isLoading && <LoadingSpinner />}
          {/* {!isLoading && <MealDetail />} */}
          {listFood ? <MealDetail /> : <p>No data were found!</p>}
        </section>
      </main>
    </Fragment>
  );
};

export default FoodDetailPage;
