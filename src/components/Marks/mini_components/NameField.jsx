import classes from "../marks.module.css"

const NameField = ({children}) =>
{
    return(
        <div className={classes.nameField}>
            <p>{children}</p>
        </div>
    )
}

export default NameField;