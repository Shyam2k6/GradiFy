let students = []; // Array to hold student records

// Function to display all students
function displayStudents(data) {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = ""; // Clear the table

  data.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${student.name}</td>
          <td>${student.grade}</td>
          <td>
            <button style="background-color:#f03e3e;color:#fff;padding:2px 5px;" onclick="deleteStudent(${index})">Delete</button>
          </td>
        `;
    tbody.appendChild(row);
  });
  updateAverage(); // Update the class average
}

// Function to add a student
function addStudent() {
  const nameInput = document.getElementById("nameInput").value.trim();
  const gradeInput = Number(document.getElementById("gradeInput").value);

  if (nameInput && gradeInput >= 0) {
    students.push({ name: nameInput, grade: gradeInput });
    displayStudents(students);
  }

  // Clear inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("gradeInput").value = "";
}

// Function to delete a student
function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents(students);
}

// Function to filter top performers (grade >= 85)
function filterTopStudents() {
  const topStudents = students.filter((student) => student.grade >= 85);
  displayStudents(topStudents);
}

// Function to reset and show all students
function resetList() {
  displayStudents(students);
}

// Function to calculate and update the class average
function updateAverage() {
  const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
  const average = students.length
    ? (totalGrades / students.length).toFixed(2)
    : 0;
  document.getElementById("averageGrade").textContent = average;
}

// Keyboard Event
document.getElementById("nameInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.getElementById("gradeInput").focus();
  }
});

document.getElementById("gradeInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addStudent();
  }
});
