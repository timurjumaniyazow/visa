import { useEffect, useState } from "react";
import type Student from "../../types/Student";
interface StudentLoaderProps {
  onStudentLoaded: (students: Student[]) => void;
}
export default function StudentLoader({ onStudentLoaded }: StudentLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/timurjumaniyazow/visa/dev/src/data/students.json"
        );
        if (!response.ok) {
          throw new Error(
            `Error ${response.status} means ${response.statusText}`
          );
        }
        const studentData: Student[] = await response.json();
        onStudentLoaded(studentData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [onStudentLoaded]);
  return (
    <>
      {loading && <div>Загрузка...</div>}
      {error && <div>Ошибка: {error}</div>}
    </>
  );
}
