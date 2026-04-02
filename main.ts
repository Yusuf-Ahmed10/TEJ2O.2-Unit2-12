/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Yusuf
 * Created on: Sep 2020
 * This program uses the distance sensor and save the current distance in cm to a variable.
*/

let distance = 0
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)

input.onButtonPressed(Button.A, function () {
    // save the current distance in cm to a variable
    distance = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // use that variable to change Neopixel colors
    if (distance < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
