import { useEffect, useState } from "react"
import ClassSelect from "./mini_components/ClassSelect"
import SubjectSelect from "./mini_components/SubjectSelect"
import MarkTable from "./mini_components/MarksTable"
import axios from "axios"


const Marks = () =>
{
    const [school_class, setSchool_Class] = useState('')
    const [subject, setSubject] = useState('')
    const [visibleSubjects, setVisibleSubjects] = useState(false)
    const [visibleTable, setVisibleTabel] = useState(false)
    const [data, setData] = useState([])

    const getAll = () =>
    {
        if(school_class > 0)
        {
            axios.get(`http://127.0.0.1:8000/eduschedule/api/v1/students/${school_class}/`)
            .then(responce => {
                setData(responce.data)
            })
            .catch(err => console.log(err))
        }
       
    }

    const changeMark = (newMark) =>
    {     
        axios.put(`http://127.0.0.1:8000/eduschedule/api/v1/marks/${newMark.id}/`, newMark)
        .then(() => getAll())
    }
    const addNew = (student) =>
    {
        console.log(student)
        axios.post(`http://127.0.0.1:8000/eduschedule/api/v1/marks/${student.id}/create`, {value: student.value, subject: student.subject})
        .then(() => getAll())
        .catch(err => console.log(err))
    }

    const changeClass = (value) =>
    {  
        if(value > 0)
        {
            setSchool_Class(value)
            setVisibleSubjects(true)
        }
        else
        {
            setVisibleSubjects(false)
            setVisibleTabel(false)
        }
    }
    
    const changeSubject = (value) =>
    {
        if(value)
        {
            setSubject(value)
            setVisibleTabel(true)
        }
        else
        {   
            setVisibleTabel(false)
        }
    }

    useEffect(() =>{
        getAll()
    }, [school_class])

    return (
        <div>
            <h1>Оценки</h1>
            <ClassSelect changeClass={changeClass}/>
            {visibleSubjects
            ? <SubjectSelect changeSubject={changeSubject}/>
            : <p>Класс не выбран</p>
            }
            {visibleSubjects && visibleTable
            ? <MarkTable students={data} subject={subject} change={changeMark} addNew={addNew}/>
            : <p/>
            }
            
        </div>
    )
}

export default Marks;