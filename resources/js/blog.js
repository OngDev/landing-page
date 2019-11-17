const dummyBlog = {
  image: [
    'resources/images/dummyimage2.jpg',
    'resources/images/dummyimage3.jpg',
    'resources/images/dummyimage4.jpg',
  ],
  title: ['1. Super ultra hot posts', '2. Super ultra hot posts', '3. Super ultra hot posts'],
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatibus eveniet,repudiandae excepturi ducimus animi omnis rerum? Accusantium alias repellendus minimaharum, similique ea mollitia sit omnis deleniti totam perferendis!',
  view: [' 30.000', ' 20.000', ' 10.000'],
};

var title = document.getElementsByClassName('post-title');
for (var i = 0; i < title.length; i++) {
  var text = document.createTextNode(dummyBlog.title[i]);
  title[i].appendChild(text);
}

var content = document.getElementsByClassName('post-content');
for (var i = 0; i < content.length; i++) {
  var text = document.createTextNode(dummyBlog.content);
  content[i].appendChild(text);
}

var view = document.getElementsByClassName('post-view');
for (var i = 0; i < view.length; i++) {
  var text = document.createTextNode(dummyBlog.view[i]);
  view[i].appendChild(text);
}

var image = document.getElementsByClassName('post-image');
for (var i = 0; i < image.length; i++) {
  image[i].setAttribute('src', dummyBlog.image[i]);
}

var cardshow = document.getElementById('blog-card').getElementsByClassName('card');
var cardindex = 0;
backCard = () => {
  cardshow[cardindex].style.display = 'none';
  if (cardindex == 0) {
    cardindex = cardshow.length;
  }
  cardshow[cardindex - 1].style.display = 'block';
  cardindex--;
};

forwardCard = () => {
  cardshow[cardindex].style.display = 'none';
  cardindex++;
  if (cardindex == cardshow.length) {
    cardindex = 0;
  }
  cardshow[cardindex].style.display = 'block';
};
