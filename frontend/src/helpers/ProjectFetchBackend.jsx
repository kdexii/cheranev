import React, { useState, useEffect  } from 'react';

function ProjectFetchBackend() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:8000/api/projects');
        xhr.onload = function() {
            if (xhr.status === 200) {
                setData(JSON.parse(xhr.responseText));
            }
        };
        xhr.send();
        console.log("res : " + data)
    }, []);


    return(
        <div>
            {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
        </div>
    )
}

export default ProjectFetchBackend