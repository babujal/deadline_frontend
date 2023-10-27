import { useNavigate, useParams } from 'react-router-dom'

const Show = (props) => {
    const params = useParams()
    const navigate = useNavigate()

    const vehicle = props.vehicle.find((v) => {
        return v._id === params.id
    })

    const editButton = () => {
        navigate(`/edit/${vehicle._id}`)
    }

    const loaded = () => {
        return(
            <div className='vehicle'>
                <h5>Entry Date: {vehicle.time_stamp}</h5>
                <h5>Current state: {vehicle.state}</h5>
                <h2>{vehicle.vehicle_make}</h2>
                <h5>Initial issues:<br/>{vehicle.issue_description}</h5>
                <h5>Comments:<br/>{vehicle.comments}</h5>
                <button class="btn btn-success btn-lg" onClick={editButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                    </svg>
                </button>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            {props.vehicle ? loaded() : loading()}
        </section>
    )
}

export default Show