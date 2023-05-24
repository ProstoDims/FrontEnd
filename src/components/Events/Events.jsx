import { useEffect, useState } from "react";
import EventList from "./mini_components/EventList"
import ModalWidnow from "./mini_components/ModalWindow";
import AddNewForm from "./mini_components/AddNewForm";
import EventsService from "../services/EventsService";
import Loader from "../UI/MyLoader/Loader";
import Header from "../Header/Header"
import classes from "./styles.module.css"

const Events = () =>
{
    const [events, setEvents] = useState([])
    const [modal, setModal] = useState(false)
    const [isEventsLoading, setIsEventsLoading] = useState(false)


    useEffect(() => {
        getEvents()
    },[])

    async function getEvents()
    {
        setIsEventsLoading(true)
        const events = await EventsService.getAll()
        setEvents(events)
        setIsEventsLoading(false)
    }
    async function createEvent(newEvent)
    {
        const request = await EventsService.addNewEvent(newEvent)
        if(request === 'Created')
        {
            setModal(false)
            getEvents() 
        }
        
    }
    async function removeEvent(event)
    {
        const request = await EventsService.deleteEvent(event)
        if(request === 'No Content')
        {
            getEvents()
        }
               
    }

    async function changeEvent(event)
    {
        const request = await EventsService.changeEvent(event)
        getEvents()
    }

    return (
        <div>
            <Header />       
            
            {localStorage.getItem('ROLE') === 'admin'
            ? <div>
                {!isEventsLoading
                ? <button className={classes.buttonAdd} onClick = {() => setModal(true)}>Добавить событие</button>
                : <p/>
                }
               </div> 
            :<div/>
            }
              

            <ModalWidnow visible={modal} setVisible={setModal}>
                <AddNewForm create={createEvent}></AddNewForm>
            </ModalWidnow>
            
            {isEventsLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            : <EventList change = {changeEvent} events = {events} remove = {removeEvent} ></EventList>
            } 
        </div>
    )
}

export default Events;  