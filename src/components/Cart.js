import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Cart({ cartItem }) {
  console.log(cartItem);
  let MapCartItem = cartItem.map((item) => {
    return (
      <div className="w-full border ">
        <img src={item.img} className="rounded-md p-1" />
        <h1 className="p-[1px] text-center  font-bold">{item.title}</h1>
      </div>
    )
  });
  let cartItemNumber = cartItem.length - 1;
  return (
    <div className="z-[99] p-1 fixed overflow-x-hidden  bg-gray-100 flex-wrap flex max-h-96 max-w-[100px] overflow-y-scroll  top-[20%] right-5 rounded-md">
      <h1 className="text-yellow-700 font-bold ml-1" 
      >Cart</h1>
      <FontAwesomeIcon className="text-green-700 ml-1 mt-1" icon={faCartArrowDown} />
      <span className="bg-red-500 text-white rounded-lg px-1   absolute text-[10px] left-[56.5px] top-[2px]" >{cartItemNumber}</span>
      {MapCartItem}
    </div>
  );
}

export default Cart;
