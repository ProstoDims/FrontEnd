import classes from "../styles.module.css"
import ListOfSubjects from "./ListOfSubjects";

const DayOfWeek = ({lessons, day}) =>
{
    return (
        <div className={classes.day}>
            <div className={classes.daysHeader}><p style={{marginLeft: '8px'}}>{day}</p></div>

            {lessons.length
            ? lessons.map((lesson, id) => <ListOfSubjects id ={id} lesson = {lesson} key ={id} />)
            : <div style={{fontSize : "22px"}}>Расписание не было предоставленно</div>
            }
           
        </div>
    )
}

export default DayOfWeek;