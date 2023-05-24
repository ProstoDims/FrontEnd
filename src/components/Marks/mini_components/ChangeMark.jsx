import MyInput from "../../UI/MyInput/MyInput"
import MyButton from "../../UI/MyButton/MyButton"
import { useState } from "react"

const ChangeMark = ({mark, change, deleteMark}) =>
{   
    const [data, setData] = useState({value: ''})
    const ButtonClick = () =>
    {
        const newMark = {id: mark.id, ...data, subject: mark.subject}
        change(newMark)
        setData({value: ''})
    }
    const DeleteClick = () =>
    {
        const id = mark.id
        deleteMark(id);
    }

    return(
        <div>
            <MyInput placeholder="Новая оценка" value={data.value}
             onChange={e=>setData({...data, value:e.target.value})}/>
            <MyButton onClick={ButtonClick}>Изменить</MyButton>
            <MyButton onClick={DeleteClick}>Удалить</MyButton>      
        </div>
    )
}

export default ChangeMark;