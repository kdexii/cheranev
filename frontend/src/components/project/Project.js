import "./style.css"
import {NavLink} from "react-router-dom";

function Project({index, title, img}) {
    return (<NavLink to={`/project/${index - 1}`}>
        <li className="project">
            <div className="product_card_block">
                <div className="product_card_block__preview">
                    <img src={img} alt={title} className="project__img"/>
                </div>
                <div className="product_card_block__desc">
                    <h3 className="project__title">{title}</h3>
                </div>
            </div>
        </li>
    </NavLink>)
}

export default Project