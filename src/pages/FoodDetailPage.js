import React, { Fragment, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MainNavigation from '../components/Layout/MainNavigation';
import MealsNav from '../components/Meals/MealsNav';

import MealDetail from '../components/Meals/MealDetail';
import MealsContext from '../store/meals-context';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const FoodDetailPage = () => {
  const { foodId } = useParams();

  const {
    foodDetail,
    setFoodDetail,

    listFood,

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
  }, [foodId]);

  return (
    <Fragment>
      <MainNavigation />
      <MealsNav />
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        {!foodDetail && <p>No data were found!</p>}
        <section>
          {isLoading && <LoadingSpinner />}

          {listFood ? <MealDetail /> : <p>No data were found!</p>}
        </section>
      </main>
    </Fragment>
  );
};

export default FoodDetailPage;
