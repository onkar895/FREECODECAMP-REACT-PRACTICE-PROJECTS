/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import Loading from "./loading"
import Tours from "./Tours"

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const FetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }

  useEffect(() => {
    FetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <div><h2>No tours left</h2></div>
        <button style={{ background: 'white', color: 'red', padding: '10px 30px', borderRadius: '5px', border: '2px solid red', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer', }} onClick={(FetchTours)} > Refresh</button>
      </main >
    )
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTours={removeTours} />
      </main>

    </>
  )
}

export default App
