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
            {props.event.photo
            ?<img src={`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/events/photo/${props.event.id}/`}
            alt="lol" className={classes.image}></img>
            :<div/>
            }
            <div className={classes.text}>{props.event.name}</div>
            <div style={{marginTop: '8px', marginBottom: '5px', fontSize:'22px'}}>Описание: {props.event.description}</div>


            {localStorage.getItem('ROLE') === 'admin'
            ?<div>
                <button className={classes.buttonDelete} onClick = {() => props.remove(props.event, props.identificate)}>Удалить</button>
                <button className={classes.button} onClick = {e => setModal(true)}>Изменить</button>
            </div>
            :<p/>
            }

            <ModalWidnow visible={modal} setVisible={setModal}>
                <ChangeEventForm event={props.event} change={changeEvent}></ChangeEventForm>
            </ModalWidnow>

        </div>
    )
}

export default EventItem;