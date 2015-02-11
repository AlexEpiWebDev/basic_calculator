$(document).ready(function() {

		firstArray = [];
		secondArray = [];
		var operator;

		var concatenateArray = function(arrayForConcat) {
		console.log(arrayForConcat);
			var total = 0;
			if(arrayForConcat.length > 1) {
				for(var i = 0; i < arrayForConcat.length; i++) {
					total += arrayForConcat[i];
				}
				return total;
			}
			else{
				return arrayForConcat;
			}
			console.log(total);
		};
		function add(a, b) {
			return a + b;
		};
		function subtract(a, b) {
			return a - b;
		}
		function multiply(a, b) {
			return a * b;
		};
		function divide(a, b) {
			return a / b;
		};
		
		$("#one").on("click", function() {
			if(operator === undefined) {
				firstArray.push("1");
			}
			else {
				secondArray.push("1");
			}
		});
		$("#two").on("click", function() {
			if(operator === undefined) {
				firstArray.push("2");
			}
			else {
				secondArray.push("2");
			}
		});
		$("#three").on("click", function() {
			if(operator === undefined) {
				firstArray.push("3");
			}
			else {
				secondArray.push("3");
			}
		});
		$("#four").on("click", function() {
			console.log("4");
			if(operator === undefined) {
				firstArray.push("4");
			}
			else {
				secondArray.push("4");
			}
		});
		$("#five").on("click", function() {
			console.log("5");
			if(operator === undefined) {
				firstArray.push("5");
			}
			else {
				secondArray.push("5");
			}
		});
		$("#six").on("click", function() {
			console.log("6");
			if(operator === undefined) {
				firstArray.push("6");
			}
			else {
				secondArray.push("6");
			}
		});
		$("#seven").on("click", function() {
			console.log("7");
			if(operator === undefined) {
				firstArray.push("7");
			}
			else {
				secondArray.push("7");
			}
		});
		$("#eight").on("click", function() {
			console.log("8");
			if(operator === undefined) {
				firstArray.push("8");
			}
			else {
				secondArray.push("8");
			}
		});
		$("#nine").on("click", function() {
			console.log("9");
			if(operator === undefined) {
				firstArray.push("9");
			}
			else {
				secondArray.push("9");
			}
		});
		$("#zero").on("click", function() {
			console.log("0");
			if(operator === undefined) {
				firstArray.push("0");
			}
			else {
				secondArray.push("0");
			}
		});
		$("#clear").on("click", function() {
			$("#output").text("0");
		});
		$("#add").on("click", function() {
			operator = "addition";
		});
		$("#subtract").on("click", function() {
			operator = "subtraction";
		});
		$("#multiply").on("click", function() {
			operator = "multiplication";
		});
		$("#divide").on("click", function() {
			operator = "division";
		});
		$("#equals").on("click", function() {
			var firstNum = concatenateArray(firstArray);
			var secondNum = concatenateArray(secondArray);
				switch(operator) {
					case "addition":
						var answer = add(Number(firstNum), Number(secondNum));
						$("#output").text(answer);
						break;
					case "subtraction":
						var answer = subtract(firstNum, secondNum);
						$("#output").text(answer);
						break;
					case "multiplication":
						var answer = multiply(firstNum, secondNum);
						$("#output").text(answer);
						break;
					case "division":
						var answer = divide(firstNum, secondNum);
						$("#output").text(answer);
						break;
					default:
						operator = undefined;
				}
			operator = undefined;
			firstArray = [];
			secondArray = [];
		});
	});
