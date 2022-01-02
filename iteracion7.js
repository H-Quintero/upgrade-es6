// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
]

const totalNotas = exams.reduce((acc, exam) => acc + exam.score, 0)
console.log(totalNotas)

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().

// let aprovados = (nota) => {
//   let examAprovados = []
//   for(i = 0; i < nota.length; i++) {
//     if(nota[i].score >= 5) {
//       examAprovados.push(nota[i])
//     }
//   }
//   return alumnosAprovados
// }
const aprovados = exams.reduce((examAprovados, exam) => {
  if(exam.score >= 5) {
    examAprovados = examAprovados + exam.score
  }
  return examAprovados
}, 0)
console.log(aprovados)

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const numeroAlumnos = exams.reduce((acc, exam) => acc + exam.score / exams.length, 0)
console.log(numeroAlumnos)