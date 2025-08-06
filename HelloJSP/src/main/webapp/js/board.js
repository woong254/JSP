/**
 * board.js
 *  144 댓글 정보 =>  json 반환.
 */

let page = 1; //page 변경.
// 페이징로딩 시점에 실행.
function showReplyList() {
	// 기존목록을 지우고....
	document.querySelectorAll('div.content>ul>li')
	.forEach((elem,idx) => {
		if(idx >= 2) {
			elem.remove();
		}
	});
	// 목록출력.
	svc.replyList({ bno, page }, // 첫번째 param
		result => {
			result.forEach(elem => {
				let li = makeRow(elem);
				document.querySelector('div.content>ul').appendChild(li); // > 바로자식요소
			})
		}, // 두번쨰 param.
		err => console.log(err) // 세번쨰 param.
	);
}
showReplyList(); // 최초목록 출력.

//이벤트 등록.
document.querySelector('#addReply')//
	.addEventListener('click', function(e) {
		// 게시글번호(bno)/ 작성자(logId)/ 댓글(Reply)
		let reply = document.querySelector('#reply').value;
		if (!bno || !reply || !logId) { // true/false => falsy(0, '', null, undefined)
			alert('필수값을 입력하세요');
			return;
		}
		//
		svc.registerReply({ bno, reply, replyer: logId },
			result => {
				if (result.retCode == 'OK') {
					let r = result.retVal;
					let li = makeRow(r);
					document.querySelector('div.content>ul').appendChild(li);
				} else if (result.retCode == 'NG') {
					alert('처리중 예외발생.');
				} else {
					alert('알수 없는 코드.');
				}
			},
			err => console.error(err)
		);
	});

// 페이징 링크에 클릭이벤트.
document.querySelectorAll('div.footer>div.pagination>a')
	.forEach(atag => {
		atag.addEventListener('click', e => {
			e.preventDefault(); // 기본기능을 차단.
			page = e.target.innerText;
			// 목록그려주기.
			showReplyList();
		})
	});

function makeRow(reply) {
	let li = document.createElement('li');
	['replyNo', 'reply', 'replyer'].forEach(elem => {
		let span = document.createElement('span');
		span.innerText = reply[elem];
		if (elem == 'reply') {
			span.setAttribute('class', 'col-sm-5');
		} else {
			span.setAttribute('class', 'col-sm-2');
		}
		li.appendChild(span);
	})
	let span = document.createElement('span');
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRowFnc)
	btn.innerText = '삭제';
	span.appendChild(btn);
	li.appendChild(span);

	return li;
} // end of makeRow

// 데이터 삭제 함수.
function deleteRowFnc(e) {
	let rno = e.target.parentElement.parentElement.children[0].innerText
	console.log(rno);
	if (!confirm(`${rno}번 댓글을 삭제하시겠습니까?`)) {
		alert('삭제를 취소했습니다.')
		return;
	}
	// fetch 서버프로그램 호출.
	svc.removeReply(rno,
		result => {
			if (result.retCode == 'OK') {
				e.target.parentElement.parentElement.remove();
			} else if (result.retCode == 'NG') {
				alert('삭제실패!')
			} else {
				alert('알수없는 코드입니다.')
			}
		},
		err => consoler.error(err)
	);
}