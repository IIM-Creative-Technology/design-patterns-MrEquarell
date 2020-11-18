document.addEventListener('keydown',function (e) {
    // switch (e.code) {
    //     case 'ArrowUp':
    //     case 'ArrowLeft':
    //     case 'ArrowRight' :
    //     case 'ArrowDown':
    //         imageManager.execute(e.code)
    //         break
    // }
    // check if method in imageMaanger exists
    console.log(e.code)
    if (imageManager.hasOwnProperty(e.code)) {
        imageManager.execute(e.code)
    }
})

let imageManager = {
    image: document.querySelector('.twitter-icon'),
    ArrowUp: function () {
        console.log(this.image)
        this.image.style.top = this.image.offsetTop - 10 + 'px'
    },
    ArrowLeft: function () {
        this.image.style.left = this.image.offsetLeft - 10 + 'px'
    },
    ArrowRight: function () {
        this.image.style.left = this.image.offsetLeft + 10 + 'px'
    },
    ArrowDown: function () {
        this.image.style.top = this.image.offsetTop + 10 + 'px'
    },
}

imageManager.execute = function (key) {
    let methodName = imageManager[key]
    // let functionParams = [].splice.call(arguments, 1)
    return methodName.apply(imageManager)
}

setInterval(function () {
    // add a random move
    // var timeInterval = setInterval(function () {

    // }
    var randomMovement = function() {
        return anime.random(-20, 20) + 'rem'
    };

    var randomSpeed = function() {
        return anime.random(1000, 5000) + 'rem'  
    };
 
    document.ready(function(){
        var timelineParameters = anime.timeline({
            loop: true
        });

        timelineParameters
        .add({
            targets: '.twitter-icon',
            translateX: [ { value: randomMovement  }, { value: randomMovement }, { value: randomMovement } ],
            translateY: [ { value: -200  }, { value: -400 }, { value: -600 } ],
            opacity: [ {value: 0.5 }, { value: 0 }],
            easing: 'linear',
            duration: randomSpeed
        })
    });
}, 500)