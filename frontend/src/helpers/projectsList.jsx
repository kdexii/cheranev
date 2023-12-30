import project01 from "../img/projects/01.jpg"
import project01Big from "../img/projects/01-big.jpg"

import project02 from "../img/projects/02.jpg"
import project02Big from "../img/projects/02-big.jpg"

import project03 from "../img/projects/03.jpg"
import project03Big from "../img/projects/03-big.jpg"

import project04 from "../img/projects/04.jpg"
import project04Big from "../img/projects/04-big.jpg"

import whitePcProductPc01 from "../img/projects/white-pc.png"
import whitePcProductPc02 from "../img/projects/white-pc2.png"
import whitePcProductPc03 from "../img/projects/white-pc-03.png"
import whitePcProductPc04 from "../img/projects/white-pc-04.png"
import {useEffect} from "react";
import axios from "axios";

function projectsList() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const headers = {
    };
    // eslint-disable-next-line no-unused-vars
    let data;
    axios.get('http://localhost:8000/api/projects', { headers })
        .then(response => data = response.data.total);

    return (
        [

        {
        id: 1,
        title: "Бюджетный",
        description: "Example skills 1",
        price_start: "54 000",
        img: whitePcProductPc01,
        video_card: "RTX 3050",
        cpu: "i7 13700kf",
        memory: "16GB",
        resolutions_supported: "2K",
        imgBig: project01Big,
        gitHubLink: "link"
    },
    {
        id: 2,
        title: "Приемлимый",
        skills: "Example skills 2",
        price_start: "120 000",
        img: whitePcProductPc02,
        video_card: "RTX 4060",
        cpu: "i7 13700kf",
        memory: "16GB",
        resolutions_supported: "4K",
        imgBig: project02Big,
        gitHubLink: "link"
    },
    {
        id: 3,
        title: "Мощный",
        skills: "Example skills 3",
        price_start: "254 000",
        img: whitePcProductPc03,
        video_card: "RTX 4090",
        cpu: "i7 13700kf",
        memory: "16GB",
        resolutions_supported: "8K",
        imgBig: project03Big,
        gitHubLink: "link"
    }])
}

export default projectsList()
// const projects = [
// {
//         id: 1,
//         title: "Бюджетный",
//         description: "Example skills 1",
//         price_start: "54 000",
//         img: whitePcProductPc01,
//         video_card: "RTX 3050",
//         cpu: "i7 13700kf",
//         memory: "16GB",
//         resolutions_supported: "2K",
//         imgBig: project01Big,
//         gitHubLink: "link"
//     },
//     {
//         id: 2,
//         title: "Приемлимый",
//         skills: "Example skills 2",
//         price_start: "120 000",
//         img: whitePcProductPc02,
//         video_card: "RTX 4060",
//         cpu: "i7 13700kf",
//         memory: "16GB",
//         resolutions_supported: "4K",
//         imgBig: project02Big,
//         gitHubLink: "link"
//     },
//     {
//         id: 3,
//         title: "Мощный",
//         skills: "Example skills 3",
//         price_start: "254 000",
//         img: whitePcProductPc03,
//         video_card: "RTX 4090",
//         cpu: "i7 13700kf",
//         memory: "16GB",
//         resolutions_supported: "8K",
//         imgBig: project03Big,
//         gitHubLink: "link"
//     },
// ]
// export {projects}
