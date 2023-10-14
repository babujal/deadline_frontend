
const Index = (props) => {

    const loaded = () => {
        
        return props.vehicle.map((vehicle) => {
            return(
                
                <div key={vehicle._id} className="vehicle">
                    <tr>
                        <th>Make</th>
                        <th>Description</th>
                        <th>State</th>
                        <th>Details</th>
                    </tr>
                    <td>{vehicle.vehicle_make}</td>
                </div>
            )
        })
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