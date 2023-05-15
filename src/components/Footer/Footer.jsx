import classes from "./Footer.module.css"

const Footer = () =>
{
    return(
        <div className={classes.footer}>
            <p className={classes.text}>Телефон: +375447075837</p>
            <p className={classes.text}>Почта: davoker@mail.ru</p>
        </div>
    )
}

export default Footer;