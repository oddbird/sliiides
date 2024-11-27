export default function () {
  const root = document.querySelector('html');
  const pres = document.querySelector('[data-body=slides]');
  const slides = document.querySelector('[data-slides]');

  const controlToggles = document.querySelectorAll('button[control-toggle]');
  const controlPanel = document.getElementById('control-panel');

  const updateToggleState = () => {
    controlToggles.forEach((btn) => {
      btn.setAttribute('aria-pressed', controlPanel.open);
    });
  };

  const toggleControls = () => {
    controlPanel.open ? controlPanel.close() : controlPanel.showModal();
    updateToggleState();
  };

  controlToggles.forEach((btn) => {
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => toggleControls());
  });

  controlPanel.addEventListener('close', () => updateToggleState());

  const cmdOrCtrl = (event) => event.ctrlKey || event.metaKey;

  root.addEventListener('keydown', (event) => {
    if (event.key === 'k' && cmdOrCtrl(event)) {
      event.preventDefault();
      toggleControls();
    } else if (event.key === 'Escape' && controlPanel.open) {
      event.preventDefault();
      event.target.blur();
      controlPanel.close();
    }
  });

  const presToggle = document.querySelector('[data-toggle=presenting]');
  const gridToggle = document.querySelector('[data-toggle=grid]');
  const followToggle = document.querySelector('[data-toggle=follow]');
  const totalSlides = parseInt(slides.dataset.slides, 10) + 1;
  const isPresenting = () => sessionStorage.getItem('presenting') === 'true';
  const isFollowing = () => sessionStorage.getItem('follow') === 'true';
  const isGridView = () => sessionStorage.getItem('view') === 'grid';

  const slideFromHash = (hash) => parseInt(hash.split('-').pop(), 10) || 0;
  const inRange = (slide) => slide >= 0 && slide <= totalSlides;

  const storeActive = (to) => localStorage.setItem('slide', to);
  const getActive = () => localStorage.getItem('slide');
  const resetActive = () => localStorage.removeItem('slide');
  const moveHash = (to) => {
    window.location.hash = `slide-${to}`;
  };

  const goTo = (slide) => {
    if (inRange(slide)) {
      moveHash(slide);
    }
  };

  const move = (by) => {
    const to = slideFromHash(window.location.hash) + by;
    goTo(to);
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
      case 'PageDown':
        event.preventDefault();
        move(1);
        break;
      case 'ArrowLeft':
        move(-1);
        break;
      case 'PageUp':
        event.preventDefault();
        move(-1);
        break;
      default:
        break;
    }
  };

  const presOn = () => {
    presToggle.setAttribute('aria-pressed', 'true');
    root.setAttribute('data-present', 'true');
    pres.addEventListener('keydown', captureKeys);
  };

  const presOff = () => {
    presToggle.setAttribute('aria-pressed', 'false');
    root.setAttribute('data-present', 'false');
    pres.removeEventListener('keydown', captureKeys);
  };

  const followMode = () => {
    goTo(getActive());
  };

  const gridOn = () => {
    gridToggle.setAttribute('aria-pressed', 'true');
    root.setAttribute('data-view', 'grid');
  };

  const gridOff = () => {
    gridToggle.setAttribute('aria-pressed', 'false');
    root.setAttribute('data-view', 'default');
  };

  const followOn = () => {
    followToggle.setAttribute('aria-pressed', 'true');
    goTo(getActive());
    window.addEventListener('storage', followMode);
  };

  const followOff = () => {
    followToggle.setAttribute('aria-pressed', 'false');
    window.removeEventListener('storage', followMode);
  };

  const updateStorageFromHash = () => {
    if (window.location.hash) {
      const hash = slideFromHash(window.location.hash);
      if (inRange(hash)) {
        storeActive(hash);
      } else {
        resetActive();
      }
    }
  };

  const init = () => {
    if (isPresenting()) {
      presOn();
    }

    if (isGridView()) {
      gridOn();
    }

    if (isFollowing()) {
      followOn();
    } else {
      updateStorageFromHash();
    }
  };

  document.onload = init();
  window.addEventListener('hashchange', updateStorageFromHash, false);

  if (presToggle) {
    presToggle.addEventListener('click', () => {
      const isOn = isPresenting();

      if (isOn) {
        presOff();
      } else {
        presOn();
      }

      sessionStorage.setItem('presenting', !isOn);
    });
  }

  if (gridToggle) {
    gridToggle.addEventListener('click', () => {
      const isOn = isGridView();

      if (isOn) {
        gridOff();
      } else {
        gridOn();
      }

      sessionStorage.setItem('view', isOn ? 'default' : 'grid');
    });
  }

  if (followToggle) {
    followToggle.addEventListener('click', () => {
      const isOn = isFollowing();

      if (isOn) {
        followOff();
      } else {
        followOn();
      }

      sessionStorage.setItem('follow', !isOn);
    });
  }
}
