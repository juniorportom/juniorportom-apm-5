class Person {
	private nid: number;
	private name: string;
	private edge: number;
	
	constructor(nid: number, name: string, edge: number)
	{
		this.nid = nid;
		this.name = name;
		this.edge = edge;
	}

	public getNid() : number {
		return this.nid;
	}

	public getName() : string {
		return this.name;
	}

	public getEdge() : number {
		return this.edge;
	}



}

class Student extends Person{
	private id: number;
	private classes: Array<string>
	constructor()
	{
		
		super(1234, "Estudiante 1", 25);
	}  

	public setId(id : number) :void {
		this.id = id;
	}
	public getId() : number {
		return this.id;
	}

	public setClasses(classes : Array<string>): void {
		this.classes = classes;
	}

	public getClasses() : Array<string> {
		return this.classes;
	}
}

class Teacher extends Person{
	private id: number;
	private grade: Array<string>;
	private classroom: Array<number>;
	constructor(){
		super(12345, "Profesor 1", 30);
	}

	public setId(id : number): void {
		this.id = id;
	}
	public  getId() : number {
		return this.id;
	}

	public setGrade(grade: Array<string>): void {
		this.grade = grade;
	}
	public  getGrade() : Array<string> {
		return this.grade;
	}

	public  setClassroom(classroom: Array<number>): void {
		this.classroom = classroom;
	}
	public   getClassroom() : Array<number> {
		return this.classroom;
	}
}

var classesEstudent: Array<string> = ["Matematicas", "programacion 1"];
var teacherGrades: Array<string>= ["primero", "Segundo"];
var teacherClassroom: Array<number> = [1,2,3,4];

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
console.log("Id Estudiante: " + student.getId)
console.log("Clases Estudiante: ");
for(var i: number = 0; i< student.getClasses.length; i++)
{
	console.log(" Clase " +  i+1 + ": " +  student.getClasses[i]);
}

console.log("Datos Profesor \n");

console.log("Nombre Profesor: " + teacher.getName);
console.log("Nid Profesor: " + teacher.getNid);
console.log("Edad Profesor: " + teacher.getEdge);
console.log("Id Teacher: " + teacher.getId)
console.log("grados Profesor: ");
for(var i: number = 0; i< teacher.getGrade.length; i++)
{
	console.log(" Grado " +  i+1 + ": " +  teacher.getGrade[i]);
}

console.log("clases Profesor: ");
for(var i: number = 0; i< teacher.getClassroom.length; i++)
{
	console.log(" Clase " +  i+1 + ": " +  teacher.getClassroom[i]);
}