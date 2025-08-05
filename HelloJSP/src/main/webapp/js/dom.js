/**
 * dom.js
 * <ul id ="target">
 		<li>apple</li>
		<li>banana</li>
	</ul>
*/
let ul = document.createElement('ul'); // <ul />
ul.setAttribute('id', 'target');
let li = document.createElement('li'); // <li />
li.innerText = 'apple' ;
ul.appneappendChild(li);

li = document.activeElement('li');
li.innerText = 'banana';
ul.appendChild(li);

console.log(ul); // <ul id='target'><li>apple</li><li>banana</li></ul>

// <div id='show' />
document.querySelector('#show').appendChild(ul);
	