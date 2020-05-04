const ADMIN_PASSWORD = 'jqueryismyjam';

const a = prompt('Введите пароль');
if (a === null) {
  console.log('Отменено пользователем!');
} else if (a === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else {
  console.log('Доступ запрещен, неверный пароль!');
}
