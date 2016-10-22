import { Component, OnInit } from '@angular/core';
import {Teacher} from '../model/teacher';
import {TeacherService} from '../service/teacher.service';
import {Student} from '../model/student';
import {StudentService} from '../service/student.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/school.html',
  providers: [
      TeacherService,
      StudentService]
})
export class AppComponent implements OnInit {

    title: string = "Mis productos";
    selectedStudent: Student;
    students: Student[];

    selectedTeacher: Teacher;
    teachers: Teacher[];

    constructor(private teacherService: TeacherService, private studentService: StudentService){}
    
    ngOnInit(){
        this.teacherService.getTeachers()
        .then(teachers => this.teachers = teachers)
        .catch(error => console.log(error));

        this.studentService.getStudents()
        .then(students => this.students = students)
        .catch(error => console.log(error));
    }

    onSelect(teacher: Teacher) {
        this.selectedTeacher = teacher;
    }


    onSelectStudent(student: Student) {
        this.selectedStudent = student;
    }
}


