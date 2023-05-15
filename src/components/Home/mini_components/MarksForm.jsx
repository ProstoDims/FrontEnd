
const MarksFrom = ({classes}) =>
{
    const TravelTo = () =>
    {
        window.location.href = "http://localhost:3000/marks"
    }
    return (
        <div className={classes.overplay}>
            <div className={classes.marksForm} onClick={TravelTo}>
                <p style={{cursor: 'default'}}>На вкладке "Отметки" вы можете ознакомится с успеваемостью
                 учеников по разным дисциплинам</p>
            </div>
        </div>
    )
}

export default MarksFrom;