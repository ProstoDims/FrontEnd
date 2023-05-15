import { useState } from "react";
import AuthorizationServices from '../services/AutorizationServices'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./Authorization.module.css"

const Authorization = () =>
{
    const [data, setData] = useState({login: '', password: ''})
    async function sendRequest(event)
    {
        event.preventDefault()
        if(data.login && data.password)
        {
            await AuthorizationServices.login(data)
            if(localStorage.getItem('ACCESS') && localStorage.getItem('REFRESH'))
            {
                window.location.href = "http://localhost:3000/home"
            }
        }
        
        setData({login: '', password: '', is_staff: false})
    }

    return(
        <div className={classes.authorizationDiv}>
            <div className={classes.authorizationContent}>
                <h1 style={{marginTop: "0px"}}>Авторизация</h1>
                <MyInput name='login' placeholder="Логин"
                value={data.login} onChange={event => setData({...data, login: event.target.value})}
                style={{marginTop: '10px'}}/>
                <MyInput type='password' name = 'password' placeholder="Пароль"
                value={data.password} onChange={event => setData({...data, password: event.target.value})}
                style={{marginTop: '5px'}}/>
                <MyButton style={{width: '100px'}} onClick={sendRequest}>Войти</MyButton>
            </div>
        </div>
    )
}

export default Authorization;