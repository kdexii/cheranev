// Import the react JS packages
import axios from "axios";
import {useState} from "react";
import "./login.css"
// Define the Login function.
export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };

        const {data} = await axios.post('http://localhost:8000/token/', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, {withCredentials: true});

        console.log(data)
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token")
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/profile'

    }

    return (
        <div className="loginContainer">
        <form className="form_main" action="" onSubmit={submit}>
            <p className="heading">Авторизация</p>
            <div className="inputContainer">
                {/* Нужно добавить икноку пользавателя */}
                <input
                    className="inputField"
                    placeholder="Имя пользователя"
                    name='username'
                    type='text'
                    id="username"
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div className="inputContainer">
                {/* Нужно добавить икноку пароля */}
                <input
                    name='password'
                    type="password"
                    className="inputField"
                    id="password"
                    placeholder="Пароль"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button id="button">Войти</button>
            <div className="signupContainer">
                <p>Нет учетной записи?</p>
                <a href="/register">Регистрация</a>
            </div>
        </form>
        </div>
    )
}