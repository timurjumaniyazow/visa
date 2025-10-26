import type Student from "../../types/Student";

interface StudentCardProps {
  student: Student;
  onDeleteStudent: (student: Student) => void;
}
export default function StudentCard({
  student,
  onDeleteStudent,
}: StudentCardProps) {
  return (
    <tr>
      <td className="border text-center px-5">{student.name}</td>
      <td className="border text-center px-5">
        {student.dateOfBirth.toLocaleDateString("ru-RU")}
      </td>
      <td className="border text-center px-5">{student.citizenship}</td>
      <td className="border text-center px-5">{student.educationForm}</td>
      <td className="border text-center px-5">
        {student.dormitoryNumber === undefined
          ? "Без общежития"
          : student.dormitoryNumber}
      </td>
      <td className="border text-center px-5">
        {student.visaExpiryDate === undefined
          ? "Безвиз"
          : student.visaExpiryDate.toLocaleDateString("ru-RU")}
      </td>
      <td className="border text-center px-5">
        <button onClick={() => onDeleteStudent(student)} type="button">
          Удалить
        </button>
      </td>
    </tr>
  );
}
