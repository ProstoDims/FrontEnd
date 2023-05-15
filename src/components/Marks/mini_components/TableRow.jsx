import MarkField from "./MarkField"
import NameField from "./NameField"
import classes from "../marks.module.css"
import { useState } from "react"
import ModalWidnow from "../../Events/mini_components/ModalWindow"
import ChangeMark from "./ChangeMark"
import AddNew from "./AddNew"
import AddNewForm from "./AddNewForm"

const TableRow = ({student, marks, change, addNew, subj}) =>
{
    const [visible, setVisible] = useState(false)
    const [modal, setModal] = useState(false)
    const [mark, setMark] = useState({})

    const changeM = (newMark) =>
    {
        setMark(newMark)
        setVisible(true)    
    }
    const changeMark = (newMark) =>
    {
        change(newMark)
        setVisible(false)
    }
    const addM = (mark) =>
    {
        setModal(false)
        const newM = {id: student.id, ...mark, subject:subj}
        addNew(newM)
    }

    return (
        <div className={classes.tableRow}>
            <ModalWidnow visible={visible} setVisible={setVisible}>
                <ChangeMark mark={mark} change={changeMark}/>
            </ModalWidnow>

            <NameField>{student.name}</NameField>
            {
                marks.map((mark, id) => <MarkField children={mark} key={id} changeMark={changeM}/>)
            }

            <AddNew setModal={setModal}/>
            <ModalWidnow visible={modal} setVisible={setModal}>
                <AddNewForm addNew={addM}/>
            </ModalWidnow>
        </div>
    )
}

export default TableRow;