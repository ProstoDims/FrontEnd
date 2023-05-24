import classes from "../marks.module.css"

const NameField = ({children}) =>
{
    return(
        <div className={classes.nameField}>
            {children}
        </div>
    )
}

export default NameField;