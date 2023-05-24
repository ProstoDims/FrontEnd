import TableHeader from "./TableHeader";
import TableRow from "./TableRow"


const MarkTable = ({students, subject, change, addNew, deleteMark}) =>
{
    return(
        <div style={{marginTop : '10px'}}>
            <TableHeader/>
            {students.length
            ? students.map((student, id) => <TableRow student={student} change={change} addNew={addNew} subj={subject}
            marks={student.marks.filter(element => element.subject === subject)} key={id} deleteMark={deleteMark}/>)
            : <p></p>
            }
        </div>
    )
}

export default MarkTable;   