import { useState } from "react";
import AuthorizationServices from '../services/AutorizationServices'
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./Authorization.module.css"
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Authorization = () =>
{
    const navigate = useNavigate()
    const [data, setData] = useState({login: '', password: ''})
    async function sendRequest()
    {
        if(data.login && data.password)
        {
            await AuthorizationServices.login(data)
            if(localStorage.getItem('ACCESS') && localStorage.getItem('REFRESH'))
            {
                navigate('/home')
            }     
        }
        
        setData({login: '', password: ''})
    }

    return(
        <div className={classes.authorizationDiv}>
            <div className={classes.authorizationContent}>
                <div className={classes.logo}>EduSchedule</div>
                <MyInput name='login' placeholder="Логин"
                value={data.login} onChange={event => setData({...data, login: event.target.value})}
                style={{marginLeft: '20px'}}/>
                <MyInput type='password' name = 'password' placeholder="Пароль"
                value={data.password} onChange={event => setData({...data, password: event.target.value})}
                style={{marginLeft: '20px'}}/>
                <MyButton style={{width: '100px'}} onClick={sendRequest}>Войти</MyButton>
            </div>
        </div>
    )
}

export default Authorization;