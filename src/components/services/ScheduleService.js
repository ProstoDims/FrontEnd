import axios from "axios";

export default class ScheduleService 
{
    static async getAll(value)
    {
        const responce = await axios.get(`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/schedule/${value}/`,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .catch(error=>
        {
            if(localStorage.getItem('REFRESH') && error.response.status === 401)
            {
                axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                .then(responce => {
                    localStorage.setItem('ACCESS', responce.data.access)
                    this.getAll(value)
                })
            }
        })
        return responce.data
    }
}