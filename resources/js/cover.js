const str = 'ÔNG DEV VUI TÍNH';

var titleContainer = document.getElementsByClassName('cover-title');
var title = document.createElement('H1');
titleContainer[0].appendChild(title);

function add(i) {
  if(i >= str.length) return;
	title.innerHTML += str[i];
  setTimeout(add, 200, i+1);
}

add(0);

