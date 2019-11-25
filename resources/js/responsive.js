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
