import classes from "../marks.module.css"

const ClassSelect = ({changeClass}) =>
{
    return (
        <div>
            <select onChange={event => changeClass(event.target.value)} className={classes.classSelect}>
                <option value='0'>Выберите класс</option>
                <option value='2'>11'A'</option>
                <option value='3'>10'Б'</option>
                <option value='4'>5'A'</option>
            </select>
        </div>
    )
}

export default ClassSelect;