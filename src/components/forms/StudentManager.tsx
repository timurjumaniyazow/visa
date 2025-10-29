import { useState } from "react";
import type Student from "../../types/Student";
import AddStudents from "./AddStudent";
import StudentList from "../students/StudentList";
// import { mockup } from "../../data/mockup";
export default function StudentManager() {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [filteredTemp, setFilteredTemp] = useState("");
  const filteredStudents: Student[] = students.filter((student) =>
    student.name.toLowerCase().includes(filteredTemp.toLowerCase())
  );
  const handleSearchStudents = (text: string) => {
    setFilteredTemp(text);
  };

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
    console.log(updatedStudent.id);
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === updatedStudent.id) {
          console.log(student.id, updatedStudent.id);
          return updatedStudent;
        } else {
          console.log(student.id, updatedStudent.id);
          return student;
        }
      })
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
        onFilterStudents={handleSearchStudents}
        students={filteredStudents}
        editingStudentId={editingStudentId}
        onStartEditing={startEditing}
        onCancelEditing={cancelEditing}
        onUpdateStudent={handleUpdateStudent}
        onDeleteStudent={handleDeleteStudent}
      />
    </>
  );
}
