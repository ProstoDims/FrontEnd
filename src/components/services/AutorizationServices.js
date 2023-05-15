import axios from 'axios'

export default class AuthorizationServices
{
    static async login(data)
    {
        if(localStorage.getItem('ACCESS'))
        {
            localStorage.removeItem('ACCESS')
            localStorage.removeItem('REFRESH')
        }

        await axios.post('http://127.0.0.1:8000/eduschedule/api/v1/login', data)
        .then(responce =>
        {
            localStorage.setItem('ACCESS', responce.data.access)
            localStorage.setItem('REFRESH', responce.data.refresh)
        })
        .catch(error => console.log(error))
    }
}
