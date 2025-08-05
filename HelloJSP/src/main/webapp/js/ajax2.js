/**
 * ajax2:
 * JSON.parse(json문자열) -> 자바스크립트 객체.
 */
fetch('js/MOCK_DATA.json') // Promise 객체.
	.then(function(result) {
		console.log(result); // 응답정보(body)
		return result.json(); // Promise 객체.
		
	 })
	 .then(function(result){
		/*console.log(result);*/
		result.forEach(elem =>{
			let tr = document.createElement('tr');
			['id', 'first_name', 'lsat_name', 'salay']
			.forEach(field => {
				let td = document.createElement('td');
				td.innerText = elem[field];
				tr.appendChild(td);
			}) 
			document.querySelector('#show tbody').appendChild(tr);
		})
	 })
	.catch(function(err) {
		console.log(err);
	 })
