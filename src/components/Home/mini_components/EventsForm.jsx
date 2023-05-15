
const EventsFrom = ({classes}) =>
{
    const TravelTo = () =>
    {
        window.location.href = "http://localhost:3000/events"
    }
    return (
        <div className={classes.overplay}>
            <div className={classes.eventForm} onClick={TravelTo}>
            <p style={{cursor: 'default'}}>На вкладке "События" вы сможете ознакомится
             со списком школьных событий</p>
            </div>
        </div>
    )
}

export default EventsFrom;