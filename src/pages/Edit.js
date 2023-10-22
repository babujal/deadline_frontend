import { useState } from 'react'
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

    return (
        <div className='container'>
            <div className='row'>
                <div className='d-flex justify-content-end'>
                    <button className="btn btn-danger btn-lg" onClick={handleDelete} id='delete'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='container d-flex justify-content-center'>
                        <div className='row col-lg-4 '>
                            <label for="basic-url" class="form-label mt-3">Car Make</label>
                            <div class="input-group mb-3 justify-content-center">
                                <input
                                    type='text'
                                    value={updateForm.vehicle_make}
                                    name='vehicle_make'
                                    placeholder='Make'
                                    className='form-control'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <label for="basic-url" class="form-label mt-3">Notes</label>
                    <div class="input-group mb-3 justify-content-center">
                        <input
                            type='text'
                            value={updateForm.comments}
                            name='comments'
                            placeholder='Notes'
                            className='form-control'
                            onChange={handleChange}
                        />
                    </div>
                    <label for="basic-url" class="form-label mt-3">Select Job Status</label>
                    <div class="input-group mb-3 justify-content-center">
                    <div className='row'>
                        <select
                            type='text'
                            value={updateForm.state}
                            name='state'
                            className='form-select'
                            onChange={handleChange}
                        >
                            <option value='inProgress'>In Progress</option>
                            <option value='done'>Done</option>
                        </select>
                    </div>
                    </div>
                    <input type='submit' value='Update Vehicle' className="btn btn-primary" />
                </form>
            </div>
        </div>
    )
}

export default Edit