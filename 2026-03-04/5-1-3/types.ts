// 1. 기본 원시 타입과 배열
const studentName: string = "김도하";
const studentAge: number = 26;
const isGraduated: Boolean = true;
const subjects: string[] = ["Html", "CSS", "javaScript"];

// 2. 튜플
type Point3D = [number, number, number];
const print3D: Point3D = [3, 3, 3];

// 3. 리터럴과 유니온
type Role = "admin" | "manager" | "user";
const userRole: Role = "admin";

// 4. 객체와 Record
type SubjectScores = Record<string, number>;
const Subject: SubjectScores = { Html: 88 };

// 5. 교차 타입 (Intersection)
type BasicUser = { name: string; age: number };
type Contact = { email: string; tell: string };
type EmployeeProfile = BasicUser & Contact;

// 6. 함수 시그니처와 매개변수 타입
const evaluateEmployee = (user: EmployeeProfile): "해고됨" | "승진함" => {
  if (user.age > 60) {
    return "해고됨";
  }
  return "승진함";
};
