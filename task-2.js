const total = 100;
const ordered = 50;
const orderСompleted = 'Заказ оформлен, с вами свяжется менеджер';
const orderCanceled = 'На складе недостаточно твоаров!';
if (total <= ordered) {
  console.log(orderCanceled);
} else {
  console.log(orderСompleted);
}
