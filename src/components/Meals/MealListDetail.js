import React, { useContext } from 'react';
import MealsContext from '../../store/meals-context';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import classes from './MealListDetail.module.css';

const MealListDetail = (props) => {
  const { foodlist, foodlistsingle, foodId } = useParams();
  const { listFood } = useContext(MealsContext);
  console.log(foodlist, foodlistsingle, foodId);
  let errorMsg;
  if (!listFood) {
    errorMsg = <p>No data were found!</p>;
  } else {
    errorMsg = '';
  }

  console.log(listFood);
  return (
    <section className={classes.mealListDetail}>
      {listFood &&
        listFood.map((food) => (
          <ul key={food.strMeal}>
            <li className={classes.card}>
              <div className={classes.mealListDetailLink}>
                <Link to={`/menu/${foodlist}/${foodlistsingle}/${food.idMeal}`}>
                  {food.strMeal} <span>(id: {food.idMeal})</span>
                </Link>
              </div>

              <div className={classes.listImage}>
                <img src={food.strMealThumb} alt={food.strMeal} />
              </div>
            </li>
          </ul>
        ))}
    </section>
  );
};

export default MealListDetail;
