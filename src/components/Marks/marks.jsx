import { useEffect, useState } from "react"
import ClassSelect from "./mini_components/ClassSelect"
import SubjectSelect from "./mini_components/SubjectSelect"
import MarkTable from "./mini_components/MarksTable"
import axios from "axios"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


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
            axios.get(`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/students/${school_class}/`,
            {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
            .then(responce => {
                setData(responce.data)
            })
            .catch(error=>
            {
                if(localStorage.getItem('REFRESH') && error.response.status === 401)
                {
                    axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                    .then(responce => {
                        localStorage.setItem('ACCESS', responce.data.access)
                        getAll()
                    })
                }
            })
        }
       
    }

    const changeMark = (newMark) =>
    {   console.log(newMark)
        axios.put(`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/marks/${newMark.id}/`, newMark,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .then(responce => 
        {
            console.log(responce)
           getAll()
        })
        .catch(error=>
        {
            if(localStorage.getItem('REFRESH') && error.response.status === 401)
            {
                axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                .then(responce => {
                    localStorage.setItem('ACCESS', responce.data.access)
                    changeMark(newMark)
                })
            }
        })
    }
    const deleteMark = (mark) =>
    {
        axios.delete(`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/marks/${mark}/`,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .then(responce => {
            getAll()
        })
    }
    const addNew = (student) =>
    {
        axios.post(`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/marks/${student.id}/create`, student,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .then(responce => 
        {
           getAll()
        })
        .catch(error=>
        {
            if(localStorage.getItem('REFRESH') && error.response.status === 401)
            {
                axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                .then(responce => {
                    localStorage.setItem('ACCESS', responce.data.access)
                    addNew(student)
                })
            }
        })
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
            <Header />
            <ClassSelect changeClass={changeClass}/>
            {visibleSubjects
            ? <SubjectSelect changeSubject={changeSubject}/>
            : <p></p>
            }
            {visibleSubjects && visibleTable
            ? <MarkTable students={data} subject={subject} change={changeMark} addNew={addNew} deleteMark={deleteMark}/>
            : <p/>
            }
            <Footer />
        </div>
    )
}

export default Marks;