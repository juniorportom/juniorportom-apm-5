interface Person2 {
	nid: number;
	name: string;
	age: number;

	getNid(): number;
	getName(): string;
	getAge(): number;

	setNid(nid:number): void;
	setName(name:string): void;
	setAge(age:number): void;
}

class Student2 implements Person2{
	nid: number;
	name: string;
	age: number;

	constructor(){}

	getNid(): number{
		return this.nid;
	}
	getName(): string{
		return this.name;
	};
	getAge(): number{
		return this.age;
	};

	setNid(nid: number): void{
		this.nid = nid;
	}
	setName(name: string): void{
		this.name = name;
	}
	setAge(age:number): void{
		this.age = age;
	}
}


class Teacher2 implements Person2{
	nid: number;
	name: string;
	age: number;

	constructor(){}

	getNid(): number{
		return this.nid;
	}
	getName(): string{
		return this.name;
	};
	getAge(): number{
		return this.age;
	};

	setNid(nid: number): void{
		this.nid = nid;
	}
	setName(name: string): void{
		this.name = name;
	}
	setAge(age:number): void{
		this.age = age;
	}
}


var student2  = new Student2();

var teacher2 = new Teacher2();

student2.setAge(55);
console.log(student2.getAge());

teacher2.setName("Profesor 2");
console.log(teacher2.getName);