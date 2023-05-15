import classes from "../marks.module.css"

const MarkField = ({children, changeMark}) =>
{   

    const change = () =>
    {
        changeMark(children)
    }
    return (
        <div className={classes.markField} onClick={change}>
            <p>{children.value}</p>
        </div>
    )
}

export default MarkField;