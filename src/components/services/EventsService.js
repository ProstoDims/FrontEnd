import axios from "axios";

export default class EventsService 
{
    static async getAll()
    {
        const responce = await axios.get("http://127.0.0.1:8000/eduschedule/api/v1/events/",
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        return responce.data
    }

    static async addNewEvent(newEvent)
    {
        const responce = await axios.post("http://127.0.0.1:8000/eduschedule/api/v1/events/", newEvent,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        return responce.statusText
    }

    static async deleteEvent(event)
    {
        const responce = await axios.delete(`http://127.0.0.1:8000/eduschedule/api/v1/events/${event.id}`,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        return responce.statusText
    }

    static async changeEvent(event)
    {
        const responce = await axios.put(`http://127.0.0.1:8000/eduschedule/api/v1/events/${event.id}/`, event,
        {headers: {Authorization: `Bearer ${localStorage.getItem('ACCESS')}`}})
        return responce.statusText
    }
}