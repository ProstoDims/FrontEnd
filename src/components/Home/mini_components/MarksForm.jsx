import { useNavigate } from "react-router-dom";


const MarkForm = ({classes}) =>
{
    const navigate = useNavigate()
    const TravelTo = () =>
    {
        navigate("/marks")
    }
    return (
        <div className={classes.form} onClick={TravelTo}>
            <button className={classes.buttonInForm}>Отметки</button>
        </div>
    )
}

export default MarkForm;