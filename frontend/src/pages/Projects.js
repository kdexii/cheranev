import {projects} from "../helpers/projectsList";
import Project from "../components/project/Project";
function Projects() {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((project) => {
                            return (
                                <Project
                                    key={project.id}
                                    title={project.title}
                                    img={project.img}
                                    index={project.id}>
                                </Project>
                            )
                        })}

                    </ul>
                </div>
            </main>
        </>
    )
}

export default Projects