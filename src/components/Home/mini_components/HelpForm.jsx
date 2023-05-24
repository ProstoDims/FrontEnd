import { useNavigate } from "react-router-dom";


const HelpForm = ({classes}) =>
{
    const navigate = useNavigate()
    const TravelTo = () =>
    {
        navigate("/help")
    }
    return(
        <div className={classes.form} onClick={TravelTo}>
            <button className={classes.buttonInForm}>Помощь</button>
        </div>
    )
}

export default HelpForm;