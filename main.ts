/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Devon
 * Created on: Sep 2026
 * This program will use bluetooth. 
*/

// variables
let objectDistance: number = 0
let alreadyWarned: boolean = false

// setup
basic.showIcon(IconNames.Happy)
radio.setGroup(247)

// receiver code
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})

// loop to read distance
while (true) {
    objectDistance = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
    )
    
    // resets it
    basic.clearScreen()
    basic.showNumber(objectDistance)

    // if it is less than 5 cm, displays way too close ONCE, doesn't spam it
    if (objectDistance < 5 && alreadyWarned == false) {
        radio.sendString("Way too close")
        alreadyWarned = true
    }

    else {
        alreadyWarned = false
    }

    basic.pause(1000)
}
