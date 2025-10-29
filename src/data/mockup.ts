// import type Student from "../types/Student";

import type Student from "../types/Student";

const mockup: Student[] = [
  {
    id: "0",
    name: "Алексей Петров",
    dateOfBirth: new Date("2001-03-15"),
    educationForm: "full-time",
    dormitoryNumber: 5,
    status: "studying",
    passportNumber: "4508 123456",
    citizenship: "Россия",
    courseOfStudies: 3,
    // У российских студентов нет визовых данных
  },
  {
    id: "3",
    name: "Чжан Вэй",
    dateOfBirth: new Date("2002-07-22"),
    educationForm: "full-time",
    dormitoryNumber: 2,
    status: "studying",
    passportNumber: "G12345678",
    citizenship: "Китай",
    courseOfStudies: 2,
    visaExpiryDate: new Date("2024-12-31"),
    migrationCardNumber: 784512,
    registrationAddress: "Общежитие №2, комната 415",
  },
  {
    id: "4",
    name: "Мария Сидорова",
    dateOfBirth: new Date("2000-11-08"),
    educationForm: "part-time",
    status: "on an academic leave",
    passportNumber: "4510 987654",
    citizenship: "Россия",
    courseOfStudies: 4,
    // Нет общежития и визовых данных
  },
  {
    id: "5",
    name: "Ахмед Аль-Рашид",
    dateOfBirth: new Date("1999-12-30"),
    educationForm: "full-time",
    dormitoryNumber: 7,
    status: "studying",
    passportNumber: "A78901234",
    citizenship: "Саудовская Аравия",
    courseOfStudies: 1,
    visaExpiryDate: new Date("2024-06-15"), // Скоро истекает!
    migrationCardNumber: 963258,
    registrationAddress: "Общежитие №7, комната 212",
  },
  {
    id: "6",
    name: "Екатерина Козлова",
    dateOfBirth: new Date("2001-05-18"),
    educationForm: "full-time",
    dormitoryNumber: 3,
    status: "expelled",
    passportNumber: "4511 555555",
    citizenship: "Россия",
    courseOfStudies: 2,
    // Отчисленная студентка - визовых данных нет
  },
  {
    id: "7",
    name: "София Мюллер",
    dateOfBirth: new Date("2001-09-10"),
    educationForm: "full-time",
    dormitoryNumber: 4,
    status: "studying",
    passportNumber: "C44556677",
    citizenship: "Германия",
    courseOfStudies: 2,
    migrationCardNumber: 112233,
    registrationAddress: "ул. Ленина, д. 25, кв. 14",
  },
];
export { mockup };
