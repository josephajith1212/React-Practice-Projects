import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])
  const removeTour = (key) => {
    setTours(prevState => {
      return prevState.filter((tour) => {return tour.id !== key})
    })
  }
  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{fetchTours(url)},[])
  if (tours.length===0) return (
    <main>
      <div className="title">
        <h2>No tours available!</h2>
        <button  className='btn' onClick={()=>fetchTours()}>Refresh</button>
      </div>
    </main>
  )
  if(isLoading) return (<main><Loading/></main>)
  return (<main><Tours tours={tours} removeTour={removeTour}/></main>)
}

export default App
