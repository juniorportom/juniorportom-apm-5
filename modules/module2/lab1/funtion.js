function datosJson(){
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);
var valores = "Nombre    Apellido\n";

for (var i = 0; i < obj.length; i++) {
	valores = valores + obj.employees[i].firstName + " " + obj.employees[i].lastName + "\n";
}

document.getElementById("demo").innerHTML =valores;
}