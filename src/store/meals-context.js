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
  ////////////////////////////////////////

  foodDataCategory: [],
  setFoodDataCategory: () => {},

  foodDataNational: [],
  setFoodDataNational: () => {},

  showMenuIcon: false,
  setShowMenuIcon: () => {},

  addClass: false,
  setAddClass: () => {},
});

export const MealsContextProvider = (props) => {
  const [foodData, setFoodData] = useState([]);

  const [listFood, setListFood] = useState([]);
  const [foodDetail, setFoodDetail] = useState([]);

  const [isLoading, setIsLoading] = useState();

  /////////////////////////////////////////

  const [foodDataCategory, setFoodDataCategory] = useState();
  const [foodDataNational, setFoodDataNational] = useState();

  const [showMenuIcon, setShowMenuIcon] = useState();
  const [addClass, setAddClass] = useState(false);

  const mealsValue = {
    foodData,
    setFoodData,

    listFood,
    setListFood,

    foodDetail,
    setFoodDetail,

    isLoading,
    setIsLoading,

    ///////////////////////////////////

    foodDataCategory,
    setFoodDataCategory,

    foodDataNational,
    setFoodDataNational,

    ///////////////////////////////

    showMenuIcon,
    setShowMenuIcon,

    addClass,
    setAddClass,
  };

  return (
    <MealsContext.Provider value={mealsValue}>
      {props.children}
    </MealsContext.Provider>
  );
};
export default MealsContext;
