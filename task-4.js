const credits = 23580;
const pricePerDroid = 3000;
let message;
let quantityDroid = prompt('Enter quantity Droid ');
if (quantityDroid === null) {
  alert((message = 'Отменено пользователем!'));
} else {
  let totalPrice = quantityDroid * pricePerDroid;
  if (totalPrice > credits) {
    alert((message = 'Недостаточно средств на счету!'));
  } else {
    alert(
      (message = `Вы купили ${quantityDroid} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`),
    );
  }
}
