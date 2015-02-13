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
		function generateHandler(passNumberToPush) {
			return function() {
				pushNumber(passNumberToPush);
			};
		};
		function pushNumber(numberToPush) {
			if(operator === undefined) {
				firstArray.push(numberToPush);
			}
			else {
				secondArray.push(numberToPush);
			}
		};
		
		$("#one").on("click", generateHandler("1"));
		$("#two").on("click", generateHandler("2"));
		$("#three").on("click", generateHandler("3"));
		$("#four").on("click", generateHandler("4"));
		$("#five").on("click", generateHandler("5"));
		$("#six").on("click", generateHandler("6"));
		$("#seven").on("click", generateHandler("7"));
		$("#eight").on("click", generateHandler("8"));
		$("#nine").on("click", generateHandler("9"));
		$("#zero").on("click", generateHandler("0"));
		$("#clear").on("click", function() {
			$("#output").text("0");
			operator = undefined;
			firstArray = [];
			secondArray = [];
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
