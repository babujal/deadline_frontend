import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = (props) => {
    const params = useParams()
    const navigate = useNavigate()

    const vehicle = props.vehicle.find((v) => {
        return v._id === params.id
    })
    // console.log(vehicle)

    return(
        <h3>{vehicle.vehicle_make}</h3>
    )
}

export default Edit