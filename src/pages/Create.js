import {useState} from 'react'

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
        <div className='vehicle'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={newForm.vehicle_make}
                    name='vehicle_make'
                    placeholder='Make'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    value={newForm.issue_description}
                    name='issue_description'
                    placeholder='Issues'
                    onChange={handleChange}
                />
                <input type='submit' value='Create Vehicle' />
            </form>
        </div>
    )
}

export default Create