import { useState } from "react";
import type Student from "../../types/Student";
import { countryList } from "../../data/countries";
interface StudentCardProps {
  student: Student;
  onDeleteStudent: (student: string) => void;
  onStartEditing: (studentId: string) => void;
  editingStudentId: string | null;
  onCancelEditing: () => void;
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
  const [editData, setEditData] = useState<Student>(student);
  const isEditing = editingStudentId === student.id;
  const handleSave = () => {
    onUpdateStudent(editData);
  };
  {
    if (isEditing) {
      return (
        <tr>
          <td className="border text-center px-5">
            <input
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              value={editData.name}
              type="text"
              name="name"
              id="name"
            />
          </td>
          <td className="border text-center px-5">
            <input
              onChange={(e) =>
                setEditData({
                  ...editData,
                  dateOfBirth: new Date(e.target.value),
                })
              }
              value={editData.dateOfBirth.toLocaleDateString("RU-ru")}
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
            />
          </td>
          <td className="border text-center px-5">
            <select
              value={editData.citizenship}
              onChange={(e) =>
                setEditData({ ...editData, citizenship: e.target.value })
              }
              name="citizenship"
              id="citizenship"
            >
              {countryList.map((country) => (
                <option>{country}</option>
              ))}
            </select>
          </td>
          <td className="border text-center px-5">
            <select
              value={editData.educationForm}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  educationForm: e.target.value as "part-time" | "full-time",
                })
              }
              name="educationForm"
              id="educationForm"
            >
              <option className="text-black" value="full-time">
                full-time
              </option>
              <option className="text-black" value="part-time">
                part-time
              </option>
            </select>
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
            <input
              onChange={(e) =>
                setEditData({
                  ...editData,
                  visaExpiryDate: new Date(e.target.value),
                })
              }
              type="date"
              name="visaExpiryDate"
              id="visaExpiryDate"
            />
          </td>
          <td className="border text-center px-5">
            <button disabled={true}>Удалить</button>
          </td>
          <td className="border text-center px-5">
            <button onClick={() => handleSave()} type="button">
              Сохранить
            </button>
            <button onClick={() => onCancelEditing()} type="button">
              Отменить
            </button>
          </td>
          <td className="border text-center px-5">
            <input
              type="text"
              value={editData.passportNumber}
              onChange={(e) =>
                setEditData({ ...editData, passportNumber: e.target.value })
              }
            />
          </td>
          <td className="border text-center px-5">
            <input
              type="text"
              value={editData.courseOfStudies}
              onChange={(e) =>
                setEditData({ ...editData, courseOfStudies: +e.target.value })
              }
            />
          </td>
          <td className="border text-center px-5">
            <select
              onChange={(e) =>
                setEditData({
                  ...editData,
                  status: e.target.value as
                    | "studying"
                    | "expelled"
                    | "on an academic leave",
                })
              }
              value={editData.status}
              name="status"
              id="status"
            >
              <option value="studying">Студент</option>
              <option value="expelled">Отчислен</option>
              <option value="on an academic leave">
                Находится в академическом отпуске
              </option>
            </select>
          </td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td className="border text-center px-5">{student.name}</td>
          <td className="border text-center px-5">
            {typeof student.dateOfBirth === "string"
              ? student.dateOfBirth
              : student.dateOfBirth.toLocaleDateString("ru-RU")}
          </td>
          <td className="border text-center px-5">{student.citizenship}</td>
          <td className="border text-center px-5">{student.educationForm}</td>
          <td className="border text-center px-5">
            {student.dormitoryNumber === undefined
              ? "Без общежития"
              : student.dormitoryNumber}
          </td>
          <td className="border text-center px-5">
            {student.visaExpiryDate === undefined ||
            typeof student.visaExpiryDate === "string"
              ? student.visaExpiryDate
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
