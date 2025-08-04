/**
 * data.js
 */
const str = `[{"id":1,"first_name":"Artur","last_name":"Ivashnyov","email":"aivashnyov0@joomla.org","gender":"Male","salary":9854},
{"id":2,"first_name":"Dalila","last_name":"Woolis","email":"dwoolis1@webeden.co.uk","gender":"Female","salary":7652},
{"id":3,"first_name":"Brianna","last_name":"Cristou","email":"bcristou2@bing.com","gender":"Female","salary":5356},
{"id":4,"first_name":"Rhett","last_name":"McCrone","email":"rmccrone3@cbslocal.com","gender":"Male","salary":9581},
{"id":5,"first_name":"Marcelia","last_name":"Arboine","email":"marboine4@vk.com","gender":"Female","salary":8628},
{"id":6,"first_name":"Amii","last_name":"Rosas","email":"arosas5@sakura.ne.jp","gender":"Female","salary":5113},
{"id":7,"first_name":"Rozele","last_name":"Scrowton","email":"rscrowton6@bloglines.com","gender":"Female","salary":7388},
{"id":8,"first_name":"Carny","last_name":"Iddenden","email":"ciddenden7@uiuc.edu","gender":"Male","salary":5631},
{"id":9,"first_name":"Jessee","last_name":"Lindholm","email":"jlindholm8@webs.com","gender":"Male","salary":9107},
{"id":10,"first_name":"Gaye","last_name":"Whiteley","email":"gwhiteley9@house.gov","gender":"Female","salary":6668},
{"id":11,"first_name":"Randee","last_name":"Quan","email":"rquana@youku.com","gender":"Female","salary":9563},
{"id":12,"first_name":"Lind","last_name":"Bussetti","email":"lbussettib@sphinn.com","gender":"Male","salary":7914},
{"id":13,"first_name":"Dev","last_name":"Marke","email":"dmarkec@chicagotribune.com","gender":"Male","salary":7849},
{"id":14,"first_name":"Guendolen","last_name":"Boothebie","email":"gboothebied@addtoany.com","gender":"Female","salary":5162},
{"id":15,"first_name":"Dalton","last_name":"Steart","email":"dstearte@wordpress.org","gender":"Male","salary":6198}]`;
// json문자열(객체) -> js객체로 변환 마지막에 , 넣으면 안됨
let members = JSON.parse(str);

/*console.log(str);*/
console.log(members[1].first_name);

let students = [{name: "Hong", age: 20}, {name: "Choi", age: 21}]
              //[{name: "Hong", "age": 20}, {name: "Choi", "age": 21}]
// 객체 -> JSON.stringify() -> json 문자열
let json = JSON.stringify(students);
/*console.log(json);/*/

// 반복문(forEach) => 성별: Female 급여: 6000 이상인 사람을 출력.

function ex03(){
	members.forEach(elem => {
		if(elem.gender == "Female" && elem.salary >= 6000){
			console.log("이름: "+elem.first_name +" "+ elem.last_name+" 성별: "+elem.gender+" 급여: "+elem.salary)
		}
	})
}
ex03();

