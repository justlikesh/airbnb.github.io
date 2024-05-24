import { useState } from 'react'
import other from '../../assets/other.json'

const destinations = other
const title = other

const ExploreOtherOptionsTitle = () => {
  const [selectedCategory] = useState('nearby')
  const [showAllDestinations] = useState(false)

  return (
    <div className='bg-gray-100 p-8'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <h1 className='text-2xl font-medium mb-8'>{title.title}</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-left mb-16'>
          {destinations.nearby.map((destination, index) => (
            <button key={index} className='text-left'>
              <h2 className='font-medium mb-1'>{destination.city}</h2>
              <p className='font-light text-gray-500'>{destination.type}</p>
            </button>
          ))}
        </div>

        <h2 className='text-2xl font-medium mb-8'>다른 유형의 에어비앤비 숙소</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-left'>
          {destinations.otherTypes
            .slice(0, showAllDestinations ? destinations.otherTypes.length : 9)
            .map((destination, index) => (
              <button
                key={index}
                className='font-semibold text-left text-sm'
                onClick={() => console.log(`${destination.city} - ${destination.type}`)}
              >
                <div className='text-left'>
                  <h3 className='font-medium mb-2'>{destination.city}</h3>
                  <p className='text-gray-500 font-normal'>{destination.type}</p>
                </div>
              </button>
            ))}
        </div>
      </div>

      <hr className='border-gray-300 mb-2 mt-12 w-screen relative left-1/2 transform -translate-x-1/2 border-t-3' />
    </div>
  )
}

export default ExploreOtherOptionsTitle
