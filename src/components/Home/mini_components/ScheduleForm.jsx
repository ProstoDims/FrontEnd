
const ScheduleForm = ({classes}) =>
{
    const TravelTo = () =>
    {
        window.location.href = "http://localhost:3000/schedule"
    }
    return (
        <div className={classes.overplay}>
            <div className={classes.scheduleForm} onClick={TravelTo}>
                <p style={{cursor: 'default'}}>На вкладке "Расписание" вы можете ознакомится
                 со школьным расписанием</p>
            </div>
        </div>
    )
}

export default ScheduleForm;