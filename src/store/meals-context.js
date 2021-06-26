import React from 'react';

import { useState } from 'react';

const MealsContext = React.createContext({
  foodData: [],
  setFoodData: () => {}, //data per category, area

  listFood: [],
  setListFood: () => {}, // list of data of category, area

  foodDetail: [],
  setFoodDetail: () => {}, // single data with details

  isLoading: false,
  setIsLoading: () => {},
});

export const MealsContextProvider = (props) => {
  const [foodData, setFoodData] = useState([]);

  const [listFood, setListFood] = useState([]);

  const [foodDetail, setFoodDetail] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const mealsValue = {
    foodData: foodData,
    setFoodData: setFoodData,

    listFood: listFood,
    setListFood: setListFood,

    foodDetail: foodDetail,
    setFoodDetail: setFoodDetail,

    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  return (
    <MealsContext.Provider value={mealsValue}>
      {props.children}
    </MealsContext.Provider>
  );
};
export default MealsContext;
