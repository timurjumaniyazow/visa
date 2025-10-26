import { useState } from "react";
import type Student from "../../types/Student";
import AddStudents from "./AddStudent";
import StudentList from "../students/StudentList";

export default function StudentManager() {
  const [students, setStudents] = useState<Student[]>([]);
  const handleAddStudent = (data: Student) => {
    const newStudent = {
      ...data,
    };
    setStudents((prev) => [...prev, newStudent]);
  };
  const handleDeleteStudent = (studentId: number | undefined) => {
    {
      setStudents((prev) => prev.filter((student) => student.id !== studentId));
    }
  };
  return (
    <>
      <AddStudents onAddStudent={handleAddStudent} />
      <StudentList students={students} />
    </>
  );
}
