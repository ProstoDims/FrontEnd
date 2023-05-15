import { useState } from "react";
import classes from "../styles.module.css"
import ChangeEventForm from "./ChangeEventFrom";
import ModalWidnow from "./ModalWindow";

const EventItem = (props) =>
{
    const [modal, setModal] = useState(false)

    const changeEvent = (event) =>
    {
        setModal(false)
        props.change(event)
    }
    return (
        <div className={classes.singleEvent}>
            <p style={{cursor: 'default'}}>Название: {props.event.name}</p>
            <p style={{cursor: 'default'}}>Описание: {props.event.description}</p>
            <p style={{cursor: 'default'}}>Дата добавления: {props.event.date}</p>
            <button className={classes.buttonDelete} onClick = {() => props.remove(props.event, props.identificate)}>Удалить</button>

            <ModalWidnow visible={modal} setVisible={setModal}>
                <ChangeEventForm event={props.event} change={changeEvent}></ChangeEventForm>
            </ModalWidnow>

            <button className={classes.button} onClick = {e => setModal(true)}>Изменить</button>
        </div>
    )
}

export default EventItem;