const dummyBlog = [
  'resources/images/dummyimage2.jpg',
  '1. Super ultra hot posts',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptatibus eveniet,repudiandae excepturi ducimus animi omnis rerum? Accusantium alias repellendus minimaharum, similique ea mollitia sit omnis deleniti totam perferendis!',
  '10.000',
];

var image = document.getElementsByClassName('post-image');
for (var i = 0; i < image.length; i++) {
  image[i].setAttribute('src', dummyBlog[0]);
}

var title = document.getElementsByClassName('post-title');
for (var i = 0; i < title.length; i++) {
  var text = document.createTextNode(dummyBlog[1]);
  title[i].appendChild(text);
}

var content = document.getElementsByClassName('post-content');
for (var i = 0; i < content.length; i++) {
  var text = document.createTextNode(dummyBlog[2]);
  content[i].appendChild(text);
}

var view = document.getElementsByClassName('post-view');
for (var i = 0; i < view.length; i++) {
  var text = document.createTextNode(dummyBlog[3]);
  view[i].appendChild(text);
}
