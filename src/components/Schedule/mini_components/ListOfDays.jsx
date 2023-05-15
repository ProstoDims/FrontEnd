import DayOfWeek from "./DayOfWeek";
import classes from "../styles.module.css"

const ListOfDays = ({schedule}) =>
{
    return(
        <div className={classes.days}>
            <DayOfWeek lessons={schedule.filter(days => days.day_of_week === "Понедельник")} day="Понедельник"/>
            <DayOfWeek lessons={schedule.filter(days => days.day_of_week === "Вторник")} day="Вторник"/>
            <DayOfWeek lessons={schedule.filter(days => days.day_of_week === "Среда")} day="Среда"/>
            <DayOfWeek lessons={schedule.filter(days => days.day_of_week === "Четверг")} day="Четверг"/>
            <DayOfWeek lessons={schedule.filter(days => days.day_of_week === "Пятница")} day="Пятница"/>
        </div>  
    )
}

export default ListOfDays;