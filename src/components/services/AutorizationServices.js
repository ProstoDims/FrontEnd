import axios from 'axios'

export default class AuthorizationServices
{
    static async login(data)
    {
        console.log(data)
        if(localStorage.getItem('ACCESS'))
        {
            localStorage.removeItem('ACCESS')
            localStorage.removeItem('REFRESH')
        }

        await axios.post('http://maximzhak43.pythonanywhere.com/eduschedule/api/v1/login', data)
        .then(responce =>
        {
            localStorage.setItem('ROLE', responce.data.status)
            localStorage.setItem('ACCESS', responce.data.access)
            localStorage.setItem('REFRESH', responce.data.refresh)
        })
        .catch(error => console.log(error))
    }
}
