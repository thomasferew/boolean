controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    move_Left = true
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    move_Left = false
})
let projectile: Sprite = null
let move_Left = false
move_Left = false
game.onUpdateInterval(500, function () {
    if (move_Left) {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . . . . . . . 3 3 . . . . . . 
. . . . . . . . . 3 3 . . . . . 
. . . . . . . . . . 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . . . . . . 3 3 3 . . . 
. . . . . . . . . 3 3 . . . . . 
. . . . . . . . 3 3 . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, 100), 20)
    } else {
        projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . 3 3 3 3 . . . . . . . . . 
. 3 3 3 3 . . . . . . . . . . . 
3 3 3 . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. 3 3 . . . . . . . . . . . . . 
. . 3 3 3 3 . . . . . . . . . . 
. . . 3 3 3 3 . . . . . . . . . 
. . . . . 3 3 3 . . . . . . . . 
. . . . . . . 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(0, -100), 30)
    }
})
