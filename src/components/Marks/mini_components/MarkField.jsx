import classes from "../marks.module.css"

const MarkField = ({children, changeMark}) =>
{   

    const change = () =>
    {
        if(localStorage.getItem('ROLE') === 'teacher')
        {
            changeMark(children)    
        }
        
    }
    return (
        <div className={classes.markField} onClick={change}>
            {children.value}
        </div>
    )
}

export default MarkField;