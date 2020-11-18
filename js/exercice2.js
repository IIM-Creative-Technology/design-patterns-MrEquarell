let moduleMovie = (function(){
    let title
    let year

    return {
        setTitle(titleParam) {
            title = titleParam
        },
        getTitle(){
            return title
        }
    }
})()

moduleMovie.setTitle('Titanic')
console.log(moduleMovie.getTitle())