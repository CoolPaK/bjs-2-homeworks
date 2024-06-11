function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

    this.marks = []; // Свойство marks с пустым массивом для хранения оценок
}

// Добавляем метод setSubject в прототип Student
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
};

// Добавляем метод addMarks для добавления оценок
Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks) {
        this.marks.push(...marksToAdd);
    }
};

// Добавляем метод getAverage для вычисления среднего арифметического оценок
Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length > 0) {
        let sum = this.marks.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );
        return sum / this.marks.length;
    } else {
        return 0;
    }
};

// Добавляем метод exclude для исключения студента из учебного процесса
Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};