function gradingStudents(grades) {
    return grades.map(grade => {
        let rest = 5 - (grade % 5);
        if (grade >= 38 && rest < 3) {
            return grade + rest;
        } else {
            return grade;
        }
    });
}
module.exports = gradingStudents;