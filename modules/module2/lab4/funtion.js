function datosJson(){
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);
var valores = "Nombre    Apellido" + "<br/>";

for (var i = 0; i< 3; i++) {
	valores = valores + obj.employees[i].firstName + " " + obj.employees[i].lastName + "<br/>";
}

document.getElementById("demo").innerHTML =valores;
}