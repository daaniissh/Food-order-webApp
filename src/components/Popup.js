import { faXmark,} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

function Popup(props) {
  const{allDishes,currentdish}=props

  let dihes = allDishes.filter((dishes)=>{
    return dishes.strMeal === currentdish
  }).map((item)=>{
    return(
      <>
      <div className="w-full h-[200px] mb-[353px] relative">
         <img src={item.strMealThumb} className="w-full mt-4   object-cover mb-[330px] p-3 rounded-lg h-[200px] " alt="" />
         <h3 className='absolute z-[888] bottom-5 left-10 bg-white p-3 rounded-xl text-black font-bold ' >{item.strCategory}</h3>
       
        
                <h1 className=' absolute top-40 left-4  mt-10 text-2xl font-mono font-extrabold' >{item.strMeal}</h1>
<ul className='absolute left-4 p-1 top-52 flex justify-center flex-col w-full' >
  <h1 className='underline decoration-yellow-500 decoration-2 font-medium text-lg mb-2 text-gray-800 pt-5 w-[20px]' >Ingridiance</h1>
  <li className='bg-gray-900 p-1 text-yellow-800 font-medium rounded-lg text-center mb-1' >{item.strIngredient1}</li>
  <li className='bg-gray-900 p-1 text-yellow-800 font-medium rounded-lg text-center mb-1'  >{item.strIngredient2}</li>
  <li className='bg-gray-900 p-1 text-yellow-800 font-medium rounded-lg text-center mb-1' >{item.strIngredient3}</li>
  <li className='bg-gray-900 p-1 text-yellow-800 font-medium rounded-lg text-center mb-1' >{item.strIngredient4}</li>
  <li className='bg-gray-900 p-1 text-yellow-800 font-medium rounded-lg text-center mb-1' >{item.strIngredient5}</li>
  <li className='bg-gray-900 p-1 text-yellow-800 font-medium rounded-lg text-center mb-1' >{item.strIngredient6}</li>
  <a href={item.strYoutube} className="bg-red-700 text-white font-medium px-8 mb-1 rounded-lg py-1 ml-6  " target="_blank">▶ Recipe</a>
</ul>
     
         
  </div>
      </>
       
    )
  })
  return (
    <div className=' bg-black-transparant   fixed left-0 right-0 top-0 bottom-0 z-[999] flex flex-col items-center justify-center' >
     <FontAwesomeIcon onClick={props.HidePopup} className='absolute right-4 top-4 hover:rotate-45 hover:ease duration-75 hover:cursor-pointer   text-red-600 font-bold text-3xl' icon={faXmark}/>
      <div className="bg-gray-200 relative w-[800px] h-[600px] rounded-lg flex flex-col items-center justify-center"> 
      
            

        {dihes}
        <button  className='bg-yellow-600  mb-10 p-2 font-medium text-white rounded-lg hover:bg-yellow-400 cursor-pointer' >Order Now</button>
      </div>

    </div>
  )
}

export default Popup