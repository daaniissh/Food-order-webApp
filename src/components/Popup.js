import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { Fragment, useReducer ,useState} from "react";

function Popup(props) {
  const { allDishes, currentdish, addCart,   } = props;

  let initialValue = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "add_item_number":
        return (state =  state + 1);
        break;

      default:
        return initialValue;
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);
  console.log(state);
 
 const AddCartelismHandler = (img,meal) => {
        
        dispatch("add_item_number");
        addCart( img,meal);
    
      };
  let dihes = allDishes
    .filter((dishes) => {
      return dishes.strMeal === currentdish;
    })
    .map((item) => {
     
      return (
        <Fragment>
          <div className="w-full h-[200px] relative">
            <div className="h-[30vh] overflow-hidden mb-[32px] relative">
              <img
                src={item.strMealThumb}
                className="w-full h-full rounded-lg object-cover "
                alt=""
              />
            </div>
            <h2 className="absolute z-[888] bottom-5 left-10 bg-white p-3 rounded-xl text-black font-bold ">
              {item.strCategory}
            </h2>

            <h2 className="popup-meal-name mb-3">{item.strMeal}</h2>
            <p className="dark:text-gray-400 overflow-y-scroll text-sm h-[170px]">
              {item.strInstructions}
            </p>
            <ul className="mb-[22px] flex">
              <li className="dish-ing-li">{item.strIngredient1}</li>
              <li className="dish-ing-li">{item.strIngredient2}</li>
              <li className="dish-ing-li">{item.strIngredient3}</li>
              <li className="dish-ing-li">{item.strIngredient4}</li>
            </ul>
          </div>
          <button
            className="popup-btn"
            onClick={() => AddCartelismHandler(item.strMealThumb, item.strMeal)}
          >
            Add to Cart
          </button>
        </Fragment>
      );
    });
  return (
    <div className="bg-black-transparant   fixed left-0 right-0 top-0 bottom-0 z-[999] flex flex-col items-center justify-center">
      <FontAwesomeIcon
        onClick={props.HidePopup}
        className="absolute z-50 right-4 top-1 md:top-4 hover:rotate-45 hover:ease duration-75 hover:cursor-pointer   text-red-600 font-bold text-3xl"
        icon={faXmark}
      />
      <div className="dark:bg-slate-800 bg-gray-200  m-[10px] md:w-[800px] md:h-[600px] rounded-lg  p-[20px]">
        {dihes}
      </div>
    </div>
  );
}

export default Popup;
