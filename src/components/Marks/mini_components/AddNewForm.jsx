import { useState } from "react"
import MyInput from "../../UI/MyInput/MyInput"
import MyButton from "../../UI/MyButton/MyButton"


const AddNewForm = ({addNew}) =>
{   const [data, setData] = useState({value: ''})

    const addMark = (event) =>
    {
        event.preventDefault()
        addNew(data)
        setData({value:''})
    }
    return(
        <form>
            <MyInput value={data.value} placeholder='Оценка' onChange={e=>setData({...data, value: e.target.value})}/>
            <MyButton onClick={addMark}>Добавить</MyButton>
        </form>
    )
}

export default AddNewForm;