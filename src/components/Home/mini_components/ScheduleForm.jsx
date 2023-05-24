import { useNavigate } from "react-router-dom";


const ScheduleForm = ({classes}) =>
{

    const navigate = useNavigate()
    const TravelTo = () =>
    {
        navigate("/schedule")
    }
    return (
        <div className={classes.form} onClick={TravelTo}>
            <button className={classes.buttonInForm}>Расписание</button>
        </div>
    )
}

export default ScheduleForm;