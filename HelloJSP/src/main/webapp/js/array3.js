/**
 * array3.js
 */

let students1 = [
    {name: "홍길동", score: 80},
    {name: "김민규", score: 85},
    {name: "박흥부", score: 88},
    {name: "김길동", score: 76}
]

let result = students1.reduce((acc, elem) =>{
    let tr = document.createElement('tr');
	for(let prop in elem) {
		let td = document.createElement('td');
		td.innerText = elem[prop];
		tr.appendChild(td);
	}
	acc.appendChild(tr);
	
	return acc;
}, document.querySelector('#item tbody'));
console.log(`최고점자는 ${result.name}, 점수는 ${result.score}점입니다.`); // 최고점자는 박흥부고, 점수는 88점입니다.

let numAry = [10, 15, 20, 25, 30, 77, 64, 55]
//acc 는 이전에 elem에서 반환한 값
result = numAry.reduce((acc, elem, idx, ary) => {
    console.log(acc, elem);
    // acc => [10]
    if(elem % 2 == 0){
        acc.push(elem);
    }
    return acc; // [10, 34]
}, []/**<= acc의 초기값*/);
console.log(result);