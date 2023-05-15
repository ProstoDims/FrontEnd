import axios from "axios";

export default class MarkServices
{
    static async getAll(value)
    {
        console.log(value)
        const id = value
        const responce = await axios.get(`http://127.0.0.1:8000/eduschedule/api/v1/students/${id}}/`)
        return responce.data
    }
}