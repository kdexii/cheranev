import BtnGitHub from "../components/btn-github/BtnGitHub";
import {useParams} from "react-router-dom";
import {projects} from "../helpers/projectsList";

function Project() {
    const {id} = useParams()
    const project = projects[id]
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>

                    <BtnGitHub link={project.gitHubLink}></BtnGitHub>

                </div>
            </div>
        </main>
    )
}

export default Project