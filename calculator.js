// *{
// 	box-sizing: border-box;
// 	margin: 0%;
// }

// #calculator{
// 	font-family: 'Courier New', Courier, monospace;
// width: 45vw;
// 	height: 80vh;
// 	background-color:#e2e0e0;
// 	margin: auto;
// 	/* text-align: center; */
// 	margin-top: 5%;
// 	padding: 2%;
// 	border: 2px solid black;
// 	border-radius: 10px;
// }


// #display-container{
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: flex-end;
// 	background-color: whitesmoke;
// 	border: 2px solid black;
// 	border-radius: 10px;
// 	width: 100%;
// 	height: 20%;
// 	margin-bottom: 10px;
// 	min-height: 100px;
// }

// #display-container p{
// 	margin: 0.5rem;
// }

// #buttons-container{
// 	width: 100%;
// 	height: 70%;
// 	min-height: 300px;
// 	border: 2px solid black;
// 	border-radius: 10px;
// 	display: flex;
// 	flex-direction: row;
// 	flex-wrap: wrap;
// 	justify-content: space-around;
// }

// .button{
// 	width: 25%;
// 	height: 20%;
// 	min-height: 60px;
// 	background-color: antiquewhite;
// 	border: 2px solid black;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	font-size: 1.8rem;
// 	cursor: pointer;
// }

// .button:hover{
// 	background-color: orange;
// }

// .selected{
// 	background-color: orange;
// }

// .btn-zero{
// 	width: 50%;
// }

// .btn-red{
// 	background-color: rebeccapurple;
// 	color: white;
// }




// <html>
// 	<head>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// 		<link rel="stylesheet" type="text/css" href="style.css">
// 		<title>A simple calculator</title>
// 	</head>
// 	<body>
// 		<div id="calculator">
// 			<!-- display area -->
// 			<div id="display-container">
// 				<p id="display"></p>
// 			</div>

// 			<!-- buttons area -->
// 			<div id="buttons-container">
// 				<div class="button" id="btn-clear" data-value="ac">
// 					<span>AC</span>
// 				</div>
// 				<div class="button" id="btn-sign" data-value="sign">
// 					<span>+/-</span>
// 				</div>
// 				<div class="button" id="btn-percent" data-value="%">
// 					<span>%</span>
// 				</div>
// 				<div class="button" id="btn-divide" data-value="/">
// 					<span>/</span>
// 				</div>
// 				<div class="button" id="btn-7" data-value="7">
// 					<span>7</span>
// 				</div>
// 				<div class="button" id="btn-8" data-value="8">
// 					<span>8</span>
// 				</div>
// 				<div class="button" id="btn-9" data-value="9">
// 					<span>9</span>
// 				</div>
// 				<div class="button" id="btn-multiplty" data-value="*">
// 					<span>*</span>
// 				</div>
// 				<div class="button" id="btn-4" data-value="4">
// 					<span>4</span>
// 				</div>
// 				<div class="button" id="btn-5" data-value="5">
// 					<span>5</span>
// 				</div>
// 				<div class="button" id="btn-6" data-value="6">
// 					<span>6</span>
// 				</div>
// 				<div class="button" id="btn-minus" data-value="-">
// 					<span>-</span>
// 				</div>
// 				<div class="button" id="btn-1" data-value="1">
// 					<span>1</span>
// 				</div>
// 				<div class="button" id="btn-2" data-value="2">
// 					<span>2</span>
// 				</div>
// 				<div class="button" id="btn-3" data-value="3">
// 					<span>3</span>
// 				</div>
// 				<div class="button" id="btn-plus" data-value="+">
// 					<span>+</span>
// 				</div>
// 				<div class="button btn-zero" id="btn-zero" data-value="0">
// 					<span>0</span>
// 				</div>
// 				<div class="button" id="btn-decimal" data-value="." >
// 					<span>.</span>
// 				</div>
// 				<div class="button btn-red" id="btn-equal"data-value="=" >
// 					<span>=</span>
// 				</div>
// 			</div>
			
// 		</div>
				
// 		<script src="script.js"></script>
// 	</body>
// </html>








// // 1. select buttons and dispaly area
// // 2. add event listeners to buttons


// // 3. segrate buttons in categories and do particular tasks
//     // 3.1 if buttons are operators
//     // 3.2 if buttons are equals
//     // 3.3 if buttons are clear
//     // 3.4 if buttons are numbers

//     var buttons = document.getElementsByClassName('button');
//     var display = document.getElementById('display');
    
//     // for calculating the result
//     var operand1 = null;
//     var operand2 = null;
//     var operator = null;
    
//     for(var i = 0; i < buttons.length; i++){
//         buttons[i].addEventListener('click', calculate);
//     }
    
//     function calculate(){
//         var value = this.getAttribute('data-value') ;
//         var text = display.innerHTML.trim();
//         // console.log(value);
    
//         // if value is an operator
//         if(value == '+' || value == '-' || value == '*' || value == '/'){
//         //  read whatever was there in the display
//         //  and store it in operator1
//         //  also take the button pressed as your operator
    
//             operand1 = parseFloat(text);
//             display.innerHTML = "";
//             operator = value;
            
//         }
    
//         // if value is allclear
//         else if(value == 'ac'){
//             display.innerHTML = "";
//         }
    
//         // if the value is negate sign
//         else if(value == 'sign'){
//             var existingText = text;
//             existingText = -1 * existingText;
//             display.innerHTML = existingText;
//         }
    
//         // if value is percent
//         else if(value == '%'){
//             var existingText = text;
//             existingText = existingText/100;
//             display.innerHTML = existingText;
//         }
    
//         // if value is decimal
//         else if(value == '.'){
//             if(!text.includes('.')){
//                 var existingText = text;
//                 display.innerHTML = existingText + '.';
//             }
//         }
    
//         // if value is equals
//         else if(value =='='){
//             operand2 = parseFloat(text);
//             // calculate the result
//             // evalute 2 + 9
//             var result = eval(operand1 +' '+ operator +' '+ operand2);
//             console.log(result);
//             display.innerHTML = result;
//             operand1 = result;
//             operand2 = null;
//             operator = null;
            
//         }
    
//         // if value is number
//         else{
//             display.innerHTML += value;
//         }
//     }


var buttons = document.getElementsByClassName('button')
var dispaly = document.getElementById('display');


var operand1 = null;
var operand2 = null;
var operator = null;

for(var i =0; i< buttons.length; i++){
	buttons[i].addEventListener('click',calculate);

}
function calculate(){
    var value= this.getAttribute('data-value');
    var text = dispaly.innerHTML.trim();
    // console.log(value);

    if(value == '+' || value == '-' || value == '*' || value == '/'){
       
        operand1 = parseFloat(text);
        dispaly.innerHTML="";
        operator = value;
    }
    else if(value =='ac'){
        dispaly.innerHTML = "";
    }

    else if(value == 'sign'){
        var existingText = text;
        existingText = -1 * existingText;
        dispaly.innerHTML = existingText;

    }
    else if(value == '%'){
        var existingText = text;
        existingText = existingText/100;
        dispaly.innerHTML = existingText;
    }
   else if(value == '.'){
        if(!text.includes('.')){
            var existingText = text;
            dispaly.innerHTML = existingText + '.';
        }
    }
     
    else if(value == '='){
        operand2 = parseFloat(text);
        var result = eval(operand1 +' '+ operator +' '+ operand2);
        console.log(result);
        dispaly.innerHTML = result;
        operand1 = result;
        operand2 = null;
        operator =null;
    }

    else{
        dispaly.innerHTML += value;
    }
}