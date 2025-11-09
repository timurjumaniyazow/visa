import type Student from "../../types/Student";

interface CountStudentsProps {
  students: Student[];
}
export default function CountStudents({ students }: CountStudentsProps) {
  return (
    <>
      <h2>{students.length}</h2>
    </>
  );
}
