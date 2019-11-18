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
window.onresize = window.onload = () => {
  for (var i = 0; i < card.length; i++) {
    if (this.innerWidth <= 768) {
      i == 0 ? card[i].classList.add('card-active') : card[i].classList.remove('card-active');
      i > 0 ? card[i].classList.add('card-unactive') : card[i].classList.remove('card-unactive');
    } else {
      card[i].removeAttribute('style');
      card[i].classList.remove('card-active');
      card[i].classList.remove('card-unactive');
    }
  }
};
