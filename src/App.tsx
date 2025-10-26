import "./App.css";
import { students } from "./data/mockup";
import StudentList from "./components/students/StudentList";
import StudentManager from "./components/forms/StudentManager";
function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="container mx-auto px-4 bg-black ">
        <StudentList students={students} />
        <StudentManager />
      </div>
    </>
  );
}

export default App;
