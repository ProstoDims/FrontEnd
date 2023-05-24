import { useNavigate } from "react-router-dom"
import classes from "./Header.module.css"

const Header = () =>
{
    const navigate = useNavigate()
    const TravelToHome = () =>
    {
        navigate("/home")
    }
    const TravelToHelp = () =>
    {
        navigate("/help")
    }
    const TravelToEvents = () =>
    {
        navigate("/events")
    }
    const TravelToMarks = () =>
    {
        navigate("/marks")
    }
    const TravelToSchedule = () =>
    {
        navigate("/schedule")
    }
    return(
        <div className={classes.header}>
            <button onClick={TravelToHome} className={classes.textInHeader}>EduSchedule</button>
            <button onClick={TravelToHelp} className={classes.text}>Помощь</button>
            <button onClick={TravelToEvents} className={classes.text}>События</button>
            <button onClick={TravelToMarks} className={classes.text}>Отметки</button>
            <button onClick={TravelToSchedule} className={classes.text}>Расписание</button>
        </div>
    )
}

export default Header;