import { useState } from "react";
import type Student from "../../types/Student";
import AddStudents from "./AddStudent";
import StudentList from "../students/StudentList";
import FilterStudents from "../students/FilterStudents";
import CountStudents from "../common/CountStudents";
import StudentLoader from "../api/StudentLoader";
export default function StudentManager() {
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  // const [filteredTemp, setFilteredTemp] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [dormFilter, setDormFilter] = useState<
    number | "Без общежития" | undefined
  >();
  const handleFilterDorm = (dormString: string) => {
    if (dormString === "Без общежития") {
      setDormFilter("Без общежития");
    } else if (dormString === "") {
      setDormFilter(undefined);
    } else setDormFilter(Number(dormString));
  };
  const filteredStudents = students.filter((student) => {
    const matchesNames = student.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase().trim());
    const matchesDorm =
      !dormFilter ||
      student.dormitoryNumber?.toString() === dormFilter.toString();
    const matchesCountry =
      !countryFilter || student.citizenship === countryFilter;
    return matchesCountry && matchesNames && matchesDorm;
  });

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
  const handleLoadStudents = (loadedStudents: Student[]) => {
    setStudents(loadedStudents);
  };

  return (
    <>
      <AddStudents onAddStudent={handleAddStudent} />
      <FilterStudents
        onFilterDorm={handleFilterDorm}
        onFilterCountry={setCountryFilter}
        onFilterName={setNameFilter}
      />
      <CountStudents students={filteredStudents} />
      <StudentLoader onStudentLoaded={handleLoadStudents} />
      <StudentList
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
