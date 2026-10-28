const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const form = document.querySelector('#demo-form');
const formMessage = document.querySelector('#form-message');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  formMessage.textContent = `Спасибо${name ? `, ${name}` : ''}! Это демо: заявка не отправлена.`;
  form.reset();
});

