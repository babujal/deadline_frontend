import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()

    const goToCreate = () => {
        navigate('/create')
    }

    return (
        <h1>Header</h1>,
        <button onClick={goToCreate}>+</button>
    )
}
  
export default Header