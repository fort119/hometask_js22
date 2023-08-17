class Student {
  name;
  surname;
  yearOfBirth;
  marks = [];
  attendance = new Array(25);

  constructor(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
  }

  addMark(mark) {
    if (!isNaN(mark) && mark > 0 && mark <= 100) {
      let toNum = Number(mark);
      this.marks.push(toNum);
    } else {
      console.log("некорректный ввод оценки")
    }
  }

  getAgeOfStudent() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear - this.yearOfBirth;
  };

  getAverageScore() {
    let sum = this.marks.reduce((acc, number) => acc + number, 0);
    let length = this.marks.length;
    return (sum / length).toFixed(2);
  };

  getAverageAttendance() {
    let sum = this.attendance.reduce((acc, number) => acc + number, 0);
    let length = this.attendance.length;
    return (sum / length).toFixed(2);
  }

  _pushMarkOfPresence(presenceMark) {
    let indexOfEmptyPosition = this.attendance.findIndex((x) => x === undefined);
    if (indexOfEmptyPosition === -1) {
      return;
    }
    this.attendance[indexOfEmptyPosition] = presenceMark;
  }

  present() {
    this._pushMarkOfPresence(true);
  };
  absent() {
    this._pushMarkOfPresence(false);
  };

  //проверка средней посещаемости и среднего балла
  summary() {
    switch (true) {
      case (this.getAverageAttendance() > 0.9 && this.getAverageScore() > 90):
        return console.log("Молодець!");
      case (this.getAverageAttendance() < 0.9 && this.getAverageScore() > 90 || this.getAverageAttendance() > 0.9 && this.getAverageScore() < 90):
        return console.log("Добре, але можна краще ");
      default:
        return console.log("Редиска!");
    }
  }
}

//1st student
let st1 = new Student("Ivan", "Ivanov", 2002);
console.log(st1)
console.log(st1.getAgeOfStudent());

st1.addMark(60);
st1.addMark(60);
st1.addMark(60);

st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.present();
st1.present();
st1.present();
st1.present();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();
st1.present();
st1.absent();

console.log(st1.getAverageScore());
st1.summary()

//2nd student

let st2 = new Student("Petr", "Petrov", 2007);
console.log(st2)
console.log(st2.getAgeOfStudent());

st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();
st2.present();

st2.addMark(20);
st2.addMark(10);
st2.addMark(40);
st2.addMark(70);
console.log(st2.getAverageScore());

st2.summary();

//3rd student

let st3 = new Student("Maxim", "Maximov", 2005);
console.log(st3)
console.log(st3.getAgeOfStudent());

st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();
st3.absent();

st3.addMark(100);
st3.addMark(100);
st3.addMark(100);
st3.addMark(100);
st3.addMark(100);

console.log(st3.getAverageScore())

st3.summary();

//4th student

let st4 = new Student("Jhon", "Doe", 2000);
console.log(st4)
console.log(st4.getAgeOfStudent());

st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();
st4.present();

st4.addMark(100);
st4.addMark(100);
st4.addMark(100);
st4.addMark(100);
st4.addMark(100);

console.log(st4.getAverageScore());

st4.summary();
