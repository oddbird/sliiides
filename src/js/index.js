import ccs from 'cascading-color-systems';

ccs();

const pres = document.querySelector('[data-body=slides]');
const slides = document.querySelector('[data-slides]');

if (pres && slides) {
  const presToggle = document.querySelector('[data-toggle=presenting]');
  const totalSlides = Number(slides.dataset.slides);
  const numberFromHash = (hash) => Number(hash.split('-').pop());
  const isPresenting = () => sessionStorage.getItem('presenting') === 'true';

  const move = (by) => {
    const current = numberFromHash(window.location.hash) || 0;
    const to = current + by;
    if (to >= 0 && to <= totalSlides) {
      window.location.hash = `slide-${to}`;
    }
  };

  const captureKeys = (event) => {
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (event.target.dataset.body !== 'slides') {
      return;
    }

    switch (event.key) {
      case 'ArrowRight':
        move(1);
        break;
      case 'ArrowLeft':
        move(-1);
        break;
      default:
        break;
    }
  };

  if (presToggle) {
    presToggle.addEventListener('click', () => {
      const isOn = isPresenting();

      if (isOn) {
        presToggle.setAttribute('aria-pressed', 'false');
        pres.removeEventListener('keyup', captureKeys);
      } else {
        presToggle.setAttribute('aria-pressed', 'true');
        pres.addEventListener('keyup', captureKeys);
      }

      sessionStorage.setItem('presenting', !isOn);
    });
  }
}
