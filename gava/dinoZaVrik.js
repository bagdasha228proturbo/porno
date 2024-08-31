const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event) {
    jump()
})

function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout( function() {
        dino.classList.remove('jump')
    }, 1000)

}
 let dinaGizn = setInterval(function(){
    let dinaTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusLeft < 40 && cactusLeft > 0 && dinaTop >= 140) {
        
    }
 })

