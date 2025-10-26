import type Student from "../../types/Student";
import StudentCard from "./StudentCard";
interface StudentListProps {
  students: Student[];
}
export default function StudentList({ students }: StudentListProps) {
  return (
    <>
      <table className="border-collapse">
        <caption>Список студентов</caption>
        <thead>
          <tr>
            <th className="border text-center px-5">ФИО</th>
            <th className="border text-center px-5">Дата рождения</th>
            <th className="border text-center px-5">Гражданство</th>
            <th className="border text-center px-5">Форма обучения</th>
            <th className="border text-center px-5">Номер общежития</th>
            <th className="border text-center px-5">Дата окончания визы</th>
            <th className="border text-center px-5">Удалить студента</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentCard key={student.passportNumber} student={student} />
          ))}
        </tbody>
      </table>
    </>
  );
}
