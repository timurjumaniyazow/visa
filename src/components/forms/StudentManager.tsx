import { useState } from "react";
import type Student from "../../types/Student";
import AddStudents from "./AddStudent";
import StudentList from "../students/StudentList";
export default function StudentManager() {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);

  const handleAddStudent = (data: Student) => {
    const newStudent = {
      ...data,
    };
    setStudents((prev) => [...prev, newStudent]);
  };

  const handleDeleteStudent = (studentId: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
  };

  const handleUpdateStudent = (updatedStudent: Student) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setEditingStudentId(null);
  };

  const startEditing = (studentId: string) => {
    setEditingStudentId(studentId);
  };

  const cancelEditing = () => {
    setEditingStudentId(null);
  };

  return (
    <>
      <AddStudents onAddStudent={handleAddStudent} />
      <StudentList
        students={students}
        editingStudentId={editingStudentId}
        onStartEditing={startEditing}
        onCancelEditing={cancelEditing}
        onUpdateStudent={handleUpdateStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    </>
  );
}
