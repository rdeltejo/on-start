input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        # . . . #
        # # # # #
        `)
    basic.showArrow(ArrowNames.East)
    basic.pause(5000)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        # # # # #
        # . . . #
        `)
})
