const dummyCover = 'resources/images/dummyimage3.jpg';

const str = 'ÔNG DEV VUI TÍNH';

let coverBackground = document.getElementById('cover'); 
let titleContainer = document.getElementsByClassName('cover-title');
let coverTitle = document.createElement('H1');
titleContainer[0].appendChild(coverTitle);

coverBackground.setAttribute('style',
`background-image: url(${dummyCover})`,
);

add = (i) => {
  if(i >= str.length) return;
	coverTitle.innerHTML += str[i];
  setTimeout(add, 250, i+1);
}

add(0);

