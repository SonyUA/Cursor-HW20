import {  NavLink } from "react-router-dom";
import "./index.css"
const Header = () => {
    return (
        <header className="head">
            <ul className="list">
                <li className="link"><NavLink  activeclassame ="active" to="*">Home</NavLink></li>
                <li className="link"><NavLink to="/publications">Publications</NavLink></li>
                <li className="link"><NavLink to="/photo">Photo</NavLink></li>
                <li className="link"><NavLink to="/contacts">Contacts</NavLink></li>
            </ul>
            <h2>ЦЕ ГОЛОВА )))</h2>
        </header>
    ) 
    
}
export default Header