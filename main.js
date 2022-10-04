const axios = require('axios').default;

function showFullName(name, surname) {
  return `${name} ${surname}`
}

function calcImc(weigth, heigth) {
  return weigth / (heigth * heigth)
}

function calcResult(nota1, nota2, nota3) {
  const result = (nota1 + nota2 + nota3) / 3
  if (result >= 7) {
    console.log('Aprovado', result)
  } else {
    console.log('Reprovado', result)
  }
}

function calcImcWithResult(weigth, heigth) {
  const result = weigth / (heigth * heigth)

  if (result <= 18.5) {
    console.log("abaixo do peso", result)
  } else if (result >= 18.6 && result <= 24.9) {
    console.log("peso ideal", result)
  } else if (result >= 25 && result <= 29.9) {
    console.log("levemente acima do peso", result)
  } else {
    console.log('outro resultado', result)
  }
}

const students = [
  { name: 'Henrique', value: 8.6, achievement: false },
  { name: 'Lucas', value: 5.6, achievement: false },
  { name: 'Joao', value: 9.6, achievement: false },
  { name: 'Paulo', value: 6.6, achievement: false },
  { name: 'Cesare', value: 7.6, achievement: false },
]

function getFilteredStudent() {
  return students.filter(student => student.value >= 7)
}

function getAchievementStudents() {
  return students.map(student => {
    if (student.value > 9) {
      student.achievement = student.value > 9
    }
    return student
  })
}

function getResultStudents() {
  const sum = students.reduce((accumulator, item) => {
    return item.value + accumulator
  }, 0)

  return sum / students.length
}

function getGitHub(username) {
  axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      console.log(response.data[0].name)
    })
    .catch(() => console.log('Houve um erro ao recuperar os dados'))
}

async function getGitHubWithTryCatch(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`)
    console.log(response.data[0].name)

  } catch (error) {
    console.log('Houve um erro ao recuperar os dados')
  }
}

/* 1 */ console.log(showFullName('Henrique', 'Douglas'))
/* 2 */ console.log(calcImc(80, 1.60))
/* 3 */ calcResult(10, 9, 5)
/* 4 */ calcImcWithResult(90, 1.50)

/* 5 */console.log(getFilteredStudent())
/* 6 */console.log(getAchievementStudents())
/* 7 */console.log(getResultStudents())

/* 8 */

getGitHub("douglas-cavalcante")
getGitHub("andersonaguia")
getGitHub("Matheusvicentesn")
getGitHub("ry")
getGitHub("naoexisteteste")

getGitHubWithTryCatch("ry")







