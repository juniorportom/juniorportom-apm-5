"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var teacher_service_1 = require('../service/teacher.service');
var student_service_1 = require('../service/student.service');
var AppComponent = (function () {
    function AppComponent(teacherService, studentService) {
        this.teacherService = teacherService;
        this.studentService = studentService;
        this.title = "Mis productos";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teacherService.getTeachers()
            .then(function (teachers) { return _this.teachers = teachers; })
            .catch(function (error) { return console.log(error); });
        this.studentService.getStudents()
            .then(function (students) { return _this.students = students; })
            .catch(function (error) { return console.log(error); });
    };
    AppComponent.prototype.onSelect = function (teacher) {
        this.selectedTeacher = teacher;
    };
    AppComponent.prototype.onSelectStudent = function (student) {
        this.selectedStudent = student;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html',
            providers: [
                teacher_service_1.TeacherService,
                student_service_1.StudentService]
        }), 
        __metadata('design:paramtypes', [teacher_service_1.TeacherService, student_service_1.StudentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map