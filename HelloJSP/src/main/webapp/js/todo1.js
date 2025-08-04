/**
 * todo1.js
 */
const students = [];
students.push({sname: "홍길동", score: 90});

function showStd(){
    students.forEach((elem, idx, ary) => {
      let str = `<tr><td>${elem.sname}</td><td>${elem.score}</td>`
      document.querySelector('#tlist').innerHTML += str;
    })
}

document.querySelector('#addList').addEventListener('click', () => {
	document.querySelector('#tlist').innerHTML = '';
    let name = document.querySelector('#std_name').value;
    let sscore = document.querySelector('#std_score').value;
	if(name == '' || sscore == '') {
		alert('값을 입력하세요!')
		return
	}
    students.push({sname: name, score: sscore});
    showStd();
	document.querySelector('#std_name').value = '';
	document.querySelector('#std_score').value = '';
})