export default function () {
  const pres = document.querySelector('[data-body=slides]');
  const slides = document.querySelector('[data-slides]');
  const presToggle = document.querySelector('[data-toggle=presenting]');
  const totalSlides = parseInt(slides.dataset.slides, 10) + 1;
  const numberFromHash = (hash) => parseInt(hash.split('-').pop(), 10);
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
      if (event.key === 'Escape') {
        event.target.blur();
      }
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

  const turnOn = () => {
    presToggle.setAttribute('aria-pressed', 'true');
    pres.addEventListener('keyup', captureKeys);
  };

  const turnOff = () => {
    presToggle.setAttribute('aria-pressed', 'false');
    pres.removeEventListener('keyup', captureKeys);
  };

  const init = () => {
    if (isPresenting()) {
      turnOn();
    }
  };

  document.onload = init();

  if (presToggle) {
    presToggle.addEventListener('click', () => {
      const isOn = isPresenting();

      if (isOn) {
        turnOff();
      } else {
        turnOn();
      }

      sessionStorage.setItem('presenting', !isOn);
    });
  }
}
