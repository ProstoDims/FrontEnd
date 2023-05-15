import classes from "../styles.module.css"
import ListOfSubjects from "./ListOfSubjects";

const DayOfWeek = ({lessons, day}) =>
{
    return (
        <div className={classes.day}>
            <h2>{day}</h2>
            {lessons.length
            ? lessons.map((lesson, id) => <ListOfSubjects id ={id} lesson = {lesson} key ={id} />)
            : <p style={{fontSize : "20px"}}>Расписание не было предоставленно</p>
            }
           
        </div>
    )
}

export default DayOfWeek;