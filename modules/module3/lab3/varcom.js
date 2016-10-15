(function () {
  console.log('Esta función no tiene nombre y\
    se ejecutara inmediatamente');
  //alert("Se ejecuto esto");
  console.log("Se ejecuto esto");
}());

function palindromo( text1,  text2)
{
	var temp = text2.split("");
	var tempReverse = temp.reverse();
	var result = tempReverse.join("");
	var isPalindromo = false;
	if(text1 == result)
		isPalindromo = true;

	return isPalindromo;
}

//var test = palindromo("roma", "amor");

function isPalindromo(text1,  text2)
{
	var test = palindromo(text1, text2);

	if(test)
	{
		//alert("Es palindromo");
		 console.log("Es palindromo");
	}
	else
	{
		//alert("No es palindromo");
		 console.log("No es palindromo");
	}
}

isPalindromo("amor", "roma");