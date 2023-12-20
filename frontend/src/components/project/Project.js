import "./style.css"
import {NavLink} from "react-router-dom";

function Project({index, title, img}) {
    return (
        <NavLink to={`/project/${index - 1}`}>
            <li className="project">
                <img src={img} alt={title} className="project__img"/>
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    )
}

export default Project