type BookType = {
  id: string;
  title: string;
  author: string;
  pages: number;
  read: boolean;
  published: Date;
};

const books: BookType[] = [];

type BookCreationType = Omit<BookType, "id">;

type BookUpdateType = Pick<BookType, "title" | "author">;
type BookIdType = Pick<BookType, "id">;

type CarType = {
  name: string;
  brand: string;
  model: string;
  year: number;
  engineType: "Petrol" | "Hybrid" | "Electric" | "Diese;";
};

type CarUpdateType = Partial<CarType>;

let carUpdated: CarUpdateType = {
  name: "Civic",
  brand: "Honda",
  model: "LX CVT",
  year: 2022,
  engineType: "Petrol",
};

console.log(carUpdated, carUpdated.model);

const updateCar = ({ name, brand, model, year, engineType }: CarUpdateType) => {
  const newCarData = {
    ...(name && { name }),
    ...(brand && { brand }),
    ...(model && { model }),
    ...(year && { year }),
    ...(engineType && { engineType }),
  };

  carUpdated = { ...carUpdated!, ...newCarData };
};
updateCar({ model: "Sport Touring Manual" });
console.log(carUpdated, carUpdated.model);

const addBook = ({
  title,
  author,
  pages,
  read,
  published,
}: BookCreationType) => {
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
