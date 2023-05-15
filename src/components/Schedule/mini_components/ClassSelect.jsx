import classes from "../styles.module.css"

const ClassSelect = ({changeSchedule}) =>
{
    return (
        <div>
            <select onChange={event => changeSchedule(event.target.value)} className={classes.classSelect}>
                <option value='0'>Выберите класс</option>
                <option value='1'>11'A'</option>
                <option value='2'>9'A'</option>
                <option value='3'>5'Б'</option>
            </select>
        </div>
    )
}

export default ClassSelect;