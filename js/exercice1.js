function movie(title, budget, year, category){
    this.title = title
    this.budget = budget
    this.year = year
    this.category = category

    this.eurBudget = function (){
    return this.budget * 1.10}
}

let movie1 = new movie('titanic', 231223123, 1997, 'Drama')

console.log(movie1.budget, movie1.eurBudget())