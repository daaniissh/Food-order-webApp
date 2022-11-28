import React from 'react'

function Card(props) {
  const {strMeal,strMealThumb} = props

 
  return (
    <span key={"hello"} onClick={()=>props.showPopupHandler(strMeal,strMealThumb)}>

    
    <li>
    <img
      className="w-56 h-56 m-5 rounded-lg  hover:scale-105 transition-transform cursor-pointer select-none"
      src={strMealThumb}
      alt=""
    />
    <h2 className="m-5 max-w-[200px] dark:text-white  font-sans font-semibold">
      {strMeal}
    </h2>
  </li>
   </span>
  )
}

export default Card