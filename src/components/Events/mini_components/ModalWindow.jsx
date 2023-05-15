import classes from "../styles.module.css"

const ModalWidnow = ({children, visible, setVisible}) =>
{
    const rootClass = [classes.myModal]
    if(visible)
    {
        rootClass.push(classes.active)
    }

    return (
        <div className={rootClass.join(' ')} onClick={()=>setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default ModalWidnow;