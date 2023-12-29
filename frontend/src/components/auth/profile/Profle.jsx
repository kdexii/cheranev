import {useEffect, useState} from "react";
import axios from "axios";

export const Profile = () => {
    const [message, setMessage] = useState('');
    const access_token = localStorage.getItem("access_token")

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){
            window.location.href = '/login'
        }
        else{
            (async () => {
                try {
                    const {data} = await axios.get('http://localhost:8000/home/', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${access_token}`
                        }
                    });

                    setMessage(data.message);
                } catch (e) {
                    console.log('not auth')
                }
            })()
        };
    }, []);


    return (
        <div>
            <h1>{message}, добро пожаловать в ваш профиль!</h1>
        </div>
    )
}