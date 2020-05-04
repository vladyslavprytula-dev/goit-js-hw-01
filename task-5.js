let input = prompt('Введите вашу страну');
let country, price;
input = input.toLowerCase();
switch (input) {
  case 'китай':
    country = 'Китай';
    price = 100;
    break;
  case 'чили':
    country = 'Чили';
    price = 250;
    break;
  case 'австралия':
    country = 'Австралия';
    price = 170;
    break;
  case 'индия':
    country = 'Индия';
    price = 80;
    break;
  case 'ямайка':
    country = 'Ямайка';
    price = 120;
    break;
  default:
    alert('В вашей стране доставка не доступна');
    break;
}
// if (country !== undefined) {
//   alert(`Доставка в ${country} будет стоить ${price} кредитов`);
// }
if (!country) {
} else {
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}
