import type Student from "../../types/Student";
import StudentCard from "./StudentCard";
interface StudentListProps {
  students: Student[];
  onDeleteStudent: (studentId: string) => void;
  onStartEditing: (studentId: string) => void;
  editingStudentId: string | null;
  onCancelEditing: (studentId: string) => void;
  onUpdateStudent: (student: Student) => void;
}
export default function StudentList({
  students,
  onDeleteStudent,
  onStartEditing,
  editingStudentId,
  onCancelEditing,
  onUpdateStudent,
}: StudentListProps) {
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
            <th className="border text-center px-5">Редактировать</th>
            <th className="border text-center px-5">Номер паспорта</th>
            <th className="border text-center px-5">Курс обучения</th>
            <th className="border text-center px-5">Статус</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentCard
              onUpdateStudent={onUpdateStudent}
              onCancelEditing={onCancelEditing}
              editingStudentId={editingStudentId}
              onStartEditing={onStartEditing}
              onDeleteStudent={onDeleteStudent}
              key={student.id}
              student={student}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
