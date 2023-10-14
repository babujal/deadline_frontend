
const Index = (props) => {

    const loaded = () => {
        
        return (
            <div className="vehicle">
                <table>
                    <thead>
                        <tr>
                            <th>Make</th>
                            <th>Issue</th>
                            <th>State</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.vehicle.map((vehicle) => (
                            <tr key={vehicle._id}>
                                <td>{vehicle.vehicle_make}</td>
                                <td>{vehicle.issue_description}</td>
                                <td>{vehicle.state}</td>
                                <td>View</td>
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