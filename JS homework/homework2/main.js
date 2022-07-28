// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let brandCar = [`audi`, `bmw`, `tesla`, `mazda`, `toyota`, `vw`, `reno`, `suzuki`, `man`, `iveco`];

console.log(brandCar)
    console.log(brandCar[0])
    console.log(brandCar[1])
    console.log(brandCar[2])
    console.log(brandCar[3])
    console.log(brandCar[4])
    console.log(brandCar[5])
    console.log(brandCar[6])
    console.log(brandCar[7])
    console.log(brandCar[8])
    console.log(brandCar[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: `abetka`,
    pageCount: 30,
    genre: `kids`
};
let book2 = {
    title: `matematyka`,
    pageCount: 45,
    genre: `kids`
};
let book3 = {
    title: `muzyka`,
    pageCount: 15,
    genre: `kids`
};
console.log(book1, book2, book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age

let newBook1 = {
    title: `Різдвозавр та список Нечемнюхів`,
    pageCount: 432,
    genre: `Дитячі книги для читання`,
    authors: [
        {
            name:`Tom`,
            age:33},
        {name:`Sheyn`,
    age:56}]
}
console.log(newBook1)




let newBook2 = {
    title: `Історії на ніч. Дісней`,
    pageCount: 96,
    genre: `Дитячі книги для читання`,
    authors: [
        {name:`Філ Вілкінсон`, age:67},{name: `Оля Русіна`, age:34}]
}
console.log(newBook2)

let newBook3 = {
    title: `Коли сніг пахне мандаринками`,
    pageCount: 328,
    genre: `Дитячі книги для читання`,
    authors: [{name:`Дорж Бату`, age:33},{name:`Андрій Бачинський`, age: 45},{name:`Надя Біла`, age:56},{name:`Ольга Войтенко`,age:56},{name:`Оксана Давидова`,age:67}]
}
console.log(newBook3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [{
    userName: `Vasyl`,
    password: 123
}, {
    userName: `Petro`,
    password: 234
}, {
    userName: `Volodymyr`,
    password: 345
},
    {userName: `Igor`,
    password: 456
}, {
    userName: `Mykyta`,
        password: 567
}, {
        userName: `Oleg`,
        password: 678
    }, {
        userName: `Viktor`,
        password: 456456
    }, {
        userName: `Roman`,
        password: 456456
    }, {
        userName: `Myhaylo`,
        password: 686769
    }, {
        userName:`Maksym`,
        password: 57567
    }];
console.log(users)


console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password)