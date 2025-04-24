import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GLightbox from 'glightbox';
// import Isotope from 'isotope-layout';
// import CellsByRow from 'isotope-cells-by-row';
import 'glightbox/dist/css/glightbox.css';

// If you want plugins later:
// import lgZoom from 'lightgallery/plugins/zoom';


// ==== Initialize GLightbox ====
const lightbox = GLightbox({
  selector: '.artgallery',
  touchNavigation: true,
  loop: false,
  zoomable: false,
  width: 'auto',
  height: 'auto',
  closeButton: true,
  skin: 'clean',
});

document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.artwork').forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 👉 Trigger default filter
const defaultButton = document.querySelector('.filter-button.active');
if (defaultButton) {
  defaultButton.click();
}

