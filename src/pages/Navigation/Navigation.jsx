import { NavLink } from "react-router-dom";
import { GiFilmProjector } from "react-icons/gi";
import { List } from "./Navigation.styled";
const getActiveLink = ({isActive}) => {
    return isActive ? 'active' : '';
    
}

const Navigation = () => {
    return (
        <>
        <List>
            <li className="nav-link">
                <NavLink className={getActiveLink} to="" >
                    <GiFilmProjector style={{width: '32px', height: '32px'}} />
                </NavLink>
            </li>
        </List>
        </>
    )
}

export default Navigation;