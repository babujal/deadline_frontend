import {useState} from 'react'
import { Link } from "react-router-dom"
import { useNavigate, useParams } from 'react-router-dom'

const Show = (props) => {
    const params = useParams()
    const navigate = useNavigate()

    const vehicle = props.vehicle.find((v) => {
        return v._id === params.id
    })

    const editButton = () => {
        navigate('/edit')
    }

    return(
        <div className='vehicle'>
            <h5>Entry Date: {vehicle.time_stamp}</h5>
            <h5>Current state: {vehicle.state}</h5>
            <h2>{vehicle.vehicle_make}</h2>
            <h5>Initial issues:<br/>{vehicle.issue_description}</h5>
            <h5>Comments:<br/>{vehicle.comments}</h5>
            <button onClick={editButton}>Edit</button>
        </div>
    )
}

export default Show