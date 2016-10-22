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
var TEACHER = [
    {
        id: 102030,
        name: "Pedro Diaz",
        rooms: ["201a", "201b", "203b"],
        studies: ["Matematicas", "Ingnieria"]
    },
    {
        id: 102040,
        name: "Olga Diaz",
        rooms: ["301a", "301b", "303b"],
        studies: ["Quimica", "Ingles"]
    },
    {
        id: 102050,
        name: "Ismael Castañeda",
        rooms: ["501a", "501b", "503b"],
        studies: ["Sistemas Operativos", "Programación"]
    },];
var STUDENT = [
    {
        id: 252525,
        name: "Jhon Portocarrero",
        grade: "Octavo",
        classes: ["Matematicas", "Ingnieria", "Ingles"]
    },
    {
        id: 252530,
        name: "Jhon Portocarrero",
        grade: "Octavo",
        classes: ["Matematicas", "Ingnieria", "Ingles"]
    },
    {
        id: 252550,
        name: "Lady Rodriguez",
        grade: "Octavo",
        classes: ["Matematicas", "Ingnieria", "Ingles"]
    },];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Mi Colegio";
        this.students = STUDENT;
        this.teachers = TEACHER;
    }
    AppComponent.prototype.onSelect = function (teacher) {
        this.selectedTeacher = teacher;
    };
    AppComponent.prototype.onSelectStudent = function (student) {
        this.selectedStudent = student;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/school.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map