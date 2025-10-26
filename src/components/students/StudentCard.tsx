import type Student from "../../types/Student";

interface StudentCardProps {
  student: Student;
  onDeleteStudent: (student: string) => void;
  onStartEditing: (studentId: string) => void;
  editingStudentId: string | null;
  onCancelEditing: (studentId: string) => void;
  onUpdateStudent: (student: Student) => void;
}
export default function StudentCard({
  student,
  onDeleteStudent,
  onStartEditing,
  editingStudentId,
  onCancelEditing,
  onUpdateStudent,
}: StudentCardProps) {
  const isEditing = editingStudentId === student.id;
  {
    if (isEditing) {
      return (
        <tr>
          <td className="border text-center px-5">
            <input value={student.name} type="text" name="name" id="name" />
          </td>
          <td className="border text-center px-5">
            <input type="date" name="dateOfBirth" id="dateOfBirth" />
          </td>
          <td className="border text-center px-5">
            <input
              value={student.citizenship}
              type="text"
              name="citizenship"
              id="citizenship"
            />
          </td>
          <td className="border text-center px-5">
            {" "}
            <input type="text" value={student.educationForm} />
          </td>
          <td className="border text-center px-5">
            <select
              value={student.dormitoryNumber}
              name="dormitory"
              id="dormitory"
            >
              {Array.from({ length: 11 }, (_, i) => {
                const num = i + 1;
                return (
                  <option className="text-black" key={num} value={num}>
                    {num}
                  </option>
                );
              })}
              <option className="text-black" value="Без общежития">
                Без общежития
              </option>
            </select>
          </td>
          <td className="border text-center px-5">
            <input type="date" name="visaExpiryDate" id="visaExpiryDate" />
          </td>
          <td className="border text-center px-5">{student.passportNumber}</td>
          <td className="border text-center px-5">
            <button onClick={() => onUpdateStudent(student)} type="button">
              Сохранить
            </button>
            <button onClick={() => onCancelEditing(student.id)} type="button">
              Отменить
            </button>
          </td>
        </tr>
      );
    } else {
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
            <button onClick={() => onDeleteStudent(student.id)} type="button">
              Удалить
            </button>
          </td>
          <td className="border text-center px-5">
            <button onClick={() => onStartEditing(student.id)} type="button">
              Редактировать
            </button>
          </td>
          <td className="border text-center px-5">{student.passportNumber}</td>
          <td className="border text-center px-5">{student.courseOfStudies}</td>
          <td className="border text-center px-5">{student.status}</td>
        </tr>
      );
    }
  }
}
