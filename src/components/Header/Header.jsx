import classes from "./Header.module.css"

const Header = () =>
{
    const TravelTo = () =>
    {
        window.location.href = "http://localhost:3000/home"
    }
    const TravelToEvents = () =>
    {
        window.location.href = "http://localhost:3000/events"
    }
    const TravelToMarks = () =>
    {
        window.location.href = "http://localhost:3000/marks"
    }
    const TravelToSchedule = () =>
    {
        window.location.href = "http://localhost:3000/schedule"
    }
    return(
        <div className={classes.header}>
            <button onClick={TravelTo} className={classes.textInHeader}>EduSchedule</button>
            <button onClick={TravelToEvents} className={classes.text}>События</button>
            <button onClick={TravelToMarks} className={classes.text}>Отметки</button>
            <button onClick={TravelToSchedule} className={classes.text}>Расписание</button>
        </div>
    )
}

export default Header;