/* Header */
var header = document.getElementById('header');

headerTogger = () => {
  header.classList.toggle('responsive');
};

window.onscroll = () => {
  this.stickyHeader();
};

stickyHeader = () => {
  if (window.pageYOffset > 0) {
    header.classList.add('sticky-header');
  } else {
    header.classList.remove('sticky-header');
  }
};

/* Blog */
var card = document.getElementById('blog-card').getElementsByClassName('card');
for (var i = 0; i < card.length; i++) {
  if (i == 0) {
    card[i].classList.add('card-active');
  } else if (i > 0) {
    card[i].classList.add('card-unactive');
  }
}
