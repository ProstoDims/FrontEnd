import { useEffect, useState } from "react"
import classes from "../styles.module.css"


const ChangeEventForm = ({event, change}) =>
{
    const [data, setData] = useState({name: '', description: ''})
    
    useEffect(() => {
        setData(event)
    }, [])

    const changeEvent = () =>
    {
        const photo = event.photo
        const newData = {...data, photo}
        change(newData)
        setData({name: '', photo: '', description: ''})
    }

    return (
        <div className={classes.AddNewForm}>
            <input placeholder = 'Название' value = {data.name} className={classes.input}
            onChange = {e => setData({...data, name: e.target.value})}/>
            <input placeholder = 'Краткое описание' value = {data.description} className={classes.input}
            onChange = {e => setData({...data, description: e.target.value})}/>   
            <button className={classes.button} onClick ={e => changeEvent()}>Изменить</button>
        </div>
    )
}

export default ChangeEventForm;