calculate.addEventListener('click', function (){
	console.log('It is working');
	let typeofwork= work.value;
	let nroom= rooms.value;
	let ecost='';

	if(typeofwork=="Basement"){
		ecost=nroom*20000;
	}
	if(typeofwork=="Electrical"){
		ecost=nroom*2600;
	}
	if(typeofwork=="Plumbing"){
		ecost=nroom*3600;
	}
	if(typeofwork=="Flooring"){
		ecost=nroom*1600;
	}
	document.f6.cost.value=ecost;
})



