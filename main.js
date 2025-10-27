// list of students
const students = [
  {
    name: "Ahmed",
    age: 17,
    grade: "A",
    subject: "Math",
    teacher: "Mr. Khaled",
    isPresent: true,
    absences: 1,
    score: 92,
  },
  {
    name: "Mahmoud",
    age: 18,
    grade: "B",
    subject: "Physics",
    teacher: "Ms. Salma",
    isPresent: true,
    absences: 2,
    score: 85,
  },
  {
    name: "Sara",
    age: 17,
    grade: "A+",
    subject: "English",
    teacher: "Mr. Tamer",
    isPresent: false,
    absences: 0,
    score: 98,
  },
  {
    name: "Omar",
    age: 16,
    grade: "C",
    subject: "History",
    teacher: "Mrs. Dina",
    isPresent: false,
    absences: 4,
    score: 67,
  },
  {
    name: "Nour",
    age: 17,
    grade: "B+",
    subject: "Biology",
    teacher: "Mr. Yasser",
    isPresent: true,
    absences: 1,
    score: 89,
  },
  {
    name: "Youssef",
    age: 18,
    grade: "A-",
    subject: "Chemistry",
    teacher: "Ms. Fatma",
    isPresent: true,
    absences: 0,
    score: 91,
  },
  {
    name: "Hala",
    age: 16,
    grade: "C+",
    subject: "Geography",
    teacher: "Mr. Ahmed",
    isPresent: false,
    absences: 3,
    score: 72,
  },
];

// varieble to count the suceeded students
let suceeded = 0;
// varieble to count the upresent students
let unpresent = 0;

let index = 0;
let status = true

//while loop to count number suceeded students and the unpresent students
while (status){
  if (students[index].score >= 90){
    suceeded ++
  }
  if (!students[index].isPresent){
    unpresent ++
  }
  index ++
  if (index == students.length){
    status = false
  }
}

// print the amount of suceeded and unpresent students
document.write(`
  <h1>Students</h1>
  <div class="head-section">
    <h2 class="absences">الغائبين : ${unpresent}</h2>
    <h2 class="successed">المتفوقون : ${suceeded}</h2>
  </div>
  `)

// loop to access each student
for (const student of students){
  document.write(`
    <div class = "student">
      <h1 class = "title">${student.name}</h1>
      <h1 class = "title">Age : ${student.age}</h1>
      <h1 class = "title">Grade : ${student.grade}</h1>
      <h1 class = "title">Subject = ${student.subject}</h1>
      <h1 class = "title">Teacher : ${student.teacher}</h1>
      <h1 class = "title">Atendance : ${student.isPresent}</h1>
      <h1 class = "title">Absences : ${student.absences}</h1>
      <h1 class = "title">Score : ${student.score}</h1>
    
    `)
  // if student ispresent and score mpre than 90 
  if (student.isPresent && student.score >= 90){
    document.write("<h1>Excellent Student 🏅</h1>")
  }
  // else if student absences more than 3 or score less than 50
  else if (student.absences > 3 || student.score < 50 ){
    document.write("<h1>Needs Tracking ⚠️</h1>")
  }
  else{
    document.write("<h1>New Student 🆕</h1>")
  }
  // شروط على حسب الدرجه(grade) 
  switch (student.grade){
    case "A+":
      document.write("<h1>ممتاز جدا جدا 🎉</h1>")
      break;
    case "A":
      document.write("<h1>ممتاز 🥇</h1>")
      break;
    case "A-":
      document.write("<h1>🥈 جيد جدًا</h1>")
      break;
    case "B+":
      document.write("<h1>👍 جيد</h1>")
      break;
    case "B" :
      document.write("<h1>🙂 مقبول</h1>")
      break;
    case "C+":
      document.write("<h1>⚠️ تحت المتوسط</h1>")
      break;
    case "C" :
      document.write("<h1>❌ ضعيف</h1>")
      break;
    default:
      document.write("<h1>📚 غير مصنف</h1>")
  }
  document.write("</div>")
}