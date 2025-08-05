/**
 * array.js (forEach, map, filter, reduce)
 * document.querySeletorAll() 결과에 사용.
 */

let sum = 0;

var oddsum = [12, 34, 83, 22, 59, 77].forEach((elem, idx, ary)=>{
	if(elem % 2 ==0){
		sum += elem;
	}
	if(idx == ary.length-1){
		console.log(sum);
	}
});

oddsum();
