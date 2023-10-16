import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = (props) => {
    const params = useParams()
    const navigate = useNavigate()

    const vehicle = props.vehicle.find((v) => {
        return v._id === params.id
    })
    // console.log(props.vehicle)

    const [updateForm, setUpdateForm] = useState({
        vehicle_make: vehicle.vehicle_make,
        comments: vehicle.comments,
        state: vehicle.state
    })

    const handleChange = (event) => {
        setUpdateForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
        // console.log(updateForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateVehicle(updateForm, params.id)
    }

    const handleDelete = () => {
        props.deleteVehicle(params.id)
        navigate('/vehicle')
    }

    return(
        <div className='vehicle'>
            <div className='delete'>
                <button onClick={handleDelete} id='delete'>Delete</button>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={updateForm.vehicle_make}
                    name='vehicle_make'
                    placeholder='Make'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={updateForm.comments}
                    name='comments'
                    placeholder='Notes'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={updateForm.state}
                    name='state'
                    placeholder='State'
                    onChange={handleChange}
                />
                <input type='submit' value='Update Vehicle' />
            </form>
        </div>
    )
}

export default Edit