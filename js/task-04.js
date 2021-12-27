let credits = 23580;
let pricePerDroid = 3000;
let sum = prompt("Какое количество дроидов вы хотите купить?");
let totalPrice = 0;

if (sum === null) {
    console.log("Отменено пользователем!");
} else {
    totalPrice = Number(sum) * pricePerDroid;

    if (credits < totalPrice && sum !== null) {
        console.log("Недостаточно средств на счету!");
    } else {
        console.log(
            `Вы купили ${sum} дроидов, на счету осталось ${credits - totalPrice
            } кредитов.`
        );
    }
}