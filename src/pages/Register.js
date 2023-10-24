import { useState } from 'react'

const Register = (props) => {

    const [newForm, setNewForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setNewForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createUser(newForm)
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <label for="basic-url" className="form-label mt-3">Type a user name</label>
                    <div className="input-group mb-3 justify-content-center">
                        <input
                            type='text'
                            value={newForm.username}
                            name='username'
                            placeholder='User Name'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='row'>
                    <label for="basic-url" class="form-label mt-3">Choose a password</label>
                    <div class="input-group mb-3 justify-content-center">
                        <input
                            type='text'
                            value={newForm.password}
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <input type='submit' value='Register' className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Register