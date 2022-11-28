import React, { useState } from "react";
import Alert from "./Alert";
import Card from "./Card";
import Pagination from "./pagination";
import Popup from "./Popup";

function FilterDishes({ single, setsingledish, Allmenu, dishes}) {
  const [filterdDish, setRes] = useState([]);
  const [showPopup, setShowpopup] = useState(false);
  const [currentdish, setCurrentdish] = useState("");
  const [activeDish, setActiveDish] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const [dishImages, setDishImage] = useState([]);
  const [popMenu, setPopmenu] = useState();
  const [Itempage, setItemPage] = useState(4);
  const showPopupHandler = (dishname,dishImg) => {
    setCurrentdish(dishname);
    setShowpopup(true)
    setDishImage(dishImg);
    
  };
  let filterd = filterdDish.length;
  let indexOfLastDish = currentPage * Itempage;

  let indexOffirstdish = indexOfLastDish - Itempage;

  let showDishes = filterdDish.slice(indexOffirstdish, indexOfLastDish);

  let singleData = single.map((item, index) => {
    if (index < 8) {
      return <Card showPopupHandler={showPopupHandler} strMealThumb={item.strMealThumb} strMeal={item.strMeal} />;
    }
  });
  
  const showFilterDataHandle = (category) => {
    setsingledish([]);
var filterdMenu2 = Allmenu.filter((dis) => {
    return dis.strCategory === category;
  })
  setPopmenu(filterdMenu2)
    setActiveDish(category);
    let filterdMenu = Allmenu.filter((dis) => {
      return dis.strCategory === category;
    }).map((filterd, index) => {
      return (
        <li key={index}>
          <img
            onClick={
              showPopupHandler
            }
            className="w-56 h-56 m-5 rounded-lg  hover:scale-105 transition-transform cursor-pointer select-none"
            src={filterd.strMealThumb}
            alt=""
          />
          <h2 className="m-5 max-w-[200px] dark:text-white font-sans font-semibold">
            {filterd.strMeal}
          </h2>
        </li>
      );
    });
    setRes(filterdMenu);
  };
  function HidePopup(e) {
    e.preventDefault();
    setShowpopup(false);
  }
  let allCategorys = dishes.map((item, index) => {
    return (
      <li
        key={index}
        onClick={() => {
          showFilterDataHandle(item.strCategory);
        }}
        className={
          item.strCategory === activeDish
            ? "p-3 hover:bg-black cursor-pointer   rounded-2xl mr-[20px] mb-10 text-white font-bold bg-black"
            : "p-3 bg-yellow-600 hover:bg-black cursor-pointer   rounded-2xl mr-[20px] mb-10 text-white font-bold"
        }
      >
        {item.strCategory}
      </li>
    );
  });

  return (
    <>
    {showPopup === (
      <Popup
      setShowpopup={setShowpopup}
      HidePopup={HidePopup}
      currentdish={currentdish}
      dishImages={dishImages}
      allDishes={popMenu}
      />
    )}
    <div className="container ">
      <h2 className="font-mono  dark:text-white font-semibold text-3xl mb-6 ml-12">
        Choose your <span className="border-b-4 border-yellow-600">Dishes</span>
      </h2>
      <div className=""></div>
      <div className="w-full flex flex-wrap justify-center">
        <ul className="flex flex-wrap justify-center mx-auto">
          {allCategorys}
        </ul>
      </div>
      <div className="w-full h-full">
        <ul className="flex flex-wrap gap-8 justify-center">
          {singleData}

          <Pagination></Pagination>
          {filterdDish.length !== 0 || singleData.length !== 0 ? (
            showDishes
          ) : (
            <Alert />
          )}
        </ul>
        <Pagination
          setCurrentPage={setCurrentPage}
          itempage={Itempage}
          dish={filterd}
        ></Pagination>
      </div>
    </div></>
  );
}

export default FilterDishes;
