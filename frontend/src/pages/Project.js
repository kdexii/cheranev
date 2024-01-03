import BtnGitHub from "../components/btn-github/BtnGitHub";
import {useParams} from "react-router-dom";
import {projects} from "../helpers/ProjectsList";

function Project() {
    const {id} = useParams()
    const project = projects[id]
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={project.img} className="project-details__cover" alt="image"/>
                    <div className="project-details__desc">
                        <p>Description: {project.description}</p>
                    </div>

                    <BtnGitHub link={project.resolutions_supported}></BtnGitHub>

                </div>
            </div>
        </main>
    )
}

export default Project