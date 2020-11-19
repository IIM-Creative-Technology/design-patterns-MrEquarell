const personFactory = {
    teacherFactory: new TeacherFactory(),
    studentFactory: new StudentFactory(),
}
 
let persons = []
 
/*document.querySelector('.add-teacher').addEventListener('click', function (e) {
    const name = e.currentTarget.parentNode.querySelector('input[type=text]').value
    persons.push(teacherFactory.create(name))
})
 
document.querySelector('.add-student').addEventListener('click', function (e) {
    const name = e.currentTarget.parentNode.querySelector('input[type=text]').value
    persons.push(studentFactory.create(name))
})*/
 
document.querySelectorAll('.add-person').forEach(function (buttonEl) {
    buttonEl.addEventListener('click', function (e) {
        const name = e.currentTarget.parentNode.querySelector('input[type=text]').value
 
        const role = e.currentTarget.getAttribute('data-role')
        const factory = role + 'Factory'
 
        persons.push(personFactory[factory].create(name))
    })
})
 
document.querySelector('.fire').addEventListener('click', function (e) {
    let resultsContainer = document.querySelector('.results')
    persons.forEach(function (person) {
        resultsContainer.innerHTML += person.sayHello()
            + '. I \'m a ' + person.constructor.name
            + '<br/>'
    })
})
 
function TeacherFactory() {
    this.create = function (name) {
        return new Teacher(name)
    }
}
 
function Teacher(name) {
    this.name = name
 
    this.sayHello = function () {
        return 'Hello ' + name
    }
}
 
function StudentFactory() {
    this.create = function (name) {
        return new Student(name)
    }
}
 
function Student(name) {
    this.name = name
 
    this.sayHello = function () {
        return 'Hello ' + name
    }
}