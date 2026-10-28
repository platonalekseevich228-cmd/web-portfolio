const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

const brief = `Здравствуйте! Хочу обсудить одностраничный сайт.\n\n1. Моя услуга или продукт:\n2. Кто мой клиент:\n3. Главная задача сайта:\n4. Какие материалы уже есть:\n5. Желаемый срок:\n6. Примеры сайтов, которые нравятся:`;
const copyButton = document.querySelector('#copy-brief');
const copyStatus = document.querySelector('#copy-status');

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(brief);
    copyStatus.textContent = 'Бриф скопирован — можно вставить его в первое сообщение.';
  } catch {
    copyStatus.textContent = 'Не получилось скопировать автоматически. Выделите текст брифа вручную.';
  }
});

