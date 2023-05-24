import classes from "../marks.module.css"

const TableHeader = () =>
{
    return (
        <div className={classes.tableHeader}>
            <div className={classes.tableHeaderName}>Фамилия Имя Отчество</div>
            <div className={classes.tableHeaderMark}>Отметки</div>
        </div>
    )
}

export default TableHeader;