function defaite () {
    basic.clearScreen()
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    basic.clearScreen()
    basic.showString("Score:")
    basic.showNumber(compteur_points)
    basic.pause(2000)
    compteur_points = 0
    basic.clearScreen()
    joueur_pos = 2
    led.plot(joueur_pos, 4)
}
input.onButtonPressed(Button.A, function () {
    if (joueur_pos > 0) {
        led.unplot(joueur_pos, 4)
        joueur_pos += -1
        led.plot(joueur_pos, 4)
    } else {
        joueur_pos = 0
    }
})
function verification_point (joueur_pos: number, colonne: number) {
    if (joueur_pos == colonne) {
        compteur_points += 1
    } else {
        defaite()
    }
}
input.onButtonPressed(Button.B, function () {
    if (joueur_pos < 4) {
        led.unplot(joueur_pos, 4)
        joueur_pos += 1
        led.plot(joueur_pos, 4)
    } else {
        joueur_pos = 4
    }
})
let ligne = 0
let compteur_points = 0
let joueur_pos = 0
joueur_pos = 2
led.plot(joueur_pos, 4)
let led_posx = randint(0, 4)
let led_posy = 0
compteur_points = 0
basic.forever(function () {
    led_posx = randint(0, 4)
    led_posy = 0
    led.plot(led_posx, led_posy)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        for (let index_ligne = 0; index_ligne <= 3; index_ligne++) {
            ligne = 3 - index_ligne
            for (let index_colonne = 0; index_colonne <= 4; index_colonne++) {
                if (led.point(index_colonne, ligne)) {
                    led.unplot(index_colonne, ligne)
                    led.plot(index_colonne, ligne + 1)
                    if (ligne == 3) {
                        verification_point(joueur_pos, index_colonne)
                    }
                }
            }
        }
    }
})
