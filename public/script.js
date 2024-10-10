"use strict";
const books = [];
let carUpdated = {
    name: "Civic",
    brand: "Honda",
    model: "LX CVT",
    year: 2022,
    engineType: "Petrol",
};
console.log(carUpdated, carUpdated.model);
const updateCar = ({ name, brand, model, year, engineType }) => {
    const newCarData = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (name && { name })), (brand && { brand })), (model && { model })), (year && { year })), (engineType && { engineType }));
    carUpdated = Object.assign(Object.assign({}, carUpdated), newCarData);
};
updateCar({ model: "Sport Touring Manual" });
console.log(carUpdated, carUpdated.model);
const addBook = ({ title, author, pages, read, published, }) => {
    const newBook = {
        id: title + author + published.toISOString(),
        title,
        author,
        pages,
        read,
        published,
    };
    books.push(newBook);
    console.log(books);
};
addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: true,
    published: new Date(1925, 4, 10),
});
addBook({
    title: "War and Peace",
    author: "Leo Tolstoy",
    pages: 1225,
    read: false,
    published: new Date(1869, 1, 1),
});
addBook({
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    pages: 234,
    read: true,
    published: new Date(1951, 6, 16),
});
