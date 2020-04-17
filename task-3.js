const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const a = prompt('Введите пароль');
if (a === null) {
  console.log((message = 'Отменено пользователем!'));
} else if (a === ADMIN_PASSWORD) {
  console.log((message = 'Добро пожаловать!'));
} else {
  console.log((message = 'Доступ запрещен, неверный пароль!'));
}
