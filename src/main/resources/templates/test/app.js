// const name = 'Vladimir';
// const lastName = 'Yakovlev'
// const age = 26
// const isProgrammer = true

// const person = {
//     name: 'Vladimir',
//     surname: 'Yakovlev',
//     language: ['ru', 'en'],
//     hasWife: true,
//     greet: function () {
//         console.log('greet')
//     }
// }
//
// person.language[2] = 'de'
// person.isProgrammer = true
// console.log(person)

// function giveMeName(name) {
//     return name
// }
//
// console.log(`My name is ${giveMeName('Vladimir')}, my age is ${age} year`)

// function num() {
//     return 5
// }
//
// const array = [1,2,'3',true, num()]
// console.log(array)

// const people = [
//     {name:'Vladimir', age: 26, budget: 15000},
//     {name:'Kate', age: 27, budget: 125000},
//     {name:'Gerasim', age: 46, budget: 15000}
// ]
//
// const index = people.findIndex(function (person) {
//     return person.budget === 15000
// })
//
// console.log(index)
// console.log(people[index])

// const person = {
//     name: 'Vladimir',
//     age: 26,
//     budget: 12000,
//     ['key' + (1 + 3)]: 'some key'
// }

// console.log(person.key4)
// console.log(person)
// delete person.key4
// console.log(person)

// for (let key in person) {
//     console.log(key + ': ' + person[key])
// }

// console.log(person)
// console.log(person.age)
// console.info(person.age)

// const getDate = () => new Promise(resolve => resolve([
//     1, 1, 2, 3, 5, 8, 13
// ]))
//
// const delay = (wait = 1000) => {
//     const promise = new Promise(resolve => {
//         setTimeout(() => {
//             resolve()
//         }, wait)
//     })
//     return promise
// }
//
// async function asyncExample() {
//     await delay(3000)
//     const data = await getDate()
//     console.log('Data', data)
// }
//
// asyncExample()

const bodyH1 = document.getElementById('hello')
// const bodyH2 = document.getElementsByTagName('h2')[0]
// const bodyH2 = document.getElementsByClassName('h2-class')[0]
const bodyH2 = document.querySelector('#bodyH2')
// const bodyH3 = bodyH2.nextElementSibling
const bodyH3 = document.querySelectorAll('h2')[1]

const bodyH3A = document.getElementById('bodyH2.2A')

console.log(bodyH1)
console.dir(bodyH1)
console.log(bodyH2)
console.dir(bodyH2)
console.log(bodyH3)
console.dir(bodyH3)

setTimeout(() => {
    setStyleForNode(bodyH1, 'Changed by JS')
    bodyH2.style.padding = '10px'
    bodyH2.style.textAlign = 'right'
}, 1000)

setTimeout(() => {
    bodyH3.style.background = 'deeppink'
    bodyH3.style.textAlign = 'center'
    bodyH3.style.padding = '2rem'
    bodyH3.style.fontSize = '2rem'

    // bodyH3.querySelector('a').innerText = 'Click me to go Google translate'
    bodyH3A.innerText = 'Нажми на меня, и я переведу теюя на сайт с барби'
    // bodyH3.children[0].style.color = '#B8860B'
    bodyH3A.style.color = 'gold'
}, 3000)

// bodyH3A.onclick = () => {
//     console.log('Click to Google translate')
// }

bodyH3A.addEventListener('click', (event) => {
    // event.preventDefault()
    // bodyH3.textContent = 'Ты попа-жопа'
    // bodyH3.style.color = '#B8860B'
    // event.target.setAttribute('href', 'https://www.youtube.com/')
    // console.log('Click to Google translate', event.target.getAttribute('href'))
})

setTimeout(() => {
    setStyleForNode(bodyH2, 'It\'s very nice')
}, 2000)

function setStyleForNode(node, text) {
    node.textContent = text
    node.style.color = 'gold'
    node.style.textAlign = 'center'
    node.style.background = 'deeppink'
    node.style.padding = '2rem'
    node.style.fontSize = '2rem'
}

// bodyH1.onclick = () => {
//     console.log('Кто-то ткнул на h1')
// }
// bodyH1.onmouseenter = () => {
//     console.log('В пределах h1')
// }
// bodyH1.onmouseleave = () => {
//     console.log('За пределами h1')
// }

bodyH1.onclick = () => {
    changeBackground(bodyH1)
}

bodyH2.addEventListener('dblclick', () => {
    changeBackground(bodyH2)
})

function changeBackground(node) {
    if (node.style.background === 'deeppink') {
        node.style.background = 'blanchedalmond'
    } else if (node.style.background === 'blanchedalmond') {
        node.style.background = 'linen'
    } else {
        node.style.background = 'deeppink'
    }
}

document.addEventListener(
    "keydown",
    (event) => {
        const keyName = event.key;
        if (keyName === "Control") {
            changeBackground(bodyH3)
        }
    }
);