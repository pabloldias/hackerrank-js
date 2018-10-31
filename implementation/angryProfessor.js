function angryProfessor(threshold, arrivals) {
    const studentsOnTime = arrivals.filter(val => val <= 0).length;
    return studentsOnTime < threshold ? 'YES' : 'NO';
}
module.exports = angryProfessor;