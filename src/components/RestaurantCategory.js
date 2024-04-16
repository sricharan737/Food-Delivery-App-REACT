import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    const handleClick = () => {
        setShowIndex();
    }

  return (
    <div className='flex justify-between items-center w-6/12 '>
        {/*Header of accordian  */}
        <div className="w-full  m-4 bg-gray-100  rounded-md shadow-md">
            <div className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
                <span className='p-2 m-2 text-lg text-center font-semibold'>{data.title} ({data.itemCards.length})</span>
                <span className='m-2 py-2 text-2xl'>⬇️</span>
            </div>
        {/*Body of accordian */}
          {showItems && <ItemList items = {data.itemCards} />}  
        </div>     

        
        
        
    </div>
  )
}

export default RestaurantCategory