

const ClassSelect = ({changeClass}) =>
{
    return (
        <div>
            <select onChange={event => changeClass(event.target.value)}>
                <option value='0'>Выберите класс</option>
                <option value='1'>11'A'</option>
                <option value='2'>9'A'</option>
                <option value='3'>5'Б'</option>
            </select>
        </div>
    )
}

export default ClassSelect;