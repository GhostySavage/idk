effects.starField.startScreenEffect()
let mySprite2 = sprites.create(img`
    . . . . . . . . . 1 . . . . . . 
    . . . . . . . 9 1 1 f . . . . . 
    . . . . . . 9 1 1 1 f . . . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 1 1 1 1 1 1 1 1 . . . 
    . . . 1 1 f f 1 1 1 f f 1 . . . 
    . 1 . 1 1 1 1 1 1 1 1 1 1 . . 1 
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    . 1 1 f f f f f f f f f f f 1 1 
    . 1 1 f 5 5 5 5 f 5 5 5 5 f 1 1 
    . 1 1 f 5 5 5 5 f 5 5 5 5 f 1 1 
    . 1 1 f . . . . f . . . . f 1 1 
    . 1 1 f . . . . . . . . . f 1 1 
    . 1 1 f . . . . . . . . . f 1 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2)
mySprite2.setStayInScreen(true)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 3 3 . . . . . 
    . . . . . . . 3 3 . . 3 . . . . 
    . . . . . . . 3 . . . 3 . . . . 
    . . . . . . . 3 . . . 3 . . . . 
    . . . . . . . 3 3 3 . 3 . . . . 
    . . . . . . . . . 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
