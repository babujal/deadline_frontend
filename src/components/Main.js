import {useEffect, useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Header from './Header'
import HeaderIndex from './HeaderIndex'
import Index from '../pages/Index'
import Show from '../pages/Show'
import Edit from '../pages/Edit'
import Create from '../pages/Create'
import Register from '../pages/Register'
import Login from '../pages/Login'

// URL should have YOUR HEROKU URL for your backend, make sure you include the trailing
const URL = "https://node-api-deadline-1dce381c838c.herokuapp.com/vehicle"

//"https://localhost:4000"
//"https://node-api-deadline-1dce381c838c.herokuapp.com/vehicle"

const Main = (props) => {
    const navigate = useNavigate()
    const [vehicle, setVehicle] = useState(null)
    const [user, setUser] = useState(false)

    const userLogin = () => {
        return setUser(true)
    }

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
        if(response.status === 200) {
            const createdUser = await response.json()
            console.log(createdUser)
        }else {
            const error = await response.json()
            console.log(error)
            navigate('/register')
        }
        userLogin()
        navigate('/vehicle')
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
                <Route path='/login' element={[<Header/>,<Login createUser={createUser} userLogin={userLogin} URL={URL}/>]} />
                <Route path='/register' element={[<Header/>,<Register createUser={createUser} navigate={navigate}/>]} /> 
                <Route path='/vehicle' element={user ? ([<HeaderIndex/>,<Index vehicle={vehicle}/>]) : (<Navigate to='/register' />)} />
                <Route path='/create' element={[<Header/>,<Create createVehicle={createVehicle}/>]} />
                <Route path='/vehicle/:id' element={[<Header/>,<Show vehicle={vehicle}/>]} />
                <Route path='/edit/:id' element={[<Header/>,<Edit vehicle={vehicle} updateVehicle={updateVehicle} deleteVehicle={deleteVehicle}/>]} />
            </Routes>
        </main>
    )
}
  
export default Main