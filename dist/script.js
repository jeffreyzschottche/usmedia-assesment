"use strict";
// mock students array
var students = [
    { name: 'student1', graduated: true, id: 19 },
    { name: 'student2', graduated: false, id: 2 },
    { name: 'student3', graduated: true, id: 9 },
    { name: 'student4', graduated: false, id: 43 },
    { name: 'student5', graduated: true, id: undefined },
    { name: 'student6', graduated: false, id: 11 },
];
function checkStudents() {
    // empty array to save all students that have graduated and have an id/name
    var studentArray = [];
    studentArray.push(students.filter(function (student) { return student.graduated === true && student.id && student.name; }));
    // empty array to save all names
    var studentNames = [];
    // loop over names to add to name array 
    for (var i = 0; i <= studentArray.length; i++) {
        studentNames.push(studentArray[0][i].name);
    }
    // return/log the students that have graduated with an id/name
    return studentNames.join(',');
}
