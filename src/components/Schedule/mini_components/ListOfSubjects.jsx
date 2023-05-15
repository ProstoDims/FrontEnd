import classes from "../styles.module.css"

const ListOfSubjects = ({lesson}) =>
{
    return (
        <div className={classes.container}>
            <div className={classes.time}>{lesson.start_time} - {lesson.end_time}</div>
            <div className={classes.subject}>{lesson.class_name}</div>
            <div className={classes.classRoom}>Кабинет№ {lesson.classroom}</div>
        </div>
    )
}

export default ListOfSubjects;