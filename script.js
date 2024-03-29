const firstBlade = document.querySelector(".blade:nth-child(1)")
const secondBlade = document.querySelector(".blade:nth-child(2)")
const thirdBlade = document.querySelector(".blade:nth-child(3)")

// const btn0 = document.querySelector(".btn0")
// const btn1 = document.querySelector(".btn1")
// const btn2 = document.querySelector(".btn2")
// const btn3 = document.querySelector(".btn3")

btn0 = switchOn(0, 50)
btn1 = switchOn(10, 50)
btn2 = switchOn(20, 50)
btn3 = switchOn(30, 50)

let baseFirstBlade = 0
let baseSecondBlade = 120
let baseThirdBlade = 240

function switchOn(power) {
    return function() {
        if (power !== 0) {
            forever = setInterval(() => {
                firstBlade.style.transform = `rotate(${baseFirstBlade += power}deg)`
                secondBlade.style.transform = `rotate(${baseSecondBlade += power}deg)`
                thirdBlade.style.transform = `rotate(${baseThirdBlade += power}deg)`
            }, 150)
        } else {
            location.reload()
        }
    }
}