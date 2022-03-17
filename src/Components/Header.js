import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from './MainContext';

const Header = () => {

    const [data] = useContext(MainContext)

    return (
        <>
            <div className="heading">
                <span className="vertical-text">The</span>
                <span className="capital-text">Siren</span>
            </div>
            <div className="nav-links">
                <Link to="/home" className="links">Home</Link>
                {
                    data.filter(
                        category => (category.id)%5 === 0
                    ).map(
                        items => (
                            <Link to={`/category/${items.category}`} className='links'>{items.category}</Link>
                        )
                    )
                }
            </div>
            <hr className="horizontal-line"/>
        </>
    )
}
export default Header;