import { useState } from "react";
interface SearchStudentsProps {
  onSearchStudents: (searchTerm: string) => void;
}
export default function SearchStudents({
  onSearchStudents,
}: SearchStudentsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearchStudents(e.target.value);
        }}
      />
    </>
  );
}
