import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    const handleClick = () => {
      setShowIndex();
    }
    
    console.log(showItems,"showItems",data.itemCards)  
  return (
   <div>
  <div className="w-6/12 mx-auto my-4 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
    <div className="flex justify-between items-center cursor-pointer text-[#4A2B0F]" onClick={handleClick}>
      <span className="font-bold text-lg tracking-wide">{data.title} ({data.itemCards.length})</span>
      <span className="text-xl transition-transform duration-300">{showItems ? "⬆️" : "⬇️"}</span>
    </div>
    
    {showItems && (
      <div className="mt-4 border-t border-gray-200 pt-4">
        <ItemList items={data.itemCards} />
      </div>
    )}
  </div>
</div>

  )
}

export default RestaurantCategory