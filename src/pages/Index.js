import { Link } from "react-router-dom"

const Index = (props) => {

    const loaded = () => {
        const stateIcons = {
            needsRepairs: '/repairs.png',
            inProgress: '/progress.png',
            done: '/done.png'
        }

        const handleStringToIcon = (status) => {
            stateIcons.hasOwnProperty(status) //I have remove a var here redo icon var if problems
            const iconImg = stateIcons[status]
            return (
                iconImg
            )
        }
        
        return (
            <div className="container-sm">
                <table class="table table">
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Issue</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.vehicle.map((vehicle) => (
                            <tr key={vehicle._id}>
                                <td>{vehicle.vehicle_make}</td>
                                <td className="description">{vehicle.issue_description}</td>
                                <td>
                                    <img className="icon" src={handleStringToIcon(vehicle.state)} />
                                </td>
                                <Link to={`/vehicle/${vehicle._id}`}>
                                    <button type="button" class="btn btn-outline-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                                            <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </button>
                                </Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default Index