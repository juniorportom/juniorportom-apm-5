var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(nid, name, edge) {
        this.nid = nid;
        this.name = name;
        this.edge = edge;
    }
    Person.prototype.getNid = function () {
        return this.nid;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getEdge = function () {
        return this.edge;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        _super.call(this, 1234, "Estudiante 1", 25);
    }
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.setClasses = function (classes) {
        this.classes = classes;
    };
    Student.prototype.getClasses = function () {
        return this.classes;
    };
    return Student;
}(Person));
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        _super.call(this, 12345, "Profesor 1", 30);
    }
    Teacher.prototype.setId = function (id) {
        this.id = id;
    };
    Teacher.prototype.getId = function () {
        return this.id;
    };
    Teacher.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Teacher.prototype.getGrade = function () {
        return this.grade;
    };
    Teacher.prototype.setClassroom = function (classroom) {
        this.classroom = classroom;
    };
    Teacher.prototype.getClassroom = function () {
        return this.classroom;
    };
    return Teacher;
}(Person));
var classesEstudent = ["Matematicas", "programacion 1"];
var teacherGrades = ["primero", "Segundo"];
var teacherClassroom = [1, 2, 3, 4];
var student = new Student();
student.setId(1);
student.setClasses(classesEstudent);
var teacher = new Teacher();
teacher.setId(1);
teacher.setGrade(teacherGrades);
teacher.setClassroom(teacherClassroom);
console.log("Datos Estudiante \n");
console.log("Nombre Estudiante: " + student.getName);
console.log("Nid Estudiante: " + student.getNid);
console.log("Edad Estudiante: " + student.getEdge);
console.log("Id Estudiante: " + student.getId);
console.log("Clases Estudiante: ");
for (var i = 0; i < student.getClasses.length; i++) {
    console.log(" Clase " + i + 1 + ": " + student.getClasses[i]);
}
console.log("Datos Profesor \n");
console.log("Nombre Profesor: " + teacher.getName);
console.log("Nid Profesor: " + teacher.getNid);
console.log("Edad Profesor: " + teacher.getEdge);
console.log("Id Teacher: " + teacher.getId);
console.log("grados Profesor: ");
for (var i = 0; i < teacher.getGrade.length; i++) {
    console.log(" Grado " + i + 1 + ": " + teacher.getGrade[i]);
}
console.log("clases Profesor: ");
for (var i = 0; i < teacher.getClassroom.length; i++) {
    console.log(" Clase " + i + 1 + ": " + teacher.getClassroom[i]);
}
