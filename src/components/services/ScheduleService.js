import axios from "axios";

export default class ScheduleService 
{
    static async getAll(value)
    {
        const responce = await axios.get(`http://127.0.0.1:8000/eduschedule/api/v1/schedule/${value}/`)
        return responce.data
    }
}