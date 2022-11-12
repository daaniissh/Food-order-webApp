import React from "react";

function Pagination(props) {
  const { dish } = props;

  function displayNextImages(event) {
    let num = event.target.id;
    props.setCurrentPage(num);
  }
  let numberofpages = [];
  // let filterd = props.filterdDishes
  for (let i = 1; i <= Math.ceil(dish / props.itempage); i++) {
    numberofpages.push(i);
  }
  let pages = numberofpages.map((item) => {
    return (
      <li
        id={item}
        onClick={displayNextImages}
        className="px-4 py-2 rounded-sm mr-3 
        text-white font-bold first-letter:
      hover:bg-white hover:text-yellow-600 hover:border-solid border-2 border-yellow-600 hover cursor-pointer bg-yellow-600"
      >
        {item}
      </li>
    );
  });

  return <ul className="container flex justify-center mb-10 mt-10">{pages}</ul>;
}

export default Pagination;
