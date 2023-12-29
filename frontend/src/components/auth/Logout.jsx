import {useEffect, useState} from "react";
import axios from "axios";

export const Logout = () => {
    const access_token  = localStorage.getItem("access_token")

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.post('http://localhost:8000/logout/',{
                    refresh_token:localStorage.getItem('refresh_token')
                } ,{headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }}, {withCredentials: true});
                console.log(data)

                console.log('logout', data)
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login'
            } catch (e) {
                console.log('logout not working')
            }
        })();
    }, []);


    return (
        <div></div>
    )
}