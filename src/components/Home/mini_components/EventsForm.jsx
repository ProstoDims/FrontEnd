import { useNavigate } from "react-router-dom";


const EventForm = ({classes}) =>
{

    const navigate = useNavigate()
    const TravelTo = () =>
    {   
        navigate("/events")
    }
    return (
        <div className={classes.form} onClick={TravelTo}>
            <button className={classes.buttonInForm}>События</button>
        </div>
    )
}

export default EventForm;