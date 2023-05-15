

const SubjectSelect = ({changeSubject}) =>
{
    return(
        <div>
            <select onChange={event => changeSubject(event.target.value)}>
                <option value=''>Выберите предмет</option>
                <option value='Белорусский язык'>Белорусский язык</option>
                <option value='Белорусская литература'>Белорусская литература</option>
                <option value='Русский язык'>Русский язык</option>
                <option value='Русская литература'>Русская литература</option>
                <option value='Иностранный язык'>Иностранный язык</option>
                <option value='Математика'>Математика</option>
                <option value='Информатика'>Информатика</option>
                <option value='История'>История</option>
                <option value='Обществоведение'>Обществоведение</option>
                <option value='География'>География</option>
                <option value='Биология'>Биология</option>
                <option value='Химия'>Химия</option>
                <option value='Астрономия'>Астрономия</option>
                <option value='Физическая культура и здоровье'>Физическая культура и здоровье</option>
                <option value='Черчение'>Черчение</option>
            </select>
        </div>
    )
}

export default SubjectSelect;