import EventItem from "./EventItem";
import classes from "../styles.module.css"

const EventList = ({change, remove, create, ...props}) =>
{
    return (
        <div className={classes.eventList}>
            {props.events.length !== 0
            ? 
                props.events.map((event, number) =><EventItem identificate = {number} change = {change} remove = {remove} event = {event} key = {number} />)
            : 
                <h2 style={{textAlign: 'center'}}>События отсутствуют</h2>
            }
        </div>
    )
}

export default EventList;   