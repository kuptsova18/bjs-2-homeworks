class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set SetState(NewState) {
        if (NewState < 0) {
            this.state = 0;
        } else if (NewState > 100) {
            this.state = 100;
        } else {
            this.state = NewState;
        }
    }

    get GetState() {
        return this.state;
    }
}

class Magazine extends PrintEditionItem{
     constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        for (let book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let i=0; i< this.books.length; i++){
            if( this.books[i].name === bookName ){
            const book = this.books[i];
            this.books.splice(i,1);
            return book;
        }
        }
        return null;
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

const library1 = new Library("Библиотека имени Димитрова");
library1.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
library1.addBook(new FantasticBook("Айзек Азимов", "Основание", 1951, 255));
library1.addBook(new DetectiveBook("Агата Кристи", "Убийство в Восточном экспрессе", 1934, 256));
library1.addBook(new Magazine("Наука и жизнь", 1965, 80));

let foundBook = library1.findBookBy("releaseDate",1919);
if (!foundBook) {
    library1.addBook(new NovelBook("Джон Рид", "Десять дней, которые потрясли мир", 1919, 350));
}
console.log(library1);
const giveBook = library1.findBookBy("name","Убийство в Восточном экспрессе");
library1.giveBookByName(giveBook.name);
console.log(library1);

giveBook.state = 25;

giveBook.fix();
library1.addBook(giveBook);
 if (giveBook.state <= 30) {
    console.log("Книгу не приняли - состояние слишком плохое (" + giveBook.state + ")");
  } else {
    console.log("Книгу успешно вернули в библиотеку!");
  }
console.log(library1);


class Student {
  constructor(nameUser) {
    this.nameUser = nameUser;
    this.marks = {};
  }

  addMark(mark,subject){
    if(mark<2 || mark>5) {
        return;
    }
    // Если предмета нет, создаем пустой массив для него
    if(!this.marks[subject]) {
        this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if(!this.marks[subject] || this.marks[subject].length === 0) {
        return 0;
    }
    const totalMarks = this.marks[subject].reduce((total,mark)=> total+mark,0);
    return totalMarks / this.marks[subject].length;
  }
  getAverage() {
    const subjects = Object.keys(this.marks);
    
    // Если нет предметов, возвращаем 0
    if (subjects.length === 0) {
      return 0;
    }

    // Суммируем средние баллы по всем предметам
    const totalSum = subjects.reduce((sum, subject) => {
      return sum + this.getAverageBySubject(subject);
    }, 0);

    // Возвращаем общее среднее
    return totalSum / subjects.length;
  } 
}