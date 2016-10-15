var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var allMonths = "";

for(var i in months)
{
	allMonths = allMonths +  months[i] +"\n";
}


alert("Meses: " + allMonths);

var monthsReverse = months.reverse();

var allMonths2 = "";
for(var i = 0; i <  monthsReverse.length; i++)
{
	allMonths2 = allMonths2 + monthsReverse[i] +"\n";
}

alert("Meses al reves: \n"+ allMonths2 );

var lastMonth = months.pop();

alert("Ultimo mes: \n" + lastMonth);

var firstMonth = months.shift();

alert("Primer mes: " + firstMonth);

var pares = [2,4,6,8,10];
var impares = [1,3,5,7];

var allNumber = pares.concat(impares);

alert("Numeros: " + allNumber);