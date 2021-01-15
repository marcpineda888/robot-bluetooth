bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    basic.pause(1000)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.SemiColon), function () {
    commande = bluetooth.uartReadUntil(serial.delimiters(Delimiters.SemiColon))
    if (commande == "Avant gauche;") {
        robotbit.MotorRunDelay(robotbit.Motors.M1A, 255, 0.1)
    } else if (commande == "Avant droit;") {
        robotbit.MotorRunDelay(robotbit.Motors.M1B, 255, 0.1)
    } else if (commande == "Arrière gauche;") {
        robotbit.MotorRunDelay(robotbit.Motors.M2A, 255, 0.1)
    } else if (commande == "Arrière droit;") {
        robotbit.MotorRunDelay(robotbit.Motors.M2B, 255, 0.1)
    }
})
let commande = ""
bluetooth.startUartService()
basic.showString("go")
basic.pause(1000)
