const firstBlade = document.querySelector(".blade:nth-child(1)")
const secondBlade = document.querySelector(".blade:nth-child(2)")
const thirdBlade = document.querySelector(".blade:nth-child(3)")
const allBlade = document.querySelectorAll(".blade")

// const btn0 = document.querySelector(".btn0")
// const btn1 = document.querySelector(".btn1")
// const btn2 = document.querySelector(".btn2")
// const btn3 = document.querySelector(".btn3")

btn0 = switchOn(0)
btn1 = switchOn(1000)
btn2 = switchOn(500)
btn3 = switchOn(250)

let baseFirstBlade = 0
let baseSecondBlade = 120
let baseThirdBlade = 240

function switchOn(power) {
    return function() {
        if (power !== 0) {
            for (let i = 0; i < allBlade.length; ++i) {
                if (i === 0) {
                    allBlade[i].style.animation = `rotate1 ${power}ms linear infinite forwards`
                } else if (i === 1) {
                    allBlade[i].style.animation = `rotate2 ${power}ms linear infinite forwards`
                } else if (i === 2) {
                    allBlade[i].style.animation = `rotate3 ${power}ms linear infinite forwards`
                }
            }
        } else {
            allBlade.forEach(blade => {
                blade.style.animation = "none"
            })
        }
    }
}