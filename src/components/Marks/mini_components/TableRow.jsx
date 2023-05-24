import MarkField from "./MarkField"
import NameField from "./NameField"
import classes from "../marks.module.css"
import { useState } from "react"
import ModalWidnow from "../../Events/mini_components/ModalWindow"
import ChangeMark from "./ChangeMark"
import AddNew from "./AddNew"
import AddNewForm from "./AddNewForm"

const TableRow = ({student, marks, change, addNew, subj, deleteMark}) =>
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
        const new_mark = {id: student.id, ...newMark}
        change(new_mark)
        setVisible(false)
    }
    const addM = (mark) =>
    {
        setModal(false)
        const newMark = {id:student.id, value:mark.value, subject:mark.subject}
        addNew(newMark)
    }
    const DeleteMark = (mark) =>
    {
        deleteMark(mark)
        setVisible(false);
    }

    return (
        <div className={classes.tableRow}>
            <ModalWidnow visible={visible} setVisible={setVisible}>
                <ChangeMark mark={mark} change={changeMark} deleteMark={DeleteMark}/>
            </ModalWidnow>

            <NameField>{student.name}</NameField>
            {
                marks.map((mark, id) => <MarkField children={mark} key={id} changeMark={changeM}/>)
            }

            {localStorage.getItem('ROLE') === 'teacher'
            ?<AddNew setModal={setModal}/>
            :<div/>
            }
            <ModalWidnow visible={modal} setVisible={setModal}>
                <AddNewForm addNew={addM} subj={subj}/>
            </ModalWidnow>
        </div>
    )
}

export default TableRow;