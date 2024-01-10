import "./style.css"
import {NavLink} from "react-router-dom";
// import gpu_icon from "../../img/components/graphics-card.png"
// import cpu_icon from "../../img/components/processor.png"

function Project({index, title, img, price_start, video_card, cpu, memory, resolution_supported}) {
    return (<NavLink to={`/project/${index - 1}`}>
        <li className="project">

            <section className="product-container product-1">
                <div className="card">
                    <div className="photo">
                        <img src={img} alt="image"/>
                    </div>
                    <div className="content">
                        <div className="title">{title}</div>
                        <div className="bg-title">{resolution_supported}</div>
                        <div className="feature size_price_start">
                            <p>{price_start} ₽</p>
                        </div>
                        <div className="feature size">
                            <div>видеокарта :</div>
                            <p>{video_card}</p>
                        </div>
                        <div className="feature color">
                            <div>процессор :</div>
                            <p>{cpu}</p>
                        </div>
                        <div className="feature color">
                            <div>память :</div>
                            <p>{memory}</p>
                        </div>

                        <button className="btn-buy">Заказать</button>

                    </div>
                </div>
            </section>
        </li>
    </NavLink>)
}

export default Project
