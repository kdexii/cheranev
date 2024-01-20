// Import the react JS packages
import axios from "axios";
import {useState} from "react";
import "./register.css"
// Define the Register function.
export const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
            password2:password
        };

        const {data} = await axios.post('http://localhost:8000/api/register', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        }, {withCredentials: true});
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/login'

    }

    return (
        <div className="loginContainer">
        <form className="form_main" action="" onSubmit={submit}>
            <p className="heading">Регистрация</p>
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

            <button id="button">Зарегестрироваться</button>
        </form>
        </div>
    )
}