import {useEffect, useState} from "react";
import axios from "axios";

export const Profile = () => {
    const [message, setMessage] = useState('');
    const access_token = localStorage.getItem("access_token")

    const isAdmin = message === 'admin';
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


    if (message !== 'admin') {
        return (
            <div>
                <h1>{message}, добро пожаловать в ваш профиль!</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{message}, добро пожаловать в ваш профиль, админ!</h1>
                <form
                    id="form"
                    encType="multipart/form-data"
                    action="http://localhost:3333/upload"
                    method="POST"
                >
                    <input className="input file-input" type="file" name="file" multiple/>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}