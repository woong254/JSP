/**
 * 
 */

console.log(members[0]);

for (let member of members) {
	//let member = members[1]; // {id:?, fn:?, ln:?......}
	//let id = memeber.id;
	//let first_name = member.first_name;
	let { id, first_name, last_name, email } = member;
	console.log(`${id}, ${first_name}, ${last_name}, ${email}`);
	let tr = document.createElement('tr');
	// for.. in ..
	for (let prop in member) {
		console.log(`속성: ${prop}, 값: ${member[prop]}`);
		if (prop == "gender") {
			if (member[prop] == 'Female') {
				tr.style.backgroundColor = 'pink';
			} else if (member[prop] == 'Male') {
				tr.style.backgroundColor = 'yellow';
			}
		}
		let td = document.createElement('td');
		td.innerText = member[prop]; // <td>Messi</td>
		tr.appendChild(td);
	}
	// 삭제버튼. <td><button>삭제</button></td>
	let td = document.createElement('td');
	let btn = document.createElement('button');
	// 이벤트&이벤트핸들러.
	btn.addEventListener('click', (del) => {
		let parent = del.target.parentElement.parentElement;
		console.log(parent.children);
		let fn = parent.children[1].innerText;
		let ln = parent.children[2].innerText;
		if (confirm(`${fn} ${ln}을 삭제하시겠습니까?`)) {
			del.target.parentElement.parentElement.remove();
		}
	})
	document.querySelector('#show tbody').appendChild(tr);
	btn.innerText = '삭제';
	td.appendChild(btn);
	
	tr.appendChild(td);
}
	let sum = 0;
	document.querySelectorAll('#show tbody tr td:nth-of-type(6)').forEach(elem =>
    sum += parseInt(elem.innerText));
	console.log(`합계는 ${sum}`);
