import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import classes from "./Help.module.css"

const Help = () =>
{
    return (
        <div>
            <Header/>
            <div className={classes.container}>
                <h2>Телефоны:</h2>
                    <li>+375447075837</li>
                    <li>+375441792183</li>
                    <li>+375296611141</li>
                <h2>Почта:</h2>
                    <li>davoker@mail.ru</li>
                    <li>maxim@gmail.com</li>
                    <li>valera@gmail.com</li>
                <h2 style={{marginTop:'100px'}}>Меры предосторожности:</h2>
                    <li>Редактирование и добавление событий является возможным только для администрации</li>
                    <li>Изменять, добавлять и удалять оценки могут только учителя</li>
                    <li>Пользователи оповещаются за 5 минут до начала технических работ на сервере</li>
                    <li>Во время технических работ Веб-сайт будет недоступен</li>
                    <li>Веб-сайт не является готовым продуктом. Он ежедневно меняется и обновляется</li>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Help;