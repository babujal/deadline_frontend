import {useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import HeaderIndex from './HeaderIndex'
import Index from '../pages/Index'
import Show from '../pages/Show'
import Edit from '../pages/Edit'
import Create from '../pages/Create'
import Register from '../pages/Register'

// URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
const URL = "http://localhost:4000/vehicle"

//"https://localhost:4000"
//"https://node-api-deadline-1dce381c838c.herokuapp.com/vehicle"

const Main = (props) => {
    const [vehicle, setVehicle] = useState(null)
    const [user, setUser] = useState(null)

    const getVehicle = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setVehicle(data)
    }

    const createVehicle = async (vehicle) => {
        const response = await fetch(URL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vehicle)
        })
        console.log(response)
        const createdVehicle = await response.json()
        setVehicle((prev) => [...prev, createdVehicle])
    }

    //New Created
    const createUser = async (user) => {
        const response = await fetch(URL+'/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(response)
        const createdUser = await response.json()
        // setUser((prev) => [...prev, createdUser])
    }

    const updateVehicle = async (vehicle, id) => {
        await fetch(`${URL}/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vehicle)
        })
        getVehicle()
        console.log(vehicle)
    }

    const deleteVehicle = async (id) => {
        await fetch(`${URL}/${id}`, {
            method: 'delete'
        })
        getVehicle()
    }

    useEffect(() => { 
        getVehicle()
    }, [])

    return(
        <main>
            <Routes>
                <Route path='/register' element={[<Header/>,<Register createUser={createUser}/>]} /> 
                <Route path='/vehicle' element={[<HeaderIndex/>,<Index vehicle={vehicle}/>]} />
                <Route path='/create' element={[<Header/>,<Create createVehicle={createVehicle}/>]} />
                <Route path='/vehicle/:id' element={[<Header/>,<Show vehicle={vehicle}/>]} />
                <Route path='/edit/:id' element={[<Header/>,<Edit vehicle={vehicle} updateVehicle={updateVehicle} deleteVehicle={deleteVehicle}/>]} />
            </Routes>
        </main>
    )
}
  
export default Main


// const createUser = async (user) => {
    //     const response = await fetch(URL, {
    //         method: 'post',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //     const createdUser = await response.json()
    //     setVehicle((prev) => [...prev, createdUser])
    // }