// 1. Загрузка всех студентов
function loadStudents() {
  // Твой код здесь
  fetch('api/students').then(response=>response.json).then(students=>setStudents(students))
}

// 2. Добавление студента
function addStudent(studentData) {
  // Твой код здесь  
  fetch('api/students',{
    method: 'POST',
    headers: {'CONTENT-TYPE':'application/json'},
    body:JSON.stringify({
      ...studentData
    })
  })
}

// 3. Обновление гражданства
function updateStudent(studentId, newData) {
  fetch('api/students/:id',{
    method: 'PATCH',
    headers: {'CONTENT-TYPE':'application/json'},
    setStudents(prev=>prev.map(student=>student.id===studentId?newData:student))
  })
  // Твой код здесь
}

// 4. Удаление студента
function deleteStudent(studentId) {
  // Твой код здесь
  fetch('api/students/:id',{
    method: 'DELETE',
    setStudents(prev=>prev.filter(student=>student.id===studentId?newData:student))
  })
}