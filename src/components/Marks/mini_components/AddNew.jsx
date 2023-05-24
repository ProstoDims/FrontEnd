import classes from "../marks.module.css"

const AddNew = ({setModal}) =>
{
    const click = () =>
    {
        setModal(true)
    }
    return (
        <div className={classes.addNew} onClick={click}>
            +
        </div>
    )
}

export default AddNew;