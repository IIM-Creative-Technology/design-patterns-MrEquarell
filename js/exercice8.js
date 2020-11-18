let iimQuery = {
    applyCss: function () {
        customElements.forEach(function (element) {
            console.log(element)
        })
    }
}

//target html tags with id
iimQuery.applyCss([
    'text-2',
    'text-3',
    'text-4',
    'text-5',
])