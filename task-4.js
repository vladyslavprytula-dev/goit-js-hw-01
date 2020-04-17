const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let quantityDroid = prompt('Enter quantity Droid ');
totalPrice = quantityDroid * pricePerDroid;
if (quantityDroid === null) {
  alert((message = 'Отменено пользователем!'));
} else if (totalPrice > credits) {
  alert((message = 'Недостаточно средств на счету!'));
} else {
  alert(
    (message = `Вы купили ${quantityDroid} дроидов, на счету осталось ${
      credits - totalPrice
    } кредитов.`),
  );
}
