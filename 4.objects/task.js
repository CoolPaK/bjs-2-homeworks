function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;

  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks) (
    this.marks.push(...marksToAdd)
  )
}

Student.prototype.getAverage = function () {
  if (this.marks && this.marks.length > 0) {
    let sum = this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
