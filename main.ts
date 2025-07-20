namespace SpriteKind {
    export const loc = SpriteKind.create()
    export const Map = SpriteKind.create()
}
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Pressed, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Map)
    myMinimap = minimap.minimap(MinimapScale.Half, 1, 15)
    minimap.includeSprite(myMinimap, sprite_loc, MinimapSpriteScale.MinimapScale)
    mapSprite = sprites.create(minimap.getImage(myMinimap), SpriteKind.Map)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (browserEvents.E.isPressed()) {
        tiles.setCurrentTilemap(tilemap`niveau2`)
        scene.setBackgroundColor(12)
    }
})
browserEvents.Shift.onEvent(browserEvents.KeyEvent.Released, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Map)
    scene.cameraFollowSprite(mySprite)
})
function boot () {
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`niveau1`)
    sprite_loc = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 2 f f 2 2 2 . . . . 
        . . . . 2 2 2 f f 2 2 2 . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.loc)
    mySprite = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . b f e e f b . . . . . 
        . . . . . 1 f e e f 1 . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . . e e 4 4 5 5 4 4 e e . . . 
        . . . e . b b b b b b . e . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b . . b b . . . . . 
        . . . . . c c . . c c . . . . . 
        `, SpriteKind.Player)
    sprite_loc.follow(mySprite, 100)
    controller.moveSprite(mySprite)
    tiles.placeOnRandomTile(sprite_loc, assets.tile`myTile3`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    scene.cameraFollowSprite(mySprite)
}
let mySprite: Sprite = null
let mapSprite: Sprite = null
let sprite_loc: Sprite = null
let myMinimap: minimap.Minimap = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
boot()
game.onUpdateInterval(10, function () {
    if (browserEvents.Shift.isPressed()) {
        myMinimap = minimap.minimap(MinimapScale.Half, 1, 15)
        minimap.includeSprite(myMinimap, sprite_loc, MinimapSpriteScale.MinimapScale)
        mapSprite.setImage(minimap.getImage(myMinimap))
    }
})
