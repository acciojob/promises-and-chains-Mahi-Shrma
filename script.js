//your JS code here. If required.
document.getElementById("form").addEventListener('submit',function(e){
	e.preventDefault();
		const age=parseInt(document.getElementById("age").value);
		const name=document.getElementById("name").value;
	
	return new Promise((resolve,reject)=>{
			setTimeout(()=>{
		        if(age>18){
			    resolve(`Welcome, ${name}. You can vote.`);
				}
				else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	},4000);
}).then((msg)=>alert(msg))
		.catch((er)=>alert(er));
});