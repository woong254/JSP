/**
 * string.js
 * 문자열 메소드(indexOf, substring, slice, split, toUpperCase, toLowerCase, trim, replace, includes)
 */

let idx = "Hello, World".indexOf('W');
console.log(idx); // 찾는 값이 없을 경우 => -1을 반환.
let idx2 = "Hello, World".indexOf("Nice");
console.log(idx2);
if (idx == -1) {
    console.log("찾는 문자열이 없습니다");
}

const obj = {
    name: '홍길동',// obj.name
    age: 20,
    info: function() {
      return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
  }
  console.log(obj.name);
  
  
  Array.prototype.sum = function(num1){
    this.push(num1);
  }
  
  const numbers = [1,2];
  numbers.push(3);
  numbers.push(4);
  
  console.log(numbers);

  const names = ['홍길동', '홍길순', '김길동', '김민수'];
  // '길동' 이름이 총 몇명인지를 반환하는 함수를 생성.
  function getKildong() {
    let cnt = 0;
    names.forEach(ele  => {
        if(ele.indexOf('김') == 0)
          cnt++
      }
    )
    console.log(`${cnt}명`);
  }
  getKildong();

  let strAry = [" Hello, Java        "//
    , " HTML, Css, JavaScript  "//
    , "   Java is compiler    "//
    , "     Java and Javascript    "];
	
  let filterWord = "JAVA";
    function ex01() {
      strAry.forEach(ele => {
		let result = ele.trim().toLocaleUpperCase().replaceAll(filterWord, '****');
      	console.log(result);
      })
    }
	ex01();
	
	let noAry = ["920304-1213421","990508 2928123","030702-4323123","991127 1613134","040402 4412123"]
	/*결과 => 920304-1213421은 남자입니다.
			 990508-2928123은 여자입니다.
			 030702-4323123은 여자입니다. */
	function ex02() {
	noAry.forEach(num => {
		if(num.slice(-7)[0] == 1 || num.slice(-7)[0] == 3){
			console.log(num.replace(" ","-")+"은 남자입니다.")
		} else if(num.slice(-7)[0] == 2 || num.slice(-7)[0] == 4){
			console.log(num.replace(" ","-")+"은 여자입니다.")
		}
	})
}
	ex02();
	
	