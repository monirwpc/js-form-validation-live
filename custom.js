function frmValidation(){
	var name = document.frm.name.value;
	var age = document.frm.age.value;
	var email = document.frm.email.value;
	var phone = document.frm.phone.value;
	var pass = document.frm.pass.value;
	var repass = document.frm.repass.value;
	var pattern = /^[a-z._]{3,}@[a-z._]{4,}[.][a-z]{2,6}$/;

	if( name == ''){
		document.getElementById('name-mess').innerHTML = '*please Enter Your Name';
		document.frm.name.addEventListener("keyup",name_valid);
		document.frm.name.focus();
		return false;
	}else if(!(/^[A-Za-z]{1,}$/.test(document.frm.name.value))){
		document.frm.name.focus();
		return false;
	}
	else if(document.frm.name.value.length<5){
		document.frm.name.focus();
		return false;
	}

	if( age == '' ){
		document.getElementById('age-mess').innerHTML = '*please Enter Your age';
		document.frm.age.addEventListener("keyup",age_valid);
		document.frm.age.focus();
		return false;
	}else if(isNaN(document.frm.age.value)){
		document.frm.age.focus();
		return false;
	}

	if( email == '' ){
		document.getElementById('email-mess').innerHTML = '*Enter Your Email';
		document.frm.email.addEventListener("keyup",email_valid);
		document.frm.email.focus();
		return false;
	}else if(!pattern.test(email)){
		document.frm.email.focus();
		return false;
	}

	if( phone == '' ){
		document.getElementById('phone-mess').innerHTML = '*please Enter Phone No';
		document.frm.phone.addEventListener("keyup",phone_valid);
		document.frm.phone.focus();
		return false;
	} else if(document.frm.phone.value.length != 11) {
		document.frm.phone.focus();
		return false;
	}

	if( pass == '' ){
		document.getElementById('pass-mess').innerHTML = '*Enter Your Password';
		document.frm.pass.addEventListener("keyup",pass_valid);
		document.frm.pass.focus();
		return false;
	}else if(document.frm.pass.value.length < 4 || document.frm.pass.value.length >10){
		document.frm.pass.focus();
		return false;
	}

	if( repass == '' ){
		document.getElementById('repass-mess').innerHTML = '*Enter Confirm Password';
		document.frm.repass.addEventListener("keyup",repass_valid);
		document.frm.repass.focus();
		return false;
	}else if(document.frm.pass.value != document.frm.repass.value){
		document.frm.repass.focus();
		return false;
	}
}


// onkey function 

function name_valid(){
	if(document.frm.name.value == ''){
		document.getElementById('name-mess').innerHTML = '*please Enter Your Name';
		document.getElementById('name-mess').style.color='red';
	}else if(!(/^[A-Za-z]{1,}$/.test(document.frm.name.value))){
		document.getElementById('name-mess').innerHTML = '*not allowed number';
		document.getElementById('name-mess').style.color='red';
	}
	else if(document.frm.name.value.length<5){
		document.getElementById('name-mess').innerHTML = 'please enter at least 5 char';
		document.getElementById('name-mess').style.color='red';
	}else{
		document.getElementById('name-mess').innerHTML = 'just perfect';
		document.getElementById('name-mess').style.color='green';
	}
}

function age_valid(){
	if(document.frm.age.value == ''){
		document.getElementById('age-mess').innerHTML = '*please enter how old are you?';
		document.getElementById('age-mess').style.color='red';
	}
	else if(isNaN(document.frm.age.value)){
		document.getElementById('age-mess').innerHTML = 'please enter Number';
		document.getElementById('age-mess').style.color='red';
	}else{
		document.getElementById('age-mess').innerHTML = 'just perfect';
		document.getElementById('age-mess').style.color='green';
	}
}

function email_valid(){
	var email = document.frm.email.value;
	var pattern = /^[a-z._]{3,}@[a-z._]{4,}[.][a-z]{2,6}$/;
	if(document.frm.email.value == ''){
		document.getElementById('email-mess').innerHTML = '*please Enter Your email';
		document.getElementById('email-mess').style.color='red';
	}
	else if(!pattern.test(email)){
		document.getElementById('email-mess').innerHTML = '*your input Email are not valid';
		document.getElementById('email-mess').style.color='red';
	}else{
		document.getElementById('email-mess').innerHTML = 'just perfect';
		document.getElementById('email-mess').style.color='green';
	}
}

function phone_valid(){
	if(document.frm.phone.value == ''){
		document.getElementById('phone-mess').innerHTML = '*please Enter Phone No';
		document.getElementById('phone-mess').style.color='red';
	}else if(isNaN(document.frm.phone.value)){
		document.getElementById('phone-mess').innerHTML = '*only number are allowed not character';
		document.getElementById('phone-mess').style.color='red';
	}
	else if(document.frm.phone.value.length != 11 ){
		document.getElementById('phone-mess').innerHTML = '*please Enter your 11 digit phone no';
		document.getElementById('phone-mess').style.color='red';
	}else{
		document.getElementById('phone-mess').innerHTML = 'just perfect';
		document.getElementById('phone-mess').style.color='green';
	}
}

function pass_valid(){
	if(document.frm.pass.value == ''){
		document.getElementById('pass-mess').innerHTML = '*please Enter Your password';
		document.getElementById('pass-mess').style.color='red';
	}
	else if(document.frm.pass.value.length < 4 || document.frm.pass.value.length >10){
		document.getElementById('pass-mess').innerHTML = '*password between 5 to 10 char';
		document.getElementById('pass-mess').style.color='red';
	}else{
		document.getElementById('pass-mess').innerHTML = 'just perfect';
		document.getElementById('pass-mess').style.color='green';
	}
}

function repass_valid(){
	if(document.frm.repass.value == ''){
		document.getElementById('repass-mess').innerHTML = '*please Enter confirm password';
		document.getElementById('repass-mess').style.color='red';
	}
	else if(document.frm.pass.value != document.frm.repass.value){
		document.getElementById('repass-mess').innerHTML = '*password did not match';
		document.getElementById('repass-mess').style.color='red';
	}else{
		document.getElementById('repass-mess').innerHTML = "welldone! let's go ";
		document.getElementById('repass-mess').style.color='green';
	}
}