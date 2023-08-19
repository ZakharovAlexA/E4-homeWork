const person = {
    city: "Moscow"
   }

   // создаем объект с прототипом
   const student = Object.create(person);
   
   // добавляем собственное свойство объекту student
   student.ownCity = "Piter";

   function getOwnProp(str, obj) {
    for (let key in obj) {
        if (key == str) {
            return(true);
        } else {
            return(false);
        }
    }
   }

console.log(getProp('ownCity', student))