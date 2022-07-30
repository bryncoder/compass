// input.calibrateCompass()
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.compassHeading()))
    if (input.compassHeading() > 337.6 && input.compassHeading() < 360) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() >= 0 && input.compassHeading() <= 22.5) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() >= 22.6 && input.compassHeading() <= 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.compassHeading() >= 67.6 && input.compassHeading() <= 112.5) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() >= 112.6 && input.compassHeading() <= 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() >= 157.6 && input.compassHeading() <= 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() >= 202.6 && input.compassHeading() <= 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() >= 247.6 && input.compassHeading() <= 292.5) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() >= 292.6 && input.compassHeading() <= 337.5) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
