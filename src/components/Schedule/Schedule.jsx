import { useState } from "react";
import ListOfDays from "./mini_components/ListOfDays";
import ClassSelect from "./mini_components/ClassSelect";
import ScheduleService from "../services/ScheduleService";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Schedule = () =>
{
    const [visible, setVisible] = useState(false)
    const [schedule, setSchedule] = useState([])

    async function getShedule(value)
    {
        const responce = await ScheduleService.getAll(value)
        setSchedule(responce)
    }

    const ChangeOption = (value) =>
    {
        setVisible(true)
        value > 0 ? getShedule(value) : setVisible(false)
    }

    return (
        <div>
            <Header/>
            <ClassSelect changeSchedule={ChangeOption}/>

            {visible
            ? <ListOfDays schedule={schedule}/>
            : <p></p>
            }  

            <Footer />
        </div>
        
    )
}

export default Schedule;