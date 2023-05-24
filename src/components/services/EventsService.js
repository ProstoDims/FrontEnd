import axios from "axios";

export default class EventsService 
{
    static async getAll()
    {
        const responce = await axios.get("http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/events/",
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .catch(error =>
        {
            if(localStorage.getItem('REFRESH') && error.response.status === 401)
            {
                axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                .then(responce => {
                    localStorage.setItem('ACCESS', responce.data.access)
                    this.getAll()
                })
            }
        })
        return responce.data
    }

    static async addNewEvent(newEvent)
    {
        const responce = await axios.post("http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/events/", newEvent,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .catch(error =>
        {
            if(localStorage.getItem('REFRESH') && error.response.status === 401)
            {
                axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                .then(responce => {
                    localStorage.setItem('ACCESS', responce.data.access)
                    this.addNewEvent(newEvent)
                })
            }
        })
        return responce.statusText
    }

    static async deleteEvent(event)
    {
        const responce = await axios.delete(`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/events/${event.id}/`,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .catch(error =>
        {
            if(localStorage.getItem('REFRESH') && error.response.status === 401)
            {
                axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                .then(responce => {
                    localStorage.setItem('ACCESS', responce.data.access)
                    this.deleteEvent(event)
                })
            }
        })
        return responce.statusText
    }

    static async changeEvent(event)
    {
        const responce = await axios.put(`http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/events/${event.id}/`, event,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        .catch(error=>
        {
            if(localStorage.getItem('REFRESH') && error.response.status === 401)
            {
                axios.post('http://maximzhak43.pythonanywhere.com/token/refresh/', {refresh: localStorage.getItem('REFRESH')})
                .then(responce => {
                    localStorage.setItem('ACCESS', responce.data.access)
                    this.changeEvent(event)
                })
            }
        })
        return responce
    }
}