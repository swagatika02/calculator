    function sin(){
	document.calculater.result.value=Math.sin(document.calculater.result.value);
	}

	function cos(){
	document.calculater.result.value=Math.cos(document.calculater.result.value);
	}

	function tan(){
	document.calculater.result.value=Math.tan(document.calculater.result.value);
	}

	function BACKSPC(){
	var a = document.calculater.result.value;
	document.calculater.result.value = a.substr(0, a.length-1);
	}

	function square(){
	document.calculater.result.value = Math.pow(document.calculater.result.value, 2);
	}

	function cubed(){
	document.calculater.result.value = Math.pow(document.calculater.result.value, 3);
	}

	function sqrt2(){
	document.calculater.result.value = Math.pow(document.calculater.result.value, 1/2);
	}

	function sqrt3(){
	document.calculater.result.value = Math.pow(document.calculater.result.value, 1/3);
	}

	function number(value){
	document.calculater.result.value += value;
	}

	function remv(){
	document.calculater.result.value=" ";
	}

	function equal(){
	document.calculater.result.value=eval(document.calculater.result.value);
	} 