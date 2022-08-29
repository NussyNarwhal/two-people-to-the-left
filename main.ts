input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showIcon(IconNames.Yes)
