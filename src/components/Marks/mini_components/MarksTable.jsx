import TableRow from "./TableRow"


const MarkTable = ({students, subject, change, addNew}) =>
{
    return(
        <div style={{marginTop : '10px'}}>
            {
            students.map((student, id) => <TableRow student={student} change={change} addNew={addNew} subj={subject}
            marks={student.marks.filter(element => element.subject === subject)} key={id}/>)
            }
        </div>
    )
}

export default MarkTable;   