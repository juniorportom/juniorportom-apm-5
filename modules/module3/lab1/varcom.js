var finalResult = 20; /*variable global*/

function test()
{
	var x = 5;  /*variable local*/
	var y = 10; /* variable local*/
	var sum = x + y;
	alert("contenido de la suma: " + sum);
}

finalResult = finalResult + test();
 var isSum = false;  //Variable  booleana
 var result = "no se sumo";
if(finalResult > 20)
{
	isSum = true;
	result = "El resultado si se sumo"
}


if(isSum)
{
alert(result + ": " + finalResult + " !!!!!");
}

else
{
	alert(result + ": " + finalResult + " ----");
}

