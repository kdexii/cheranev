import Project from "../components/project/Project";
import {useEffect, useState} from "react";

function Projects() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const data = await fetch("http://localhost:8000/api/projects")
                .then(res => res.json())

            setUsers(data)
        })()
    }, [])


    return (

            <main className="section">
                <div className="container">
                    <h2 className="title-1">Готовые сборки</h2>
                    <ul className="projects">
                        {users.map((project) => {

                            return (
                                <Project
                                    key={project.id}
                                    title={project.title}
                                    description={project.description}
                                    img={project.image}
                                    price_start={project.price_start}
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
    )
}

export default Projects