import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Hero from "./Hero";
import Specila from "./specilaFoods";
import FilterDishes from "./FilterDishes";
function Home() {
  const [menu, setData] = useState([]);
  const [category, setGatogery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Single, setSigle] = useState([]);

  const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";

  const API_URLS = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const getAllCategorys = () => {
    axios.get(API_URLS).then((res) => {
      setGatogery(res.data.categories);
    });
  };

  const API_URLSC = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";
  const NamedCAtogoery = () => {
    axios.get(API_URLSC).then((da) => {
      setSigle(da.data.meals);
    });
  };

  const mealData = () => {
    axios.get(API_URL).then((response) => {
      setData(response.data.meals);
      setLoading(false);
    });
  };
  useEffect(() => {
    mealData();
    getAllCategorys();
    NamedCAtogoery();

  }, []);

  // let menuItems = menu.map((item) => {
  //   return (

  //     <img
  //       className="w-1/2 h-1/2 mx-10 rounded-lg my-auto hover:scale-150 hover:ease-in duration-300 cursor-pointer "
  //       src={item.strMealThumb}
  //     />
  //   );
  // });

  return (
    <div className="overflow-x-auto dark">
      <FontAwesomeIcon
        className="absolute top-4 text-2xl right-4 z-50 text-yellow-300 cursor-pointer"
        icon={faSun}
      />

      <Hero />
      {!loading ? (
        <Specila img={menu} />
      ) : (
        <div className="w-full h-screen absolute flex justify-center items-center loading top-0 text-4xl font-bold text-center  text-gray-800 ">
          <img
            className="w-16 h-16 "
            src="https://samherbert.net/svg-loaders/svg-loaders/oval.svg"
            alt=""
          />{" "}
          <h2 className="text-white ml-5">Loading.....</h2>
        </div>
      )}
      {!loading ? (
        <FilterDishes
          setsingledish={setSigle}
          Allmenu={menu}
          single={Single}
          dishes={category}
        />
      ) : null}
    </div>
  );
}

export default Home;
