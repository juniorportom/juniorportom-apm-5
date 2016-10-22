import { Component } from '@angular/core';
import { Teacher } from '../model/teacher';
import { Student } from '../model/student';

const TEACHER: Teacher [] =[ 
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

const STUDENT: Student [] =[ 
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

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html'
})


export class AppComponent {

	title: string = "Mi Colegio";
	selectedStudent: Student;
	students: Student[] = STUDENT;

    selectedTeacher: Teacher;
    teachers: Teacher[] = TEACHER;

	onSelect(teacher: Teacher) {
		this.selectedTeacher = teacher;
	}


    onSelectStudent(student: Student) {
        this.selectedStudent = student;
    }
}