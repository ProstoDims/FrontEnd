import MyInput from "../../UI/MyInput/MyInput"
import MyButton from "../../UI/MyButton/MyButton"
import { useState } from "react"

const ChangeMark = ({mark, change}) =>
{   
    const [data, setData] = useState({value: ''})
    const ButtonClick = () =>
    {
        const newMark = {id: mark.id, ...data, subject: mark.subject}
        change(newMark)
        setData({value: ''})
    }

    return(
        <div>
            <MyInput placeholder="Новая оценка" value={data.value}
             onChange={e=>setData({...data, value:e.target.value})}/>
            <MyButton onClick={ButtonClick}>Изменить</MyButton>        
        </div>
    )
}

export default ChangeMark;