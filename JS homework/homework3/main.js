// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
//

// let x = +prompt(`Ведіть значення`);
// if (x === 0) {console.log(`Не вірно`);
// }
// else {console.log('Вірно');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt(`Ведіть число від 1 до 59`);
// if (time <= 15) {console.log(`Перша`)}
// else if (time <=30) {
//     console.log(`Друга`)}
// else if (time <=45) {
//     console.log(`Третя`)}
// else if(time <60) {
//     console.log(`Четверта`)}
// else {
//     console.log(`ERROR`)}


// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt(`enter day`)
// if (day === 0) {
//     console.log(`Error`)}
// else if (day <=10) {
//     console.log(`first dekade`)}
// else if (day <=20){
//     console.log(`second dekade`)}
// else if (day<=31) {
//     console.log(`therty dekade`)}
// else    {
//     console.log(`Error`)}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let day = +prompt(`enter the day!`)
// switch (day) {
//     case 1:
//                 console.log(`Monday`);
//                 break;
//     case 2:
//         console.log(`Tuesday`);
//         break;
//     case 3:
//         console.log(`Wednesday`);
//         break;
//     case 4:
//         console.log(`Thursday`);
//         break;
//     case 5:
//         console.log(`Friday`);
//         break;
//     case 6:
//         console.log(`Saturday`);
//         break;
//     case 7:
//         console.log(`Sunday`);
//         break;
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt(`enter furst number`);
// let number2 = +prompt(`enter second number`)
// if (number1<number2) {
//     console.log(number2)}
// else if (number1>number2) {
//     console.log(number1)}
// else {
//     console.log(`the numbers are equal`)}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

// let number = prompt(`enter information`) || `default`;
// console.log(number)