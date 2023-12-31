import projectsList from "../helpers/ProjectsList";
import Project from "../components/project/Project";
function Projects() {
    return (
        <>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Готовые сборки</h2>
                    <ul className="projects">
                        {projectsList.map((project) => {
                            return (
                                <Project
                                    key={project.id}
                                    title={project.title}
                                    price_start={project.price_start}
                                    img={project.img}
                                    video_card={project.video_card}
                                    cpu={project.cpu}
                                    memory={project.memory}
                                    resolution_supported={project.resolutions_supported}
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