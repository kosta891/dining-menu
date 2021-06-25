import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MealsContext from '../../store/meals-context';

import classes from './MealDetail.module.css';

const MealDetail = () => {
  const params = useParams();
  const { foodDetail } = useContext(MealsContext);

  return (
    <div className={classes.mealDetail}>
      {foodDetail &&
        foodDetail.map((item, inx) => (
          <div key={item.idMeal}>
            {item.value}
            <h2>{item.strMeal}</h2>
            <p>category: {item.strCategory}</p>
            <p>area: {item.strArea}</p>
            <div className={classes.imgDetail}>
              <img src={item.strMealThumb} alt={item.strArea} />
            </div>
            <div>
              <h3>Main ingredients</h3>

              <ul>
                <li>{item.strIngredient1}</li>
                <li>{item.strIngredient2}</li>
                <li>{item.strIngredient3}</li>
                <li>{item.strIngredient4}</li>
                <li>{item.strIngredient5}</li>
                <li>{item.strIngredient6}</li>
                <li>{item.strIngredient7}</li>
                <li>{item.strIngredient8}</li>
                <li>{item.strIngredient9}</li>
                <li>{item.strIngredient10}</li>
                <li>{item.strIngredient11}</li>
              </ul>
            </div>
            <div>
              <h3>Instructions</h3>

              <p>{item.strInstructions}</p>
            </div>
            <div>
              <h3>Links</h3>
              <ul>
                <li>
                  <a href={item.strSource}>Meal source</a>
                </li>
                <li>
                  <a href={item.strYoutube}>YouTube video</a>
                </li>
                <li>
                  <a href={item.strTags}>{item.strTags}</a>
                </li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MealDetail;
