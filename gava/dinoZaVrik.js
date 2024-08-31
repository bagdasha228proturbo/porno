const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener('keydown', function(start){
    if (start.key === 'Enter') {
        document.getElementById("dino").style.animationPlayState = 'running';
        document.getElementById("cactus").style.animationPlayState = 'running';
    }
})


function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout( function() {
        dino.classList.remove('jump')
    }, 1000)
    
}

document.addEventListener("keydown", function(event) {
    jump()
})

 let dinaGizn = setInterval(function(){
    let dinaTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 40 && cactusLeft > 0 && dinaTop >= 140) {
        document.getElementById("cactus").style.animation = 'none';
        clearInterval(dinaGizn);
    }
    // if (document.addEventListener('keydown', function(){
    //     if (start.key === 'Enter') {
    //         document.getElementById("dino").style.animationPlayState = 'running';
    //         document.getElementById("cactus").style.animationPlayState = 'running';
    //         return
    //     }

    // }));
 }, 10)

