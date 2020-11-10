function L () {
    point()
    tiret()
    point()
    point()
    lettre()
}
function P () {
    point()
    tiret()
    tiret()
    point()
    lettre()
}
function Q () {
    tiret()
    tiret()
    point()
    tiret()
    lettre()
}
function A () {
    point()
    tiret()
    lettre()
}
function D () {
    tiret()
    point()
    point()
    lettre()
}
function E () {
    point()
    lettre()
}
function O () {
    tiret()
    tiret()
    tiret()
    lettre()
}
function tiret () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.pause(200)
}
function F () {
    point()
    point()
    tiret()
    point()
    lettre()
}
function T () {
    tiret()
    lettre()
}
function M () {
    tiret()
    tiret()
    lettre()
}
function G () {
    tiret()
    tiret()
    point()
    lettre()
}
function mots () {
    basic.clearScreen()
    basic.pause(1000)
}
function B () {
    tiret()
    point()
    point()
    point()
    lettre()
}
function H () {
    point()
    point()
    point()
    point()
    lettre()
}
function V () {
    point()
    point()
    point()
    tiret()
    lettre()
}
function N () {
    tiret()
    point()
    lettre()
}
function point () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    basic.pause(50)
}
function Z () {
    tiret()
    tiret()
    point()
    point()
    lettre()
}
function I () {
    point()
    point()
    lettre()
}
function R () {
    point()
    tiret()
    point()
    lettre()
}
function S () {
    point()
    point()
    point()
    lettre()
}
function K () {
    tiret()
    point()
    tiret()
    lettre()
}
function C () {
    tiret()
    point()
    tiret()
    point()
    lettre()
}
function Y () {
    tiret()
    point()
    tiret()
    tiret()
    lettre()
}
function lettre () {
    basic.clearScreen()
    basic.pause(500)
}
function X () {
    tiret()
    point()
    point()
    tiret()
    lettre()
}
function J () {
    point()
    tiret()
    tiret()
    tiret()
    lettre()
}
function U () {
    point()
    point()
    tiret()
    lettre()
}
function W () {
    point()
    tiret()
    tiret()
    lettre()
}
basic.forever(function () {
    M()
    I()
    C()
    R()
    O()
    mots()
    B()
    I()
    T()
    mots()
})
