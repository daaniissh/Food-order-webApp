import React, { Fragment, useState } from "react";
import Card from "./Card";
import Popup from "./Popup";
function SpecilaFoods(props) {
  const [showPopup, setShowpopup] = useState(false);
  const [currentdish, setCurrentdish] = useState("");
  const [dishImages, setDishImage] = useState([]);
  // * let specilaItemsMax = 8
  function showPopupHandler(dishname,dishImg) {
    setCurrentdish(dishname)
    setDishImage(dishImg)
    setShowpopup(true);
  }
  function HidePopup(e) {
    e.preventDefault();
    setShowpopup(false);
  }

  let speciladishes = props.img.map((dishes, index) => {
    if (index < 8) {
      return (
        <Card
          showPopupHandler={showPopupHandler}
          strMeal={dishes.strMeal}
          strMealThumb={dishes.strMealThumb}
        />
      );
    }
  });

  return (
    <Fragment>
      {showPopup && (
        <Popup currentdish={currentdish} allDishes={props.img} dishImages={dishImages} setShowpopup={setShowpopup} HidePopup={HidePopup}></Popup>
      )}
      <div className="container md:block flex flex-col justify-center  mx-auto w-full transition-opacity">
        <div className="max-w-xs">
          <h2 className="font-mono  font-semibold text-3xl mb-6 ml-5 -mt-20">
            Our Specila{" "}
            <span className="border-b-4 border-yellow-600">Dishes</span>
          </h2>
        </div>
        <div className=" flex justify-center mx-auto">
          <ul className="flex flex-wrap justify-center">{speciladishes}</ul>
        </div>
      </div>
    </Fragment>
  );
}

export default SpecilaFoods;
