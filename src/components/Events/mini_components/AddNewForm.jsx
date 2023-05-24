import { useState } from "react";
import classes from "../styles.module.css"

const AddNewForm = ({create}) =>
{
    const [data, setData] = useState({name: '',photo: null, description: ''})

    const addNewEvet = (event) =>
    {
        event.preventDefault()

        const newEvent = {id: Date.now(), ...data}
        console.log(newEvent)
        create(newEvent)
        setData({name: '', photo: null, description: ''})

    }


    return (
        <div>
            <form className={classes.AddNewForm}>
                <input value ={data.name} placeholder="Название" className={classes.input}
                 onChange={e=>setData({...data, name: e.target.value})}/>
                <input value = {data.description} placeholder="Краткое описание" className={classes.input}
                 onChange={e=>setData({...data, description: e.target.value})}/>
                <button className={classes.button} onClick = {addNewEvet}>Добавить</button>
            </form> 
        </div>
    )
}

export default AddNewForm;