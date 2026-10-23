(() => {
  'use strict';
  const dialog = document.querySelector('#download-dialog');
  if (dialog) {
    document.querySelectorAll('[data-download]').forEach(button => button.addEventListener('click', () => dialog.showModal()));
    dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
  }
  const storeURL = window.DUMAS_SITE?.appStoreURL;
  if (storeURL) {
    try {
      const url = new URL(storeURL);
      if (url.protocol === 'https:' && url.hostname === 'apps.apple.com' && /\/id\d+/.test(url.pathname)) {
        document.querySelectorAll('[data-store-link]').forEach(link => { link.href = url.href; });
        document.querySelectorAll('[data-store-note]').forEach(note => { note.textContent = 'View price, availability, and compatibility on the Mac App Store.'; });
      }
    } catch (_) { /* An unset or invalid listing keeps the App Store fallback. */ }
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const moods = {
    mist: {tag:'WHERE THE MOUNTAINS BREATHE', quote:'The mist was lifting.\nThe story was just beginning.', index:'01', name:'Mist Fall'},
    forest: {tag:'BENEATH THE TREES', quote:'In the quiet, you hear\nwhat the world usually hides.', index:'02', name:'Forest'},
    night: {tag:'A WINDOW INTO THE NIGHT', quote:'The night has stories\nit has been saving for you.', index:'03', name:'Night Observatory'}
  };
  document.querySelectorAll('[data-mood]').forEach(button => button.addEventListener('click', () => {
    const mood = button.dataset.mood;
    const data = moods[mood];
    if (!data) return;
    document.querySelectorAll('[data-mood]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('.mood-preview, #scene').forEach(scene => { scene.dataset.theme = mood; });
    document.querySelector('#mood-tag').textContent = data.tag;
    document.querySelector('#mood-quote').replaceChildren(...data.quote.split('\n').flatMap((line, index) => index ? [document.createElement('br'), document.createTextNode(line)] : [document.createTextNode(line)]));
    document.querySelector('#mood-index').textContent = data.index + ' — 03';
    document.querySelector('#scene-index').textContent = data.index + ' / 03';
    document.querySelector('#scene-name').textContent = data.name;
  }));
})();
