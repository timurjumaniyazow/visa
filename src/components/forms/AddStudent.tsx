import type Student from "../../types/Student";
import { useState, type FormEvent } from "react";
import { countryList } from "../../data/countries";
interface AddStudentsProps {
  onAddStudent: (student: Student) => void;
}
export default function AddStudents({ onAddStudent }: AddStudentsProps) {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [citizenship, setCitizenship] = useState("");
  const [educationForm, setEducationForm] = useState<"part-time" | "full-time">(
    "full-time"
  );
  const [status, setStatus] = useState<
    "studying" | "on an academic leave" | "expelled"
  >("studying");
  const [passportNumber, setPassportNumber] = useState("");
  const [courseOfStudies, setCourseOfStudies] = useState<number>(Number(""));
  const [dormitoryNumber, setDormitoryNumber] = useState<
    number | "Без общежития"
  >("Без общежития");
  const [visaExpiryDate, setVisaExpiryDate] = useState(new Date());
  const generateId = (date: Date, passportNumber: string): string => {
    return (
      date.getTime() +
      passportNumber +
      Math.random()
        .toString(36)
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")
        .replace(/[^a-zA-Z0-9]/g, "")
        .substring(0, 16)
    );
  };
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const newStudent = {
      name: name,
      dateOfBirth: dateOfBirth,
      citizenship: citizenship,
      educationForm: educationForm,
      status: status,
      passportNumber: passportNumber,
      courseOfStudies: courseOfStudies,
      dormitoryNumber: dormitoryNumber,
      visaExpiryDate: visaExpiryDate,
      id: generateId(new Date(), passportNumber),
    };
    onAddStudent(newStudent);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor="name">ФИО</label>
        <input
          placeholder="Введите имя"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="dateOfBirth">Дата рождения</label>
        <input
          onChange={(e) => setDateOfBirth(new Date(e.target.value))}
          type="date"
          name="dateOfBirth"
          id="dateOfBirth"
        />
        <label htmlFor="citizenship">Гражданство</label>

        <select
          value={citizenship}
          onChange={(e) => setCitizenship(e.target.value)}
          name="citizenship"
          id="citizenship"
        >
          {countryList.map((country) => (
            <option className="text-black" key={country}>
              {country}
            </option>
          ))}
        </select>
        <label htmlFor="dormitory">Номер общежития</label>
        <select
          value={dormitoryNumber}
          onChange={(e) =>
            setDormitoryNumber(e.target.value as number | "Без общежития")
          }
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
        <label htmlFor="educationForm">Форма обучения</label>
        <select
          value={educationForm}
          onChange={(e) =>
            setEducationForm(e.target.value as "part-time" | "full-time")
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
        <label htmlFor="passportNumber">Номер паспорта</label>
        <input
          value={passportNumber}
          onChange={(e) => setPassportNumber(e.target.value)}
          type="text"
          name="passportNumber"
          id="passportNumber"
        />
        <label htmlFor="courseOfStudies">Курс обучения</label>
        <input
          type="number"
          name="courseOfStudies"
          id="courseOfStudies"
          value={courseOfStudies}
          onChange={(e) => setCourseOfStudies(+e.target.value)}
        />
        <label htmlFor="status">Статус</label>
        <select
          onChange={(e) =>
            setStatus(
              e.target.value as "studying" | "expelled" | "on an academic leave"
            )
          }
          value={status}
          name="status"
          id="status"
        >
          <option value="studying">Студент</option>
          <option value="expelled">Отчислен</option>
          <option value="on an academic leave">
            Находится в академическом отпуске
          </option>
        </select>
        <label htmlFor="visaExpiryDate">Дата окончания визы</label>
        <input
          onChange={(e) => setVisaExpiryDate(new Date(e.target.value))}
          type="date"
          name="visaExpiryDate"
          id="visaExpiryDate"
        />
        <input type="hidden" id="id" />
        <button type="submit" className="mx-auto block">
          Добавить студента
        </button>
      </form>
    </>
  );
}
