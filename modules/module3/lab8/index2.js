var Student2 = (function () {
    function Student2() {
    }
    Student2.prototype.getNid = function () {
        return this.nid;
    };
    Student2.prototype.getName = function () {
        return this.name;
    };
    ;
    Student2.prototype.getAge = function () {
        return this.age;
    };
    ;
    Student2.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Student2.prototype.setName = function (name) {
        this.name = name;
    };
    Student2.prototype.setAge = function (age) {
        this.age = age;
    };
    return Student2;
}());
var Teacher2 = (function () {
    function Teacher2() {
    }
    Teacher2.prototype.getNid = function () {
        return this.nid;
    };
    Teacher2.prototype.getName = function () {
        return this.name;
    };
    ;
    Teacher2.prototype.getAge = function () {
        return this.age;
    };
    ;
    Teacher2.prototype.setNid = function (nid) {
        this.nid = nid;
    };
    Teacher2.prototype.setName = function (name) {
        this.name = name;
    };
    Teacher2.prototype.setAge = function (age) {
        this.age = age;
    };
    return Teacher2;
}());
var student2 = new Student2();
var teacher2 = new Teacher2();
student2.setAge(55);
console.log(student2.getAge());
teacher2.setName("Profesor 2");
console.log(teacher2.getName);
