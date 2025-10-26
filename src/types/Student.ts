export default interface Student {
  id: string;
  name: string;
  dateOfBirth: Date;
  educationForm: "full-time" | "part-time";
  dormitoryNumber?: number | "Без общежития";
  status: "studying" | "on an academic leave" | "expelled";
  passportNumber: string;
  citizenship: string;
  courseOfStudies: number;
  visaExpiryDate?: Date;
  migrationCardNumber?: number | false;
  registrationAddress?: string;
}
