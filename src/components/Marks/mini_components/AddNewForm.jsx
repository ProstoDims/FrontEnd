import { useState } from "react"
import MyInput from "../../UI/MyInput/MyInput"
import MyButton from "../../UI/MyButton/MyButton"


const AddNewForm = ({addNew, subj}) =>
{   const [data, setData] = useState('')

    const addMark = (event) =>
    {
        event.preventDefault()
        if(parseInt(data) > 10)
        {
            setData(10)
        }
        else if(parseInt(data) < 0)
        {
            setData(0)
        }
        const newMark = {value : data, subject: subj}
        addNew(newMark)
        setData('')
    }
    return(
        <form>
            <MyInput value={data} placeholder='Оценка' onChange={e=>setData(e.target.value)}/>
            <MyButton onClick={addMark}>Добавить</MyButton>
        </form>
    )
}

export default AddNewForm;