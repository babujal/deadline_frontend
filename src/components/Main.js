import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import Edit from '../pages/Edit'

// URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
const URL = "http://localhost:4000/vehicle"

const Main = (props) => {
    const [vehicle, setVehicle] = useState(null)

    const getVehicle = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setVehicle(data)
    }

    useEffect(() => { 
        getVehicle()
    }, [])

    const loaded = () => {
        
    }
    return(
        <main>
            <Routes>
                <Route path='/vehicle' element={<Index vehicle={vehicle}/>} />
                <Route path='/vehicle/:id' element={<Show vehicle={vehicle}/>} />
                <Route path='/edit/:id' element={<Edit vehicle={vehicle}/>} />
            </Routes>
        </main>
    )
}
  
export default Main