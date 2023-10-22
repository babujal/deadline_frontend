import { useState } from 'react'

const Create = (props) => {

    const [newForm, setNewForm] = useState({
        vehicle_make: '',
        issue_description: ''
    })

    const handleChange = (event) => {
        setNewForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createVehicle(newForm)
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <label for="basic-url" class="form-label mt-3">Car Make</label>
                    <div class="input-group mb-3 justify-content-center">
                        <input
                            type='text'
                            value={newForm.vehicle_make}
                            name='vehicle_make'
                            placeholder='Make'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='row'>
                    <label for="basic-url" class="form-label mt-3">Issue</label>
                    <div class="input-group mb-3 justify-content-center">
                        <input
                            type='text'
                            value={newForm.issue_description}
                            name='issue_description'
                            placeholder='Issues'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <input type='submit' value='Create Vehicle' className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Create