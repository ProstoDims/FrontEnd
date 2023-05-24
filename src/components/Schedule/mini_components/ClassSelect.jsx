import classes from "../styles.module.css"

const ClassSelect = ({changeSchedule}) =>
{
    return (
        <div>
            <select onChange={event => changeSchedule(event.target.value)} className={classes.classSelect}>
                <option value='0'>Выберите класс</option>
                <option value='2'>11'A'</option>
                <option value='3'>10'Б'</option>
                <option value='4'>5'А'</option>
            </select>
        </div>
    )
}

export default ClassSelect;