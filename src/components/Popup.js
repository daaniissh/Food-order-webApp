import { faXmark,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

function Popup(props) {
  const{allDishes,currentdish}=props

  let dihes = allDishes.filter((dishes)=>{
    return dishes.strMeal === currentdish
  }).map((item)=>{
    return(
  
      <div className="w-full h-[200px] relative">
        <div className="h-[30vh] overflow-hidden mb-[32px] relative">
        <img src={item.strMealThumb} className="w-full h-full rounded-lg object-cover " alt="" />

        </div>
         <h2 className='absolute z-[888] bottom-5 left-10 bg-white p-3 rounded-xl text-black font-bold ' >{item.strCategory}</h2>
       
      
     <h2 className='popup-meal-name mb-3' >{item.strMeal}</h2>
     <p className='overflow-y-scroll text-sm h-[170px]' >{item.strInstructions}</p>
     <ul className='mb-[22px] flex' >
      <li className='dish-ing-li' >{item.strIngredient1}</li>
      <li className='dish-ing-li'  >{item.strIngredient2}</li>
      <li className='dish-ing-li'  >{item.strIngredient3}</li>
      <li className='dish-ing-li'  >{item.strIngredient4}</li>
     </ul>
         
  </div>
       
       
    )
  })
  return (
    <div className='bg-black-transparant   fixed left-0 right-0 top-0 bottom-0 z-[999] flex flex-col items-center justify-center' >
     <FontAwesomeIcon onClick={props.HidePopup} className='absolute right-4 top-1 md:top-4 hover:rotate-45 hover:ease duration-75 hover:cursor-pointer   text-red-600 font-bold text-3xl' icon={faXmark}/>
      <div className="bg-gray-200  m-[10px] md:w-[800px] md:h-[600px] rounded-lg  p-[20px]"> 
      
            

        {dihes}
        <button  className='popup-btn' >Order Now</button>
      </div>

    </div>
  )
}

export default Popup