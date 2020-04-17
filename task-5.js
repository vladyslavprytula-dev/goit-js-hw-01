let input = prompt('Введите вашу страну');
let country, price;
let message = (country, price) => alert(`Доставка в ${country} будет стоить ${price} кредитов`);
input = input.toLowerCase();
switch (input) {
  case 'китай':
    message('Китай', 100);
    break;
  case 'чили':
    message('Чили', 250);
    break;
  case 'австралия':
    message('Австралия', 170);
    break;
  case 'индия':
    message('Индия', 80);
    break;
  case 'ямайка':
    message('Ямайка', 120);
    break;
  default:
    alert('В вашей стране доставка не доступна');
    break;
}
